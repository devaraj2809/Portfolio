const Education = () => {
  const education = [
    {
      institution: "RV College of Engineering",
      degree: "B.E in Computer Science and Engineering",
      duration: "Aug 2024",
    },
    {
      institution: "Shree Vidyadhiraj Polytechnic, Kumta",
      degree: "Diploma in Computer Science and Engineering",
      duration: "Sep 2021",
    },
  ];

  return (
    <section
      id="Education"
      className="px-6 py-14 md:px-12 lg:px-24 bg-black"
    >
      {/* Heading */}
      <div className="mb-12 text-center md:text-left">
        <h1 className="text-3xl md:text-5xl font-bold text-white">
          Education
        </h1>
        <p className="text-gray-400 mt-3 text-sm md:text-base">
          My academic background
        </p>
      </div>

      {/* Education Cards */}
      <div className="space-y-6">
        {education.map((item, index) => (
          <div
            key={index}
            className="bg-slate-900/60 border border-gray-800 rounded-2xl p-6 shadow-lg hover:border-cyan-500 transition duration-300"
          >
            <h2 className="text-xl md:text-2xl font-semibold text-white">
              {item.institution}
            </h2>

            <p className="text-gray-300 mt-2 text-sm md:text-base">
              {item.degree}
            </p>

            <p className="text-gray-400 mt-1 text-sm">
              {item.duration}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;