import { useState } from 'react'

import Header from './components/Header'
import Home from './components/Home'
import { Route, Routes } from 'react-router-dom'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'


function App() {
  

  return (
    <>
      <Header/>
        <Routes>
         <Route path='/' element = {<Home/>}/>
         <Route path='/about' element = {<About/>}/>
         <Route path='/Projects' element = {<Projects/>}/>
         <Route path='/contact' element = {<Contact/>}/>
         </Routes>
    </>
  )
}

export default App
