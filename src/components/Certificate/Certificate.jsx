import { certificates } from '../../constants'

function Certificate() {
  return (
    <section className="section" id="certificate">
      <div className="shell certificate-shell">
        <div className="section-head reveal-up">
          <p className="eyebrow">Certificate</p>
          <h2>Certifications and learning milestones that support the profile.</h2>
        </div>
        <div className="certificate-list">
          {certificates.map((certificate) => (
            <article className="certificate-card reveal-up" key={certificate}>
              <span className="certificate-badge">Verified Learning</span>
              <h3>{certificate}</h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Certificate