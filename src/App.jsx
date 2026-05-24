import './App.css'
import NavBar from './components/NavBar/NavBar'
import Home from './components/Home/Home'
import About from './components/about/about'
import Education from './components/Education/Education'
import Experience from './components/Experience/Experience'
import Skill from './components/Skills/Skill'
import Projects from './components/Projects/Projects'
import Work from './components/Work/Work'
import Certificate from './components/Certificate/Certificate'
import Contact from './components/Contacts/Contact'
import Fotter from './components/Fotter/Fotter'

function App() {
  return (
    <>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <NavBar />
      <main id="main-content">
        <Home />
        <About />
        <Education />
        <Experience />
        <Skill />
        <Projects />
        <Work />
        <Certificate />
        <Contact />
      </main>
      <Fotter />
    </>
  )
}

export default App