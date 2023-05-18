import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PageHeader from './components/Header/Header'
import About from './components/About/About'
import Works from './components/Works/Works'
import Footer from './components/Footer/Footer'

export default function App() {

  return (
    <>
    <PageHeader />
    <About />
    <Works />
    <Footer />
    </>
  )
}