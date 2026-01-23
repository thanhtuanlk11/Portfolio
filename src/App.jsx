import { useState, useEffect } from 'react'
import { useLanguage } from './js/shared/useLanguage'
import './styles/main.scss'
import Hero from './js/components/Hero'
import About from './js/components/About'
import Skills from './js/components/Skills'
import Experience from './js/components/Experience'
import Projects from './js/components/Projects'
import Education from './js/components/Education'
import Contact from './js/components/Contact'
import Navigation from './js/components/Navigation'
import BackToTop from './js/shared/BackToTop'

function App() {
  const [activeSection, setActiveSection] = useState('home')
  const { language } = useLanguage()

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'experience', 'projects', 'education', 'contact']
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="App">
      <Navigation activeSection={activeSection} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Contact />
      </main>
      <BackToTop />
    </div>
  )
}

export default App
