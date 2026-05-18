
import './App.css'
import { useState } from 'react';
import NavBar from './components/NavBar/NavBar.jsx';
import Home from './components/Home/Home.jsx';
import About from './components/about/about.jsx';
import Experience from './components/Experience/Experience.jsx';
import Projects from './components/Projects/Projects.jsx';
import Education from './components/Education/Education.jsx';
import Contact from './components/Contacts/Contact.jsx';
import Footer from './components/Fotter/Fotter.jsx';
function App() {
  
  const [openContact, setOpenContact] = useState(false);
  return (
    <>
      <div className='min-h-screen w-full overflow-hidden' style={{
        background: 'linear-gradient(135deg, #0f172a 0%, #1e1b4b 50%, #0f172a 100%)'
      }}>
        <div className='fixed inset-0 opacity-30 pointer-events-none' style={{
          background: 'radial-gradient(circle at 20% 50%, rgba(99, 102, 241, 0.2) 0%, transparent 50%)',
        }}></div>
        <div className='fixed inset-0 opacity-20 pointer-events-none' style={{
          background: 'radial-gradient(circle at 80% 80%, rgba(139, 92, 246, 0.2) 0%, transparent 50%)',
        }}></div>
        
        <div className='relative z-10'>
          <NavBar />
          <Home onOpenContact={() => setOpenContact(true)} />
          <About />
          <Experience />
          <Projects />
          <Education />
          <Footer/>
        </div>
        
        {openContact && (
          <Contact onClose={() => setOpenContact(false)} />
        )}
      </div>
    </>
  )
}

export default App
