import Navbar from './Components/Navbar'
import Header from './Components/Header'
import Hero from './Components/Hero'
import Article from './Components/Article'
import Table from './Components/Table'
import Aside from './Components/Aside'
import Footer from './Components/Footer'

import './App.css'

function App() {


  return (
    <>
    <Navbar/>
    <Header/>
    <Hero/>
    <div className='flex flex-col md:flex-row gap-5 justify-between'>
      <div className='flex-1'>
      <Article/>
      <Table/>
      </div>
    <Aside/>
    </div>
    <Footer/>

    </>
  )
}

export default App
