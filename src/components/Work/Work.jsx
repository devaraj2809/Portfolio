import { workHighlights } from '../../constants'

function Work() {
  return (
    <section className="section section-soft" id="work">
      <div className="shell">
        <div className="section-head reveal-up">
          <p className="eyebrow">Work Value</p>
          <h2>What this React version improves over the original portfolio build.</h2>
        </div>
        <div className="highlight-grid">
          {workHighlights.map(({ icon: Icon, title, description }) => (
            <article className="highlight-card reveal-up" key={title}>
              <div className="skill-icon"><Icon /></div>
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Work