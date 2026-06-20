import { certificateUrls } from '../../constants'

function Certificate() {
  const { javaCertificate, pythonCertificate } = certificateUrls

  const certificates = [
    {
      id: 1,
      title: "Java Programming Fundamentals",
      issuer: "Recognized Institution",
      url: javaCertificate,
      icon: "🏆",
      color: "from-blue-600 to-blue-400",
      buttonColor: "bg-blue-500 hover:bg-blue-600"
    },
    {
      id: 2,
      title: "The Joy of Computing using Python",
      issuer: "Recognized Institution",
      url: pythonCertificate,
      icon: "🎯",
      color: "from-green-600 to-green-400",
      buttonColor: "bg-green-500 hover:bg-green-600"
    }
  ]

  return (
    <div className="container mx-auto px-4 py-12 text-white">
      <h2 className="text-4xl font-bold mb-12 text-center">
        Certificates
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {certificates.map((cert) => (
          <div
            key={cert.id}
            className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl shadow-2xl overflow-hidden border border-gray-700 hover:shadow-2xl hover:scale-105 transition duration-300 transform"
          >
            {/* Certificate Header with Gradient */}
            <div className={`bg-gradient-to-r ${cert.color} p-8 flex items-center justify-center`}>
              <span className="text-6xl">{cert.icon}</span>
            </div>

            {/* Certificate Content */}
            <div className="p-8 flex flex-col justify-between h-full">
              <div>
                <h3 className="text-2xl font-bold mb-2 text-center">
                  {cert.title}
                </h3>
                <p className="text-gray-400 text-center mb-6 text-sm">
                  {cert.issuer}
                </p>
                <div className="w-16 h-1 bg-gradient-to-r from-transparent via-gray-600 to-transparent mx-auto mb-6"></div>
              </div>

              {/* Button */}
              <a
                href={cert.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full py-3 px-4 ${cert.buttonColor} text-white font-semibold rounded-lg transition duration-300 text-center flex items-center justify-center gap-2`}
              >
                <span>View Certificate</span>
                <span>→</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Certificate;