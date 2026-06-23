
import aboutImage from '../../assets/about.jpg'
function About() {
  return (
    <section className="section" id="about">
      <div className="shell two-column-layout">
        <div className="section-copy reveal-up">
          <p className="eyebrow">About</p>
          <h2>Built around clarity, credibility, and a calmer visual rhythm.</h2>
          <p>
            This redesigned portfolio keeps your content at the center while improving the overall
            visual quality with better typography, a more refined color system, and cleaner spacing.
          </p>
          <p>
            It is structured to present your strengths in software development, AI integrations,
            backend systems, and application building without relying on heavy effects or cluttered layouts.
          </p>
        </div>
        <div className="media-card reveal-up delay-2">
          <img src={aboutImage} alt="About visual for portfolio" />
        </div>
      </div>
    </section>
  )
}
export default About