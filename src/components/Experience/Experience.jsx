import { experience } from '../../constants'

function Experience() {
  return (
    <section className="section" id="experience">
      <div className="shell">
        <div className="section-head reveal-up">
          <p className="eyebrow">Experience</p>
          <h2>Industry exposure across AI integrations and desktop software systems.</h2>
        </div>
        <div className="experience-stack">
          {experience.map((item) => (
            <article className="experience-card reveal-up" key={item.title}>
              <div className="experience-top">
                <span className="meta-chip">{item.year}</span>
                <h3>{item.title}</h3>
                <p className="place">{item.company}</p>
              </div>
              <p>{item.details}</p>
              <div className="tag-list">
                {item.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
export default Experience