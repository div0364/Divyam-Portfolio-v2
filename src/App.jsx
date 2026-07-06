import { useTheme } from './hooks/useTheme'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Achievements from './components/Achievements'
import Contact from './components/Contact'

export default function App() {
  const { theme, toggle } = useTheme()

  return (
    <div className="relative min-h-screen">
      <Navbar theme={theme} toggleTheme={toggle} />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Achievements />
        <Contact />
      </main>
    </div>
  )
}
