import { Button, ButtonGroup, TextField } from '@mui/material'
import axios from 'axios'
import { motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Loading from '../../../components/Loading'
import '../../../Path.css'

export default function Quiz() {
  const [kanjiList, setKanjiList] = useState([])
  const [currentKanji, setCurrentKanji] = useState(null)
  const [userAnswer, setUserAnswer] = useState('')
  const [examplesArray, setExamples] = useState([])
  const [feedback, setFeedback] = useState('')
  const [flipped, setFlipped] = useState(false)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [isRandomMode, setIsRandomMode] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [darkMode, setDarkMode] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [svg, setSvg] = useState('')
  const [svgKey, setSvgKey] = useState(0)
  const location = useLocation()
  const level = location.state?.level || 5
  const navigate = useNavigate()

  const fetchKanji = async (level) => {
    try {
      const response = await axios.post('https://mazii.net/api/jlpt', {
        query: level,
        limit: 1400,
        page: 1,
        language: 'vi'
      })
      setKanjiList(response.data.results)
      pickRandomKanji(response.data.results)
    } catch (err) {
      console.log(err)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    if (!kanjiList[currentIndex]) return

    const kanji = kanjiList[currentIndex].word
    if (!kanji) return

    const svgUrl = `https://data.mazii.net/kanji/0${kanjiList[currentIndex]?.word.codePointAt(0).toString(16)}.svg`

    fetch(svgUrl)
      .then((response) => response.text())
      .then((svg) => {
        setSvg(svg)
      })
      .catch((error) => console.error('Lỗi khi tải SVG:', error))
  }, [currentIndex, kanjiList])

  const fetchKanjiViet = async (example) => {
    try {
      const response = await axios.post('https://api.mazii.net/api/get-mean', {
        wordId: example[0]?.mobileId || 0,
        type: 'kanji',
        dict: 'javi',
        word: example[0]?.kanji || '',
        token: ''
      })
      setIsSubmitted(false)
    } catch (err) {
      setError('⚠️ Failed to load Kanji data.')
      console.log('object', err)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchKanji(level)
  }, [level])

  const pickRandomKanji = (list) => {
    if (list.length > 0) {
      let nextKanji
      if (isRandomMode) {
        nextKanji = list[Math.floor(Math.random() * list.length)]
      } else {
        const newIndex = (currentIndex + 1) % list.length
        setCurrentIndex(newIndex)
        nextKanji = list[newIndex]
      }
      setCurrentKanji(nextKanji)
      setUserAnswer('')
      setFeedback('')
      setFlipped(false)
    }
  }

  const pickPreviousKanji = () => {
    if (kanjiList.length > 0) {
      let newIndex = (currentIndex - 1 + kanjiList.length) % kanjiList.length
      setCurrentIndex(newIndex)
      setCurrentKanji(kanjiList[newIndex])
      setUserAnswer('')
      setFeedback('')
      setFlipped(false)
    }
  }

  const handleExamples = (e) => {
    const fetchExample = async () => {
      try {
        const response = await axios.post('https://mazii.net/api/search', {
          dict: 'javi',
          type: 'kanji',
          limit: 20,
          query: e,
          page: 1
        })
        setExamples(response.data.results)
        fetchKanjiViet(response?.data?.results)
      } catch (err) {
        setError('⚠️ Failed to load Kanji data.')
      } finally {
        setLoading(false)
      }
    }
    fetchExample()
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    if (!currentKanji) return
    const validAnswers = currentKanji.phonetic.trim().replaceAll('.').replaceAll(',').replaceAll('-').split(' ')
    if (validAnswers.includes(userAnswer.trim())) {
      setFeedback('✅ Correct!')
    } else {
      setFeedback('❌ Incorrect. Try again.')
    }
  }

  if (loading) {
    return <Loading />
  }

  if (error) {
    return <div className='text-center text-red-500 mt-10 text-xl'>{error}</div>
  }

  const svgMatch = svg.match(/<svg[^>]*>([\s\S]*?)<\/svg>/)
  if (!svgMatch) return ''
  const svgContent = svgMatch[1]

  const allPaths = svgContent.match(/<path[^>]*>/g) || []
  const groupMatches = svgContent.match(/<g[^>]*>.*?<\/g>/gs)

  let firstGroup = ''
  let firstGroupPaths = []
  let lastGroupPaths = []

  if (groupMatches && groupMatches.length >= 2) {
    firstGroup = groupMatches[0]
    firstGroupPaths = firstGroup.match(/<path[^>]*>/g) || []
    lastGroupPaths = groupMatches[groupMatches.length - 1].match(/<path[^>]*>/g) || []
  }

  const extractedPaths = [...allPaths, ...lastGroupPaths]
  const svgA = `<svg xmlns="http://www.w3.org/2000/svg" width='{109}' height='{109}' viewBox='0 0 109 109'>${firstGroup}${extractedPaths.join('\n')}</svg>`
  console.log('object', svgA)

  return (
    <div className='flex flex-col gap-16 items-center justify-center min-h-screen bg-gradient-to-r from-blue-400 to-indigo-500 p-6 text-center'>
      <h1 className='text-3xl font-bold text-white'>KANJI QUIZ N{level} 🎌</h1>

      <motion.div
        className='relative flex flex-col p-6 bg-white rounded-lg shadow-lg min-w-[50vw] min-h-[75vh]'
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ duration: 0.5 }}
        style={{ transformStyle: 'preserve-3d' }}
      >
        {!flipped ? (
          <div
            className='relative text-center flex flex-col justify-between min-h-[68vh]'
            style={{ backfaceVisibility: 'hidden' }}
          >
            <div className='flex justify-between '>
              <div className='flex gap-2'>
                <Button
                  onClick={() => navigate('/kanji')}
                  variant='contained'
                  color='primary'
                  className='w-4 h-10 absolute top-0 '
                >
                  <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor' className='size-6'>
                    <path d='M11.47 3.841a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 0 1.06-1.061l-8.689-8.69a2.25 2.25 0 0 0-3.182 0l-8.69 8.69a.75.75 0 1 0 1.061 1.06l8.69-8.689Z' />
                    <path d='m12 5.432 8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75V21a.75.75 0 0 1-.75.75H5.625a1.875 1.875 0 0 1-1.875-1.875v-6.198a2.29 2.29 0 0 0 .091-.086L12 5.432Z' />
                  </svg>
                </Button>
                <Button onClick={pickPreviousKanji} variant='contained' color='primary' className='w-4 h-10'>
                  <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor' className='size-6'>
                    <path
                      fillRule='evenodd'
                      d='M7.28 7.72a.75.75 0 0 1 0 1.06l-2.47 2.47H21a.75.75 0 0 1 0 1.5H4.81l2.47 2.47a.75.75 0 1 1-1.06 1.06l-3.75-3.75a.75.75 0 0 1 0-1.06l3.75-3.75a.75.75 0 0 1 1.06 0Z'
                      clipRule='evenodd'
                    />
                  </svg>
                </Button>
              </div>

              <ButtonGroup variant='contained' className='mx-2'>
                <Button color={isRandomMode ? 'primary' : 'default'} onClick={() => setIsRandomMode(true)}>
                  Random
                </Button>
                <Button
                  color={!isRandomMode ? 'primary' : 'default'}
                  onClick={() => {
                    setIsRandomMode(false)
                    setCurrentIndex(-1)
                  }}
                >
                  Sequential
                </Button>
              </ButtonGroup>
              <div className='flex gap-2'>
                <Button
                  onClick={() => pickRandomKanji(kanjiList)}
                  variant='contained'
                  color='primary'
                  className='w-4 h-10 '
                >
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth={1.5}
                    stroke='currentColor'
                    className='size-6'
                  >
                    <path strokeLinecap='round' strokeLinejoin='round' d='M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3' />
                  </svg>
                </Button>
                <Button
                  variant='contained'
                  color='primary'
                  onClick={() => setDarkMode((prev) => !prev)}
                  className='w-4 h-10 '
                >
                  {darkMode ? '☀️' : '🌙'}
                </Button>
              </div>
            </div>
            <p className='text-9xl font-bold'>{currentKanji?.word}</p>

            <form onSubmit={handleSubmit} className='flex flex-col gap-6 mb-4'>
              <TextField
                variant='outlined'
                fullWidth
                label='Enter Hiragana'
                value={userAnswer}
                onChange={(e) => setUserAnswer(e.target.value)}
                className='border rounded-lg'
              />
              <div>
                <Button type='submit' variant='contained' color='primary' className='w-full h-10'>
                  Submit
                </Button>
                {feedback && <p className='mt-2 text-lg'>{feedback}</p>}
              </div>
            </form>

            {feedback && (
              <div>
                <Button
                  onClick={() => {
                    setFlipped(true)
                    handleExamples(`${currentKanji.word}`)
                  }}
                  variant='contained'
                  color='success'
                  className='w-full h-10 mt-3'
                >
                  Show Details
                </Button>
              </div>
            )}
          </div>
        ) : (
          <div
            className='text-center p-3 flex flex-col justify-between max-h-[67vh] overflow-y-auto thin-scrollbar'
            style={{
              transform: 'rotateY(180deg)',
              backfaceVisibility: 'hidden'
            }}
          >
            <h2 className='text-3xl font-bold text-indigo-600'>Kanji Details</h2>
            <div className='flex justify-center w-full mt-5'>
              <div className='relative w-[rem] h-[18rem] rounded-lg bg-blue-100'>
                <div key={svgKey} className='svg-container' dangerouslySetInnerHTML={{ __html: svgA }} />
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth='1.5'
                  stroke='currentColor'
                  className='size-7 m-3 absolute top-0 right-0 cursor-pointer'
                  onClick={() => setSvgKey((prev) => prev + 1)}
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99'
                  />
                </svg>
              </div>
            </div>
            <div className='flex justify-between gap-4 mt-10'>
              <div className='text-xl text-start text-gray-700 space-y-2'>
                <p className='break-words whitespace-normal max-w-[300px]'>
                  <strong className='text-indigo-500'>Kun reading:</strong> {currentKanji.phonetic}
                </p>
                <p className='break-words whitespace-normal max-w-[300px]'>
                  <strong className='text-indigo-500'>Meaning:</strong> {currentKanji.mean}
                </p>
                <p>
                  <strong className='text-indigo-500'>Level:</strong> N{currentKanji.group}
                </p>
              </div>
              <div>
                <h3 className='text-xl text-start font-bold text-indigo-500'>Examples:</h3>
                <div className='mt-2 flex-1 text-gray-700 text-lg'>
                  {examplesArray?.map((example) =>
                    example?.examples?.slice(0, 3).map((ex, index) => (
                      <div key={index} className='flex items-center text-start gap-2'>
                        <p className='break-words whitespace-normal max-w-[500px]'>
                          <strong>
                            {ex.w}: {ex.h}
                          </strong>{' '}
                          ({ex.p}): {ex.m}
                        </p>
                      </div>
                    ))
                  )}
                </div>
              </div>
            </div>
            <div className='flex gap-3 mt-10'>
              <Button
                onClick={() => {
                  setFlipped(false)
                }}
                variant='contained'
                color='error'
                className='w-1/2 h-10'
              >
                Close
              </Button>
              <Button
                onClick={() => pickRandomKanji(kanjiList)}
                variant='contained'
                color='primary'
                className='w-1/2 h-10'
              >
                Next Kanji
              </Button>
            </div>
          </div>
        )}
      </motion.div>
    </div>
  )
}
