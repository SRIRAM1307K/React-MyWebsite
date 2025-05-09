import React from 'react'

const Hero = () => {
  return (
    <div className='bg-gray-200 p-5'>
        <img className='mx-auto rounded-lg' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZlJHYE4Vw52ri06omYD9Qf8smoG3PdJCsCg&s" alt="How to Code" />
        <h1 className='font-bold text-3xl mt-4'>🎨Build Amazing UIs with React & Vite</h1>
        <p className='text-gray-600 text-lg'>Fast, lightweight, and modern frontend developmenr.</p>
        <button className='bg-blue-500 px-4 py-2 mt-4 rounded-lg text-lg hover:bg-blue-400 cursor-pointer transition'>🚀 Get Started</button>
    </div>
  )
}

export default Hero