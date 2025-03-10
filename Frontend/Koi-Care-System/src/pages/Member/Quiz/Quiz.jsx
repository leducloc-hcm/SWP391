import { Button, ButtonGroup, TextField } from '@mui/material'
import Badge from '@mui/material/Badge'
import axios from 'axios'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Loading from '../../../components/Loading'
import '../../../index.css'
import '../../../pages/Member/Quiz/Quiz.css'
import SakuraFalling from './SakuraFalling'

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
  const [submitted, setSubmitted] = useState(false)
  const [correct, setCorrect] = useState(false)
  const [savedKanjis, setSavedKanjis] = useState([])
  const [savedIndex, setSavedIndex] = useState(0)
  const [showSakura, setShowSakura] = useState(true)

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
      setSubmitted(false)
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
      setSubmitted(false)
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
      setFeedback('🌸 せいかい！すごい！💖')
      setCorrect(true)
    } else {
      setFeedback('❌ ちがうよ... もういっかいがんばって！💪')
      setCorrect(false)
    }
    setSubmitted(true)
  }

  const saveKanji = () => {
    if (currentKanji && !savedKanjis.some((k) => k.word === currentKanji.word)) {
      setSavedKanjis([...savedKanjis, currentKanji])
    }
  }

  const retrySavedKanji = () => {
    if (savedKanjis.length > 0) {
      let nextIndex = savedIndex === -1 ? 0 : savedIndex + 1
      if (nextIndex >= savedKanjis.length) nextIndex = 0

      setSavedIndex(nextIndex)
      setCurrentKanji(savedKanjis[nextIndex])
      setUserAnswer('')
      setFeedback('')
      setFlipped(false)
      setSubmitted(false)
    }
  }

  const clearSavedKanjis = () => {
    setSavedKanjis([])
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
    <div className='relative flex flex-col pt-4 gap-4 items-center justify-stretch min-h-screen bg-gradient-to-b from-red-100 to-pink-300'>
      <div className='flex items-center justify-center gap-4'>
        <p className='text-4xl text-black font-bold'>漢字-N{level}</p>
        <label className='absolute top-4 right-4 flex items-center cursor-pointer'>
          <span className='mr-2 text-white font-medium'>{showSakura}</span>
          <div className='relative'>
            <input
              type='checkbox'
              checked={showSakura}
              onChange={() => setShowSakura(!showSakura)}
              className='sr-only'
            />
            <div className='w-14 h-8 bg-gray-300 rounded-full shadow-inner'></div>
            <div
              className={`absolute left-1 top-1 w-6 h-6 rounded-full shadow-md transform transition ${
                showSakura ? 'translate-x-6 bg-pink-500' : 'bg-gray-500'
              }`}
            ></div>
          </div>
        </label>
        <div className='absolute bottom-4 right-4'></div>
        {showSakura && <SakuraFalling />}
      </div>

      <motion.div
        className='p-6 bg-white rounded-xl shadow-2xl'
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ duration: 0.5 }}
        style={{ transformStyle: 'preserve-3d' }}
      >
        {!flipped ? (
          // mat truoc
          <div
            className='text-center flex flex-col justify-between w-[60vw] min-h-[75vh]'
            style={{ backfaceVisibility: 'hidden' }}
          >
            <div className='flex justify-between '>
              <div className='flex gap-3'>
                <Button
                  onClick={() => navigate('/kanji')}
                  variant='contained'
                  color='primary'
                  className='w-4 h-10 absolute top-0'
                  sx={{
                    height: 44,
                    fontWeight: 'bold',
                    boxShadow: 2
                  }}
                >
                  <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor' className='size-6'>
                    <path d='M11.47 3.841a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 0 1.06-1.061l-8.689-8.69a2.25 2.25 0 0 0-3.182 0l-8.69 8.69a.75.75 0 1 0 1.061 1.06l8.69-8.689Z' />
                    <path d='m12 5.432 8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75V21a.75.75 0 0 1-.75.75H5.625a1.875 1.875 0 0 1-1.875-1.875v-6.198a2.29 2.29 0 0 0 .091-.086L12 5.432Z' />
                  </svg>
                </Button>
                <Button
                  onClick={pickPreviousKanji}
                  variant='contained'
                  color='primary'
                  className='w-4 h-10'
                  sx={{
                    height: 44,
                    fontWeight: 'bold',
                    boxShadow: 2
                  }}
                >
                  <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor' className='size-6'>
                    <path
                      fillRule='evenodd'
                      d='M7.28 7.72a.75.75 0 0 1 0 1.06l-2.47 2.47H21a.75.75 0 0 1 0 1.5H4.81l2.47 2.47a.75.75 0 1 1-1.06 1.06l-3.75-3.75a.75.75 0 0 1 0-1.06l3.75-3.75a.75.75 0 0 1 1.06 0Z'
                      clipRule='evenodd'
                    />
                  </svg>
                </Button>
                <Button
                  onClick={() => pickRandomKanji(kanjiList)}
                  variant='contained'
                  color='primary'
                  className='w-4 h-10'
                  sx={{
                    height: 44,
                    fontWeight: 'bold',
                    boxShadow: 2
                  }}
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
              </div>

              <ButtonGroup
                variant='contained'
                className='mx-2'
                sx={{
                  height: 44,
                  fontWeight: 'bold',
                  boxShadow: 2
                }}
              >
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
              <div className='flex gap-3'>
                <Badge badgeContent={savedKanjis.length} color='error'>
                  <Button
                    variant='contained'
                    color='primary'
                    onClick={saveKanji}
                    className='w-4 h-10'
                    sx={{
                      height: 44,
                      fontWeight: 'bold',
                      boxShadow: 2
                    }}
                  >
                    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor' className='size-5'>
                      <path
                        fillRule='evenodd'
                        d='M6.32 2.577a49.255 49.255 0 0 1 11.36 0c1.497.174 2.57 1.46 2.57 2.93V21a.75.75 0 0 1-1.085.67L12 18.089l-7.165 3.583A.75.75 0 0 1 3.75 21V5.507c0-1.47 1.073-2.756 2.57-2.93Z'
                        clipRule='evenodd'
                      />
                    </svg>
                  </Button>
                </Badge>
                {savedKanjis.length > 0 && (
                  <div className='flex gap-2'>
                    <Button
                      onClick={retrySavedKanji}
                      variant='contained'
                      color='primary'
                      className='w-4 h-10'
                      sx={{
                        height: 44,
                        fontWeight: 'bold',
                        boxShadow: 2
                      }}
                    >
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 24 24'
                        fill='currentColor'
                        className='size-6'
                      >
                        <path
                          fillRule='evenodd'
                          d='M4.755 10.059a7.5 7.5 0 0 1 12.548-3.364l1.903 1.903h-3.183a.75.75 0 1 0 0 1.5h4.992a.75.75 0 0 0 .75-.75V4.356a.75.75 0 0 0-1.5 0v3.18l-1.9-1.9A9 9 0 0 0 3.306 9.67a.75.75 0 1 0 1.45.388Zm15.408 3.352a.75.75 0 0 0-.919.53 7.5 7.5 0 0 1-12.548 3.364l-1.902-1.903h3.183a.75.75 0 0 0 0-1.5H2.984a.75.75 0 0 0-.75.75v4.992a.75.75 0 0 0 1.5 0v-3.18l1.9 1.9a9 9 0 0 0 15.059-4.035.75.75 0 0 0-.53-.918Z'
                          clipRule='evenodd'
                        />
                      </svg>
                    </Button>
                    <Button
                      onClick={clearSavedKanjis}
                      variant='outlined'
                      className='w-4 h-10'
                      sx={{
                        height: 44,
                        fontWeight: 'bold',
                        boxShadow: 2,
                        color: 'white',
                        background: 'red'
                      }}
                    >
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 24 24'
                        fill='currentColor'
                        className='size-6'
                      >
                        <path
                          fillRule='evenodd'
                          d='M16.5 4.478v.227a48.816 48.816 0 0 1 3.878.512.75.75 0 1 1-.256 1.478l-.209-.035-1.005 13.07a3 3 0 0 1-2.991 2.77H8.084a3 3 0 0 1-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 0 1-.256-1.478A48.567 48.567 0 0 1 7.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 0 1 3.369 0c1.603.051 2.815 1.387 2.815 2.951Zm-6.136-1.452a51.196 51.196 0 0 1 3.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 0 0-6 0v-.113c0-.794.609-1.428 1.364-1.452Zm-.355 5.945a.75.75 0 1 0-1.5.058l.347 9a.75.75 0 1 0 1.499-.058l-.346-9Zm5.48.058a.75.75 0 1 0-1.498-.058l-.347 9a.75.75 0 0 0 1.5.058l.345-9Z'
                          clipRule='evenodd'
                        />
                      </svg>
                    </Button>
                  </div>
                )}
              </div>
            </div>

            <div className='text-9xl font-semibold'>{currentKanji?.word}</div>

            <form onSubmit={handleSubmit} className='flex flex-col'>
              <TextField
                variant='outlined'
                fullWidth
                label='Enter Hiragana'
                value={userAnswer}
                onChange={(e) => setUserAnswer(e.target.value)}
                className='border rounded-lg'
              />
              <div className='mt-4'>
                {!submitted && (
                  <Button
                    type='submit'
                    variant='contained'
                    color='primary'
                    className='w-full h-10'
                    sx={{
                      height: 44,
                      fontWeight: 'bold',
                      boxShadow: 2
                      // backgroundColor: '#EC4899',
                      // '&:hover': { backgroundColor: '#DB2777' }
                    }}
                  >
                    Submit
                  </Button>
                )}
              </div>
              <div>
                {submitted && feedback && (
                  <div className='relative'>
                    <Button
                      onClick={() => {
                        setFlipped(true)
                        handleExamples(`${currentKanji.word}`)
                      }}
                      variant='contained'
                      color='success'
                      className='w-full h-10 mt-3'
                      sx={{
                        height: 44,
                        fontWeight: 'bold',
                        boxShadow: 2
                      }}
                    >
                      Show Details
                    </Button>

                    {feedback && (
                      <p
                        className={`absolute -top-[18vh] left-1/2 -translate-x-1/2 mt-1 text-lg text-white font-bold p-2 rounded shadow-lg ${
                          correct ? 'bg-green-400' : 'bg-red-400'
                        }`}
                      >
                        {feedback}
                      </p>
                    )}
                  </div>
                )}
                <div className='flex justify-end mt-2'>
                  <p className='text-sm font-semibold bg-blue-100 px-3 py-1 rounded-lg shadow-md'>
                    {`${currentIndex + 1} / ${kanjiList.length}`}
                  </p>
                </div>
              </div>
            </form>
          </div>
        ) : (
          // mat sau
          <div
            className='text-center flex flex-col justify-between w-[60vw] min-h-[70vh]'
            style={{
              transform: 'rotateY(180deg)',
              backfaceVisibility: 'hidden'
            }}
          >
            <div className='flex gap-6'>
              {/*  SVG vs mean kanji vs level vs kun */}
              <div className='w-[50%] flex flex-col text-gray-700 space-y-3'>
                <div className='relative w-full mb-4 p-4 bg-blue-100 rounded-xl shadow-lg'>
                  <div key={svgKey} className='svg-container' dangerouslySetInnerHTML={{ __html: svgA }} />
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth='1.5'
                    stroke='currentColor'
                    className='size-7 m-3 absolute top-0 right-0 cursor-pointer hover:text-indigo-500 transition'
                    onClick={() => setSvgKey((prev) => prev + 1)}
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99'
                    />
                  </svg>
                </div>
                <div className='flex flex-col text-start text-md gap-2 bg-gray-100 p-3 rounded-lg shadow-sm'>
                  <p className='break-words max-w-[100%] text-start line-clamp-2'>
                    <strong className='text-indigo-500'>Kun reading:</strong> {currentKanji.phonetic}
                  </p>
                  <p className='break-words max-w-[100%] text-start line-clamp-2'>
                    <strong className='text-indigo-500'>Meaning:</strong> {currentKanji.mean}
                  </p>
                  <p className='break-words max-w-[100%] text-start line-clamp-2'>
                    <strong className='text-indigo-500'>Level:</strong> N{currentKanji.group}
                  </p>
                </div>
              </div>

              {/* Right content: Kanji examples */}
              <div className='w-full'>
                <h3 className='text-xl text-center font-bold text-indigo-500'>EXAMPLES:</h3>
                <div className='mt-3 flex-1 text-gray-700 text-md space-y-2'>
                  {examplesArray?.map((example) =>
                    example?.examples?.slice(0, 4).map((ex, index) => (
                      <div
                        key={index}
                        className='flex items-center text-start gap-2 bg-gray-100 p-3 rounded-lg shadow-sm'
                      >
                        <p className='max-w-full line-clamp-2'>
                          <strong className='text-indigo-600'>
                            {ex.w}: {ex.h}
                          </strong>{' '}
                          (<span className='text-gray-500'>{ex.p}</span>): {ex.m}
                        </p>
                      </div>
                    ))
                  )}
                </div>
              </div>
            </div>

            {/* Buttons */}
            <div className='flex gap-4 mt-4'>
              <Button
                onClick={() => setFlipped(false)}
                variant='contained'
                color='error'
                fullWidth
                sx={{ height: 44, fontWeight: 'bold', boxShadow: 2 }}
              >
                Close
              </Button>
              <Button
                onClick={() => pickRandomKanji(kanjiList)}
                variant='contained'
                color='primary'
                fullWidth
                sx={{
                  height: 44,
                  fontWeight: 'bold',
                  boxShadow: 2
                }}
              >
                Next Kanji
              </Button>
              {savedKanjis.length > 0 && (
                <div className='flex gap-2'>
                  <Button
                    onClick={retrySavedKanji}
                    variant='contained'
                    color='primary'
                    className='w-4 h-10'
                    sx={{
                      height: 44,
                      fontWeight: 'bold',
                      boxShadow: 2
                    }}
                  >
                    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor' className='size-6'>
                      <path
                        fillRule='evenodd'
                        d='M4.755 10.059a7.5 7.5 0 0 1 12.548-3.364l1.903 1.903h-3.183a.75.75 0 1 0 0 1.5h4.992a.75.75 0 0 0 .75-.75V4.356a.75.75 0 0 0-1.5 0v3.18l-1.9-1.9A9 9 0 0 0 3.306 9.67a.75.75 0 1 0 1.45.388Zm15.408 3.352a.75.75 0 0 0-.919.53 7.5 7.5 0 0 1-12.548 3.364l-1.902-1.903h3.183a.75.75 0 0 0 0-1.5H2.984a.75.75 0 0 0-.75.75v4.992a.75.75 0 0 0 1.5 0v-3.18l1.9 1.9a9 9 0 0 0 15.059-4.035.75.75 0 0 0-.53-.918Z'
                        clipRule='evenodd'
                      />
                    </svg>
                  </Button>
                </div>
              )}
            </div>
          </div>
        )}
      </motion.div>
    </div>
  )
}
