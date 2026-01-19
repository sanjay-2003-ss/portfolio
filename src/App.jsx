import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './components/pages/Home'
import About from './components/pages/About'
import Skill from './components/pages/Skills'
import Project from './components/pages/Project'
import Contact from './components/pages/Contact'
import Navbar from './components/pages/Navbar'
import {BrowserRouter,Route,Routes, useNavigate} from 'react-router-dom'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='cursor-pointer'>
    <div id='home'>
      <Home/>
    </div>
    <div id='about'>
      <About/>
    </div>
    
    <div id='skill'>
      <Skill/>
    </div>
    <div id='project'>
      <Project/>
    </div>
    <div id='contact'>
      <Contact/>
    </div>
    </div>
    
    </>
  )
}

export default App
