import { skills } from '../../constants'

function Skill() {
  return (
    <section className="section section-soft" id="skills">
      <div className="shell">
        <div className="section-head reveal-up">
          <p className="eyebrow">Skills</p>
          <h2>A broad stack across languages, backend systems, AI, and frontend tools.</h2>
        </div>
        <div className="skill-grid">
          {skills.map(({ title, icon: Icon, items }) => (
            <article className="skill-card reveal-up" key={title}>
              <div className="skill-icon"><Icon /></div>
              <h3>{title}</h3>
              <div className="tag-list">
                {items.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
export default Skill