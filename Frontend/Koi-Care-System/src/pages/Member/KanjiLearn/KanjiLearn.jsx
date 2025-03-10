import axios from 'axios'
import { useEffect, useState } from 'react'
import Skeleton from 'react-loading-skeleton'
import { useLocation, useNavigate } from 'react-router-dom'
import '../Quiz/Quiz.css'
export default function KanjiLearn() {
  const [kanjiList, setKanjiList] = useState([])
  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)
  const [loading, setLoading] = useState(false)
  const location = useLocation()
  const level = location.state?.level || 5
  const limit = 50
  const navigate = useNavigate()
  const [open, setOpen] = useState(false)
  const [selectedKanji, setSelectedKanji] = useState(null)
  const [svg, setSvg] = useState('')
  const [svgKey, setSvgKey] = useState(0)

  useEffect(() => {
    const codePoint = selectedKanji?.kanji?.codePointAt(0)?.toString(16)
    const svgUrl = codePoint
      ? `https://data.mazii.net/kanji/0${codePoint}.svg`
      : `https://data.mazii.net/kanji/04f55.svg`

    fetch(svgUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Lỗi khi tải SVG: ${response.status}`)
        }
        return response.text()
      })
      .then((svg) => setSvg(svg))
      .catch((error) => console.error('Lỗi khi tải SVG:', error))
  }, [selectedKanji])

  const handleOpen = (kanji) => {
    setSelectedKanji(kanji)
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
    setSelectedKanji(null)
  }

  const fetchKanji = async (level, page) => {
    setLoading(false)
    try {
      const response = await axios.post('https://mazii.net/api/jlptkanji', {
        query: level,
        limit,
        page,
        language: 'vi'
      })

      if (response.data) {
        setKanjiList(response.data.results)
        setTotalPages(Math.ceil(response.data.total / limit))
      }
    } catch (err) {
      console.error('Error fetching Kanji:', err)
    } finally {
      setLoading(true)
    }
  }

  useEffect(() => {
    fetchKanji(level, page)
  }, [level, page])

  // if (loading) return <Loading />

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
    <div className='bg-gray-100 text-gray-900 p-6 min-h-screen rounded-lg'>
      <button
        onClick={() => navigate('/kanji')}
        className=' px-3 py-2 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600'
      >
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor' className='size-6'>
          <path
            fillRule='evenodd'
            d='M7.28 7.72a.75.75 0 0 1 0 1.06l-2.47 2.47H21a.75.75 0 0 1 0 1.5H4.81l2.47 2.47a.75.75 0 1 1-1.06 1.06l-3.75-3.75a.75.75 0 0 1 0-1.06l3.75-3.75a.75.75 0 0 1 1.06 0Z'
            clipRule='evenodd'
          />
        </svg>
      </button>

      <div className='bg-white shadow-lg rounded-lg p-6'>
        {loading ? (
          <div className='grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-10 gap-4'>
            {kanjiList.map((kanji, i) => (
              <div
                key={i}
                className='text-center p-4 bg-gray-50 rounded-lg border hover:bg-blue-100 cursor-pointer'
                onClick={() => handleOpen(kanji)}
              >
                <div className='text-3xl font-bold text-blue-600'>{kanji.kanji}</div>
                <div className='text-sm text-gray-600'>{kanji.mean?.split(',')[0]}</div>
              </div>
            ))}
          </div>
        ) : (
          <div className='grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-10 gap-4'>
            {[...Array(50)].map((_, i) => (
              <div key={i} className='text-center p-4 bg-gray-50 rounded-lg border'>
                <Skeleton variant='text' width={40} height={70} />
                <Skeleton variant='text' width={60} height={60} />
              </div>
            ))}
          </div>
        )}

        {totalPages > 1 && (
          <div className='flex justify-center mt-6 space-x-2'>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((num) => (
              <button
                key={num}
                onClick={() => setPage(num)}
                className={`px-3 py-1 rounded ${page === num ? 'bg-blue-500 text-white' : 'bg-gray-300 hover:bg-gray-400'}`}
              >
                {num}
              </button>
            ))}
          </div>
        )}
      </div>

      {open && selectedKanji && (
        <div className='fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center'>
          <div className='bg-white p-6 rounded-lg shadow-lg min-w-[60vw] max-h-[75vh] overflow-y-auto '>
            <div className='flex gap-5'>
              <div className='flex-1'>
                <h2 className='text-3xl font-bold text-blue-600'>{selectedKanji.kanji}</h2>
                <p className='text-gray-700 mt-2'>{selectedKanji.mean}</p>
                <div className='mt-4'>
                  <p>
                    <strong>On Reading:</strong> {selectedKanji.on}
                  </p>
                  <p>
                    <strong>Kun Reading:</strong> {selectedKanji.kun}
                  </p>
                  <p>
                    <strong>Level:</strong> N{selectedKanji.level}
                  </p>
                </div>
              </div>
              <div className='relative flex-1 w-full mb-4 p-4 bg-blue-100 rounded-xl shadow-lg max-w-[30vw]'>
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
            </div>

            <div className='mt-4 flex justify-between'>
              <div className='flex-1'>
                <h3 className='text-lg font-semibold'>Components</h3>
                {selectedKanji.compDetail?.map((comp, idx) => (
                  <p key={idx}>
                    <strong>{comp.w}</strong>: ({comp.h})
                  </p>
                ))}
              </div>

              <div className='flex-1'>
                <h3 className='text-lg font-semibold'>Examples</h3>
                {selectedKanji.examples?.map((ex, idx) => (
                  <p key={idx}>
                    <strong>{ex.w}</strong> ({ex.p}): {ex.m}
                  </p>
                ))}
              </div>
            </div>

            <button onClick={handleClose} className='mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600'>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
