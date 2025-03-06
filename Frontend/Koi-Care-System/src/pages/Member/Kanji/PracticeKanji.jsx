import { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

export default function PracticeKanji() {
  const [data, setData] = useState([])
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(null)
  const [userAnswer, setUserAnswer] = useState('')
  const [feedback, setFeedback] = useState('')
  const [showAnswer, setShowAnswer] = useState(false)
  const [loading, setLoading] = useState(false)
  const [selectedLevel, setSelectedLevel] = useState(5)
  const [quizStarted, setQuizStarted] = useState(false)
  const [wrongAnswers, setWrongAnswers] = useState([])
  const [showWrongAnswers, setShowWrongAnswers] = useState(false)
  const [inputDisabled, setInputDisabled] = useState(false)
  const [usedIndexes, setUsedIndexes] = useState(new Set())

  // Gọi API để lấy dữ liệu JLPT
  const fetchData = async (level) => {
    setLoading(true)
    try {
      const response = await axios.post('https://mazii.net/api/jlpt', {
        query: level,
        limit: 1000, // Lấy 10 câu hỏi
        page: 1,
        language: 'vi'
      })

      if (response.data.status === 200) {
        setData(response.data.results)
        setQuizStarted(true)
        setWrongAnswers([])
        setUsedIndexes(new Set()) // Reset danh sách câu đã dùng
        getRandomQuestion(response.data.results.length) // Chọn câu đầu tiên
      }
    } catch (error) {
      console.error('Lỗi khi gọi API:', error)
    } finally {
      setLoading(false)
    }
  }

  // Hàm lấy câu hỏi ngẫu nhiên
  const getRandomQuestion = (max) => {
    if (usedIndexes.size === max) {
      alert('Bạn đã làm hết tất cả câu hỏi! Quiz sẽ bắt đầu lại.')
      setUsedIndexes(new Set())
    }

    let randomIndex
    do {
      randomIndex = Math.floor(Math.random() * max)
    } while (usedIndexes.has(randomIndex))

    setUsedIndexes((prev) => new Set([...prev, randomIndex]))
    setCurrentQuestionIndex(randomIndex)
  }

  // Kiểm tra đáp án
  const checkAnswer = () => {
    if (data.length === 0 || currentQuestionIndex === null) return

    const correctAnswers = [
      ...data[currentQuestionIndex].phonetic.split(' '),
      ...data[currentQuestionIndex].mean.split('; ')
    ]

    if (correctAnswers.includes(userAnswer.trim())) {
      setFeedback('✅ Chính xác!')
    } else {
      setFeedback('❌ Sai rồi!')
      setWrongAnswers((prev) => [
        ...prev,
        {
          ...data[currentQuestionIndex],
          userAnswer
        }
      ])
      setInputDisabled(true)
    }

    setShowAnswer(true)
  }

  // Chuyển sang câu hỏi ngẫu nhiên tiếp theo
  const nextQuestion = () => {
    setFeedback('')
    setUserAnswer('')
    setShowAnswer(false)
    setInputDisabled(false)

    if (data.length > 0) {
      getRandomQuestion(data.length)
    }
  }

  // Quay lại chọn cấp độ
  const resetQuiz = () => {
    setQuizStarted(false)
    setData([])
    setCurrentQuestionIndex(null)
    setUserAnswer('')
    setFeedback('')
    setShowAnswer(false)
    setWrongAnswers([])
    setUsedIndexes(new Set())
  }

  return (
    <div className='flex items-center justify-center min-h-screen bg-gray-100 p-4'>
      <div className='w-full max-w-md p-6 bg-white shadow-lg rounded-lg'>
        <h1 className='text-2xl font-bold text-center mb-4'>JLPT Quiz</h1>

        {!quizStarted ? (
          <>
            <p className='text-center mb-2'>Chọn cấp độ JLPT:</p>
            <select
              className='w-full p-2 border rounded-lg mb-4'
              value={selectedLevel}
              onChange={(e) => setSelectedLevel(Number(e.target.value))}
            >
              <option value='5'>N5 (Dễ)</option>
              <option value='4'>N4 (Cơ bản)</option>
              <option value='3'>N3 (Trung cấp)</option>
              <option value='2'>N2 (Khó)</option>
              <option value='1'>N1 (Rất khó)</option>
            </select>

            <button
              className='w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600'
              onClick={() => fetchData(selectedLevel)}
              disabled={loading}
            >
              {loading ? 'Đang tải...' : 'Bắt đầu Quiz'}
            </button>
            <Link to='/' className='mb-2 px-3 text-sm sm:text-base underline'>
              Trở về trang chủ
            </Link>
          </>
        ) : showWrongAnswers ? (
          <>
            <h2 className='text-xl font-bold text-center mb-3'>Danh sách câu sai</h2>
            {wrongAnswers.length > 0 ? (
              <ul className='space-y-3'>
                {wrongAnswers.map((item, index) => (
                  <li key={index} className='p-3 bg-gray-200 rounded-lg'>
                    <p>
                      <strong>Câu hỏi:</strong> {item.word}
                    </p>
                    <p>
                      <strong>📌 Cách đọc:</strong> {item.phonetic.replace(/ /g, ' / ')}
                    </p>
                    <p>
                      <strong>💡 Nghĩa:</strong> {item.mean}
                    </p>
                    <p className='text-red-500'>
                      <strong>❌ Bạn đã trả lời:</strong> {item.userAnswer}
                    </p>
                  </li>
                ))}
              </ul>
            ) : (
              <p className='text-center text-gray-500'>Bạn không sai câu nào!</p>
            )}
            <button
              className='w-full bg-blue-500 text-white py-2 mt-3 rounded-lg hover:bg-blue-600'
              onClick={() => setShowWrongAnswers(false)}
            >
              Quay lại Quiz
            </button>
          </>
        ) : (
          <>
            {loading ? (
              <p className='text-center'>Đang tải dữ liệu...</p>
            ) : currentQuestionIndex !== null ? (
              <div className='text-center'>
                <p className='text-xl font-semibold mb-2'>{data[currentQuestionIndex].word}</p>
                <input
                  type='text'
                  placeholder='Nhập nghĩa hoặc cách đọc...'
                  className='w-full p-2 border rounded-lg mb-2'
                  value={userAnswer}
                  onChange={(e) => setUserAnswer(e.target.value)}
                  disabled={inputDisabled}
                />
                <button
                  className='w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600'
                  onClick={checkAnswer}
                  disabled={inputDisabled}
                >
                  Kiểm tra
                </button>

                {feedback && <p className='mt-3 text-lg'>{feedback}</p>}

                {showAnswer && (
                  <div className='mt-3 p-3 bg-gray-200 rounded-lg'>
                    <p>
                      <strong>📖 Đáp án:</strong>
                    </p>
                    <p className='text-lg font-semibold'>
                      📌 Cách đọc: {data[currentQuestionIndex].phonetic.replace(/ /g, ' / ')}
                    </p>
                    <p className='text-lg text-gray-700'>💡 Nghĩa: {data[currentQuestionIndex].mean}</p>
                  </div>
                )}

                <button
                  className='w-full bg-green-500 text-white py-2 mt-3 rounded-lg hover:bg-green-600'
                  onClick={nextQuestion}
                >
                  Câu tiếp theo
                </button>
                <button
                  className='w-full bg-yellow-500 text-white py-2 mt-3 rounded-lg hover:bg-yellow-600'
                  onClick={() => setShowWrongAnswers(true)}
                >
                  Xem câu đã sai ({wrongAnswers.length})
                </button>
                <button
                  className='w-full bg-red-500 text-white py-2 mt-3 rounded-lg hover:bg-red-600'
                  onClick={resetQuiz}
                >
                  Quay lại chọn cấp độ
                </button>
              </div>
            ) : null}
          </>
        )}
      </div>
    </div>
  )
}
