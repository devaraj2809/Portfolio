const Contact = ({ onClose }) => {
  return (
    <div
      className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div
        className="bg-white/10 border border-white/20 rounded-2xl p-8 w-full max-w-2xl relative backdrop-blur-xl shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 text-3xl hover:text-white hover:scale-110 transition-all"
        >
          ✕
        </button>
        {/* Heading */}
        <h1 className="text-white text-3xl md:text-4xl mb-2 text-center font-bold">
          Get In Touch
        </h1>
        <p className="text-gray-300 text-center mb-8">I'd love to hear from you. Send me a message!</p>
        {/* Form */}
        <form className="space-y-4">
          <div>
            <input
              className="w-full p-4 bg-white/10 text-white rounded-xl border border-white/20 placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:bg-white/20 transition-all"
              placeholder="Your Name"
            />
          </div>
          <div>
            <input
              className="w-full p-4 bg-white/10 text-white rounded-xl border border-white/20 placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:bg-white/20 transition-all"
              placeholder="Your Email"
              type="email"
            />
          </div>
          <div>
            <textarea
              className="w-full p-4 bg-white/10 text-white rounded-xl border border-white/20 placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:bg-white/20 transition-all resize-none"
              rows="5"
              placeholder="Your Message"
            />
          </div>

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