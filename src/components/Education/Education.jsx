import { education } from '../../constants'

function Education() {
  return (
    <section className="section section-soft" id="education">
      <div className="shell">
        <div className="section-head reveal-up">
          <p className="eyebrow">Education</p>
          <h2>Academic foundations that support practical development work.</h2>
        </div>
        <div className="timeline-grid">
          {education.map((item) => (
            <article className="timeline-card reveal-up" key={item.title}>
              <span className="meta-chip">{item.year}</span>
              <h3>{item.title}</h3>
              <p className="place">{item.place}</p>
              <p>{item.details}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
export default Education