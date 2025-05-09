import React from 'react'

const Header = () => {
  return (
    <header className='h-96 bg-cover bg-center flex items-center justify-center text-white'
    style={{
        backgroundImage:"url('https://iticollege.edu/wp-content/uploads/2021/01/Information-Tecnology-3-copy.jpeg')"
    }}>
        <h1 className='text-5xl font-bold text-center bg-black/15 rounded-2xl p-4 backdrop-blur-xs' >🚀Welcome to my website</h1>
    </header>
  )
}

export default Header