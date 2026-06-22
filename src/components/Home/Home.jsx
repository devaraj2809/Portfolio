import { heroStats } from '../../constants'
import Draj from '../../assets/Draj.jpeg'
function Home() {
  return (
    <section className="hero-section" id="home">
      <div className="shell hero-grid">
        <div className="hero-copy reveal-up">
          <p className="eyebrow">Software Developer · AI Enthusiast</p>
          <h1>Design-led portfolio in React JSX for a stronger first impression.</h1>
          <p className="hero-text">
            Innovative software developer specializing in Python, Java, React, and AI-powered
            solutions with a focus on building practical applications that solve real problems.
          </p>
          <div className="hero-actions">
            <a className="btn btn-primary" href="#projects">View Projects</a>
            <a className="btn btn-secondary" href="#contact">Contact Me</a>
          </div>
          <div className="stat-grid">
            {heroStats.map((stat) => (
              <article key={stat.label} className="stat-card">
                <span>{stat.label}</span>
                <strong>{stat.value}</strong>
              </article>
            ))}
          </div>
        </div>
        <div className="hero-visual reveal-up delay-2">
          <div className="portrait-card">
            <img src={Draj} alt="Abhishek portfolio visual" />
          </div>
          <div className="floating-panel">
            <p className="floating-label">Current focus</p>
            <h3> APIs, and full-stack frontend polish</h3>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Home