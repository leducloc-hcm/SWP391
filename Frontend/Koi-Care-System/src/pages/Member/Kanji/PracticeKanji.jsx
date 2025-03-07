import { useNavigate } from 'react-router-dom'

export default function PracticeKanji() {
  const navigate = useNavigate()

  const handleNavigation = (level) => {
    navigate('/quiz', { state: { level } })
  }

  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-400 to-indigo-500 p-6 text-center'>
      <h1 className='text-4xl font-bold text-white mb-6'>Welcome to Kanji Quiz 🎌</h1>
      <p className='text-lg text-white mb-4'>Select a level to start the quiz:</p>

      <div className='grid grid-cols-5 gap-4'>
        {[1, 2, 3, 4, 5].map((level) => (
          <button
            key={level}
            onClick={() => handleNavigation(level)}
            className='px-6 py-3 bg-white text-indigo-600 font-semibold rounded-lg shadow-md hover:bg-indigo-100 transition-all'
          >
            N{level}
          </button>
        ))}
      </div>
    </div>
  )
}
