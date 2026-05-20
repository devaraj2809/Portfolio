
import Certificate from "../Certificate/Certificate";
const Education = () => {
  const education = [
    {
      institution: "RV College of Engineering",
      degree: "B.E in Computer Science and Engineering",
      duration: "Aug 2024",
      icon: "🎓",
    },
    {
      institution: "Shree Vidyadhiraj Polytechnic, Kumta",
      degree: "Diploma in Computer Science and Engineering",
      duration: "Sep 2021",
      icon: "📚",
    },
  ];

  return (
    <>
    <section
      id="Education"
      className="px-6 py-20 md:px-20"
    >
      {/* Heading */}
      <div className="mb-16">
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          Education
        </h1>
        <p className="text-gray-400 mt-4 text-base md:text-lg">
          My academic journey and qualifications
        </p>
      </div>

      {/* Education Cards */}
      <div className="space-y-6 max-w-3xl">
        {education.map((item, index) => (
          <div
            key={index}
            className="group relative bg-white/5 border border-white/10 rounded-2xl p-8 shadow-lg hover:bg-white/8 hover:border-blue-500/50 transition-all duration-300 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-purple-500/0 group-hover:from-blue-500/5 group-hover:to-purple-500/5 transition-all duration-300"></div>
            
            <div className="relative flex items-start gap-4">
              <span className="text-4xl flex-shrink-0">{item.icon}</span>
              <div className="flex-1">
                <h2 className="text-xl md:text-2xl font-semibold text-white group-hover:text-blue-300 transition-colors">
                  {item.institution}
                </h2>

                <p className="text-gray-300 mt-2 text-base md:text-lg font-medium">
                  {item.degree}
                </p>

                <p className="text-gray-400 mt-2 text-sm md:text-base">
                  Completed: <span className="text-blue-400 font-semibold">{item.duration}</span>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>

    <Certificate />
    </>
  );
};

export default Education;