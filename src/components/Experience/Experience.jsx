import {
  FaCss3Alt,
  FaHtml5,
  FaJs,
  FaReact,
  FaJava, FaNodeJs,FaDocker,
} from 'react-icons/fa';
import { FaGitAlt, FaGithub } from 'react-icons/fa';
import {
  SiRedis,
  SiMysql,
  SiPostgresql,
  SiVite,  SiExpress,
} from 'react-icons/si';

const Experience = () => {
  const skills = [
    {
      icon: <FaHtml5 size={45} />,
      color: 'text-orange-500',
      name: 'HTML5',
    },
    {
      icon: <FaCss3Alt size={45} />,
      color: 'text-blue-500',
      name: 'CSS3',
    },
    {
      icon: <FaJs size={45} />,
      color: 'text-yellow-400',
      name: 'JavaScript',
    },
    {
      icon: <FaReact size={45} />,
      color: 'text-cyan-400',
      name: 'React',
    },
    {
      icon: <SiVite size={45} />,
      color: 'text-violet-400',
      name: 'Vite',
    },
    {
      icon: <FaNodeJs size={45} />,
      color: 'text-green-500',
      name: 'Node.js',
    },
    {
      icon: <SiExpress size={45} />,
      color: 'text-gray-300',
      name: 'Express.js',
    },
      {
      icon: <FaDocker size={45} />,
      color: 'text-blue-500',
      name: 'Docker',
    },
    {
      icon: <FaJava size={45} />,
      color: 'text-red-600',
      name: 'Java',
    },
    {
      icon: <SiRedis size={45} />,
      color: 'text-red-500',
      name: 'Redis',
    },
    {
      icon: <SiMysql size={45} />,
      color: 'text-blue-400',
      name: 'MySQL',
    },

    {
      icon: <SiPostgresql size={45} />,
      color: 'text-sky-500',
      name: 'PostgreSQL',
    },
    {
  icon: <FaGitAlt size={45} />,
  color: 'text-orange-600',
  name: 'Git',
},
{
  icon: <FaGithub size={45} />,
  color: 'text-white',
  name: 'GitHub',
},
  ];

  return (
    <section
      id="Experience"
      className="px-6 py-20 md:px-20"
    >
      {/* Heading */}
      <div className="mb-16">
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          Experience & Skills
        </h1>

        <p className="text-gray-400 mt-4 text-base md:text-lg">
          Technologies and professional expertise
        </p>
      </div>

      {/* Main Layout */}
      <div className="flex flex-col lg:flex-row gap-16">
        
        {/* LEFT SIDE - SKILLS */}
        <div className="lg:w-1/2">
          <h2 className="text-2xl md:text-3xl font-semibold text-white mb-8">
            Technical Skills
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-5">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="group flex flex-col items-center justify-center p-6 bg-white/5 rounded-2xl border border-white/10 shadow-lg hover:bg-white/10 hover:border-blue-500/50 hover:scale-110 transition-all duration-300 cursor-pointer"
              >
                <div className={`${skill.color} mb-3 group-hover:scale-125 transition-transform duration-300`}>
                  {skill.icon}
                </div>

                <p className="text-gray-300 text-xs sm:text-sm font-semibold text-center">
                  {skill.name}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT SIDE - EXPERIENCE */}
        <div className="lg:w-1/2">
          <h2 className="text-2xl md:text-3xl font-semibold text-white mb-8">
            Work Experience
          </h2>

          {/* Experience Card 1 */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 mb-6 shadow-lg hover:bg-white/8 hover:border-blue-500/50 transition-all duration-300">
            <div className="flex items-start justify-between mb-3">
              <h3 className="text-lg md:text-xl font-semibold text-white">
                Data Analyst
              </h3>
              <span className="text-xs md:text-sm px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full">Internship</span>
            </div>

            <p className="text-blue-400 font-medium text-sm mb-1">Rapsol Technology</p>

            <p className="text-gray-400 text-xs md:text-sm mb-4">
              Sep 2023 – Nov 2023
            </p>

            <ul className="space-y-2 text-gray-300 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-blue-400 mt-1">▸</span>
                <span>Working as a Data Analyst Intern analyzing trends and patterns</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-400 mt-1">▸</span>
                <span>Performing comprehensive data analysis and reporting</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-400 mt-1">▸</span>
                <span>Handling data visualization and generating actionable insights</span>
              </li>
            </ul>
          </div>

          {/* Experience Card 2 */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 shadow-lg hover:bg-white/8 hover:border-purple-500/50 transition-all duration-300">
            <div className="flex items-start justify-between mb-3">
              <h3 className="text-lg md:text-xl font-semibold text-white">
                Software Engineer
              </h3>
              <span className="text-xs md:text-sm px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full">Current</span>
            </div>

            <p className="text-purple-400 font-medium text-sm mb-1">Vinatu Software (Startup)</p>

            <p className="text-gray-400 text-xs md:text-sm mb-4">
              April 2025 - Present
            </p>

            <ul className="space-y-2 text-gray-300 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-purple-400 mt-1">▸</span>
                <span>Working as a Junior Software Engineer developing full-stack solutions</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-400 mt-1">▸</span>
                <span>Building responsive and scalable web applications with modern technologies</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-400 mt-1">▸</span>
                <span>Collaborating with teams to deliver high-quality software solutions</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;