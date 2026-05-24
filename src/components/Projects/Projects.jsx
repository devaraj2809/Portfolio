import { projects } from '../../constants'

function Projects() {
  return (
    <section className="section" id="projects">
      <div className="shell">
        <div className="section-head reveal-up">
          <p className="eyebrow">Projects</p>
          <h2>Selected work that highlights AI, Android, and application thinking.</h2>
        </div>
        <div className="project-grid">
          {projects.map((project) => (
            <article className="project-card reveal-up" key={project.title}>
              <div className="project-image-wrap">
                <img src={project.image} alt={project.title} />
              </div>
              <div className="project-body">
                <span className="meta-chip">{project.category}</span>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="tag-list">
                  {project.stack.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects