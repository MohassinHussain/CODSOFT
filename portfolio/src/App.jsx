import { useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import './App.css'
import Homepage from './Components/Home/HomePage'
import Projects from './Components/Projects/Projects'
import About from './Components/About/About'
import Contact from './Components/Contact/Contact'
 
import  {BrowserRouter, Route, Routes} from 'react-router-dom'

function App() {

  return (
    <>
    <Navbar />
    <section id='home'>
    <Homepage />
    </section>
    <section id='projects'>
    <Projects />
    </section>
    <section id='about'>
    <About />

    </section>
    <section id='contact'>
    <Contact />
    </section>
    </>
   
  )
}

export default App
