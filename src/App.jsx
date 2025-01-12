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

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="h-96">
      <Navbar/>
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
