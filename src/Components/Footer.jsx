import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='bg-gray-400 mt-4 p-10 text-white'>
        <h1 className='font-bold text-xl'>🌍©️ 2025 My Website. All Rights Reserved </h1>
        <div className='flex justify-center gap-6 text-lg mt-2'>
            <a className='flex items-center gap-2 hover:text-blue-500 hover:underline' href=""><FaFacebook/> Facebook</a>
            <a className='flex items-center gap-2 hover:text-blue-500 hover:underline' href=""><FaTwitter/> Twitter</a>
            <a className='flex items-center gap-2 hover:text-blue-500 hover:underline' href=""><FaInstagram/> Instagram</a>

        </div>
    </div>
  )
}

export default Footer