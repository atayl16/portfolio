import { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Recommendations from './components/Recommendations'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './App.css'

function App() {
  const [currentSection, setCurrentSection] = useState('home')

  return (
    <div className="app">
      <Header currentSection={currentSection} setCurrentSection={setCurrentSection} />
      <main>
        <Hero setCurrentSection={setCurrentSection} />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
        <Recommendations />
      </main>
      <Footer />
    </div>
  )
}

export default App
