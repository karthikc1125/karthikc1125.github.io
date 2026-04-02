import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Education from './components/Education'
import Achievements from './components/Achievements'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ClickSpark from './components/ClickSpark'
import SplashCursor from './components/SplashCursor'
import './App.css'

function App() {
  return (
    <>
      <ClickSpark />
      <SplashCursor size={30} />
      <Header />
      <main className="main-content">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Achievements />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
