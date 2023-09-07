import React from 'react'
import Navbar from './components/Navbar/Navbar'
import './App.css'
import Main from './components/main/Main'
import About from './components/about/About'
import Services from './components/services/Services'
import Testimonials from './components/testimonials/Testimonials'
import Contact from './components/contact/Contact'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Main/>
      <About/>
      <Services/>
      <Testimonials/>
      <Contact/>
    </div>
  )
}

export default App