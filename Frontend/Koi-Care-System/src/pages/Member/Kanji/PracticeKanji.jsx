import { useNavigate } from 'react-router-dom'
import backgroundVideo from '../../../assets/0917(1).mp4'

export default function PracticeKanji() {
  const navigate = useNavigate()

  const handleNavigation = (level) => {
    navigate('/quiz', { state: { level } })
  }

  const handleNavigation2 = (level) => {
    navigate('/kanjiLearn', { state: { level } })
  }

  return (
    <div className='h-screen flex items-center justify-center relative'>
      <video className='absolute top-0 left-0 w-full h-full object-cover' src={backgroundVideo} autoPlay loop muted />
      <div className='absolute bg-white/20 p-10 rounded-3xl shadow-2xl backdrop-blur-md border border-gray-300 max-w-[600px] w-full'>
        <h1 className='text-4xl font-extrabold text-black drop-shadow-md mb-8 text-center'>Welcome to Kanji Quiz 🎌</h1>

        <div className='space-y-8'>
          <div>
            <p className='text-lg font-semibold text-black mb-4'>Select the Kanji level to learn:</p>
            <div className='grid grid-cols-5 gap-4'>
              {[1, 2, 3, 4, 5].map((level) => (
                <button
                  key={level}
                  onClick={() => handleNavigation2(level)}
                  className='px-6 py-3 bg-gradient-to-r from-pink-500 to-red-500 text-white font-bold rounded-lg shadow-lg hover:scale-105 transition-transform duration-200 ease-in-out hover:from-red-500 hover:to-pink-500'
                >
                  N{level}
                </button>
              ))}
            </div>
          </div>

          <div>
            <p className='text-lg font-semibold text-black mb-4'>Select a level to start the quiz:</p>
            <div className='grid grid-cols-5 gap-4'>
              {[1, 2, 3, 4, 5].map((level) => (
                <button
                  key={level}
                  onClick={() => handleNavigation(level)}
                  className='px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-bold rounded-lg shadow-lg hover:scale-105 transition-transform duration-200 ease-in-out hover:from-indigo-500 hover:to-blue-500'
                >
                  N{level}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
