import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PageHeader from './components/Header/Header'
import About from './components/About/About'
import Works from './components/Works/Works'
import Footer from './components/Footer/Footer'
import Contact from './components/Contact/Contact'
import Resume from './pages/Resume/Resume'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { HashLink } from 'react-router-hash-link'

export default function App() {
  return (
    
    <Routes>
      <Route path='/' element={(
      <>
      <PageHeader />
      <About />
      <Works />
      <Contact />
      <Footer />
      </>  
      )}/>
    

    
      <Route path="/resume" element={<Resume />} />
    </Routes>
    
  )
}