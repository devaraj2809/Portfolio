const ProjectCard = ({ title, description, technologies }) => {
  return (
    <div className="group relative bg-white/5 border border-white/10 rounded-2xl p-6 shadow-lg hover:bg-white/8 hover:border-blue-500/50 transition-all duration-300 overflow-hidden">
      
      {/* Gradient Background on Hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-purple-500/0 group-hover:from-blue-500/5 group-hover:to-purple-500/5 transition-all duration-300"></div>
      <div className="relative">
        {/* Title */}
        <h2 className="text-xl md:text-2xl font-semibold text-white mb-4 group-hover:text-blue-300 transition-colors">
          {title}
        </h2>

        {/* Description */}
        <ul className="space-y-3 text-gray-300 text-sm md:text-base mb-6">
          {description.map((item, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className="text-blue-400 flex-shrink-0 mt-1">▸</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech, i) => (
            <span
              key={i}
              className="bg-blue-500/20 text-blue-300 border border-blue-500/30 px-3 py-1 rounded-full text-xs md:text-sm font-medium hover:bg-blue-500/30 transition-all duration-300"
            >
              {tech}
            </span>
          ))}
        </div>
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
    <section id="Projects" className="px-6 py-20 md:px-20">
      
      {/* Heading */}
      <div className="mb-16">
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          Featured Projects
        </h1>
        <p className="text-gray-400 mt-4 text-base md:text-lg">
          Some of my recent work and accomplishments
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;