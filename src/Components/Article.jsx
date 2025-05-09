import React from 'react'

const Article = () => {
  return (
    <div className='bg-white p-4 shadow-xl mt-4'>
        <h1 className='font-bold text-3xl text-left'>📰 Latest News</h1>
        <div className='flex flex-col md:flex-row items-center gap-10 justify-center'>
        <img className='mt-5' width={400} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyusEd9m-keWiufxrCp0x6P99SPcfwBPSR7g&s" alt="" />
        <div>
            <h1 className='font-bold text-xl'>🚀 Vite is Revolutionizing Frontend</h1>
            <h2 className='text-gray-600 text-lg'>Vite is next-gen frontend tool that delivers fast development</h2>
        </div>
        </div>

    </div>
  )
}

export default Article