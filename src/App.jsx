import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Footer from './components/Footer'
import Services from './components/Services'
import AboutMe from './components/AboutMe'
import WhySAP from './components/WhySAP'
import Companies from './components/Companies'
import FAQ from './components/FAQ'
import DarkMode from './components/DarkMode'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className=" w-[100%] h-96">
      <Navbar/>
      <DarkMode/>
      <Hero/>
      <WhySAP/>
      <Services/>
      <AboutMe/>
      <Companies/>
      <FAQ/>
      <Footer/>
    </div>
  )
}

export default App
