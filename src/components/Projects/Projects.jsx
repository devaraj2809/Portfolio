const ProjectCard = ({ title, description, technologies }) => {
  return (
    <div className="bg-slate-900/60 border border-gray-800 rounded-2xl p-6 shadow-lg hover:border-cyan-500 hover:scale-[1.02] transition-all duration-300">
      
      {/* Title */}
      <h2 className="text-2xl font-semibold text-white mb-4">
        {title}
      </h2>

      {/* Description */}
      <ul className="space-y-3 text-gray-300 text-sm md:text-base mb-6">
        {description.map((item, i) => (
          <li key={i}>• {item}</li>
        ))}
      </ul>

      {/* Technologies */}
      <div className="flex flex-wrap gap-3">
        {technologies.map((tech, i) => (
          <span
            key={i}
            className="bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 px-3 py-1 rounded-full text-sm"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
};

const Projects = () => {
  const projects = [
    {
      title: "Predicting Weather Forecast",
      description: [
        "Used Python and Linear Regression for accurate weather predictions.",
        "Integrated NOAA data for periodic model retraining to maintain forecast accuracy.",
      ],
      technologies: ["Python", "Machine Learning", "Jupyter Notebook"],
    },
    {
      title: "Android App on Mango Fruit Disease Detection",
      description: [
        "Built an Android app using CNN with 95% accuracy.",
        "Worked on secure backend data handling and integrated cloud services using Firebase.",
      ],
      technologies: ["Android Studio", "Java", "Python", "Firebase", "CNNs"],
    },
    {
      title: "Contact Management System",
      description: [
        "Developed a desktop application using Java and Swing.",
        "Allows users to add, update, delete, and search contacts efficiently.",
        "Implemented indexing and hashing techniques for faster data retrieval.",
      ],
      technologies: ["Java", "Swing", "Data Structures", "Hashing", "Indexing"],
    },
    {
      title: "Result Management System",
      description: [
        "Developed a comprehensive system for managing and analyzing student academic results.",
        "Built database connectivity using MySQL and Python for table creation and queries.",
      ],
      technologies: ["MySQL", "Python", "Tkinter", "Pillow", "VS Code"],
    },
    {
      title: "Timer App",
      description: [
        "Developed a simple and responsive timer application using React.js.",
        "Implemented start, pause, reset, and countdown functionalities.",
        "Used React hooks for state management and real-time updates.",
      ],
      technologies: ["React.js", "JavaScript", "CSS", "React Hooks"],
    },
    {
  title: "Police Management Application",
  description: [
    "Built using Angular for frontend and Node.js for backend.",
    "Uses MySQL database for storing complaints and case records.",
    "Helps police receive complaints from victims and take action against culprits.",
  ],
  technologies: [
    "Angular",
    "Node.js",
    "MySQL",
    "REST API",
  ],
},
  ];

  return (
    <section id="Projects" className="px-6 py-14 md:px-12 lg:px-24 bg-black">
      
      {/* Heading */}
      <div className="mb-12 text-center md:text-left">
        <h1 className="text-3xl md:text-5xl font-bold text-white">
          Projects
        </h1>
        <p className="text-gray-400 mt-3 text-sm md:text-base">
          Some of the projects I have worked on
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;