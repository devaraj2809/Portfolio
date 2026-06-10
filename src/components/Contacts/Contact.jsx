import { contacts } from '../../constants'

function Contact() {
  return (
    <section className="section section-contact" id="contact">
      <div className="shell contact-shell">
        <div className="contact-copy reveal-up">
          <p className="eyebrow">Contact</p>
          <h2>Let the portfolio end with a cleaner, stronger contact section.</h2>
          <p>
            Replace, extend, or connect these links to your actual deployment, resume, and professional profiles.
          </p>
        </div>

        <div className="contact-grid">
          {contacts.map(({ icon: Icon, title, value, href }) => (
            <a
              key={title}
              className="contact-card reveal-up"
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
            >
              <div className="contact-icon"><Icon /></div>
              <div>
                <span>{title}</span>
                <strong>{value}</strong>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Contact