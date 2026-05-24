import { useEffect, useState } from 'react'
import { navLinks } from '../../constants'

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [theme, setTheme] = useState(() =>
    window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  )
  const [active, setActive] = useState('home')

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
  }, [theme])

  useEffect(() => {
    const sections = document.querySelectorAll('main section[id]')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { rootMargin: '-35% 0px -45% 0px', threshold: 0.15 }
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const onScroll = () => {
      document.body.classList.toggle('is-scrolled', window.scrollY > 24)
    }
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className="site-header">
      <div className="shell nav-shell">
        <a href="#home" className="brand" aria-label="Abhishek R Juvatkar home">
          <span className="brand-mark">AR</span>
          <span>Abhishek</span>
        </a>

        <nav className="site-nav" aria-label="Primary">
          <button
            className="menu-toggle"
            type="button"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            <span />
            <span />
          </button>

          <div className={`nav-panel ${menuOpen ? 'is-open' : ''}`}>
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className={active === link.id ? 'is-active' : ''}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}

            <button
              type="button"
              className="theme-toggle"
              onClick={() => setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'))}
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? '☼' : '◐'}
            </button>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default NavBar