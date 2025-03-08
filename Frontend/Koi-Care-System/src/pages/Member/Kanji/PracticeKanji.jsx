import { useNavigate } from 'react-router-dom'
import backgroundVideo from '../../../assets/0917(1).mp4'
import { useState } from 'react'

export default function PracticeKanji() {
  const navigate = useNavigate()

  const handleNavigation = (level) => {
    navigate('/quiz', { state: { level } })
  }

  return (
    <div className='h-screen flex flex-col items-center justify-center'>
      <video className='absolute top-0 left-0 w-full h-full object-cover' src={backgroundVideo} autoPlay loop muted />
      <div className='absolute bg-white p-8 rounded-3xl shadow-md w-full max-w-[600px] bg-opacity-30 backdrop-blur-0 border border-gray-300'>
        <h1 className='text-4xl font-bold text-black mb-6 text-center'>Welcome to Kanji Quiz 🎌</h1>
        <p className='text-lg font-bold text-black mb-4'>Select a level to start the quiz:</p>

        <div className='grid grid-cols-5 gap-4'>
          {[1, 2, 3, 4, 5].map((level) => (
            <button
              onMouseEnter={() => import('../../Member/Quiz/Quiz')}
              key={level}
              onClick={() => handleNavigation(level)}
              className='px-6 py-3 bg-red-500 text-white font-semibold rounded-lg shadow-md hover:bg-red-600 transition-all'
            >
              N{level}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
