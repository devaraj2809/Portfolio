
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
      

    <div className='bg-[#171d32] h-auto w-full overflow-hidden'>
<NavBar />
<Home onOpenContact={() => setOpenContact(true)} />
<About />
<Experience />
<Projects />
<Education />
<Footer/>
  {openContact && (
        <Contact onClose={() => setOpenContact(false)} />
      )}
    </div>
    </>
  )
}

export default App
