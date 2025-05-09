import React from 'react'
import { FaBook, FaReact, FaRocket } from 'react-icons/fa'

const Aside = () => {
  return (
    <div className='bg-gray-200 p-4 rounded mt-4'>
        <h1 className='font-bold text-2xl text-left'>📌 Related Links</h1>
        <div className='flex flex-col text-blue-500 text-left mt-5 text-lg'>
        <a href="" className=' flex  items-center gap-2 hover:underline'><FaBook/> Vite Documentation</a>
        <a href="" className=' flex  items-center gap-2 hover:underline'><FaReact/> React Guide</a>
        <a href="" className=' flex  items-center gap-2 hover:underline'><FaRocket/> Frontend Trends</a>
        </div>

    </div>
  )
}

export default Aside