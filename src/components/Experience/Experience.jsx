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
      className="px-6 py-14 md:px-12 lg:px-24 bg-black"
    >
      {/* Heading */}
      <div className="mb-12">
        <h1 className="text-3xl md:text-5xl font-bold text-white text-center md:text-left">
          Experience & Skills
        </h1>

        <p className="text-gray-400 mt-3 text-sm md:text-base text-center md:text-left">
          Technologies and professional experience
        </p>
      </div>

      {/* Main Layout */}
      <div className="flex flex-col lg:flex-row gap-10">
        
        {/* LEFT SIDE - SKILLS */}
        <div className="lg:w-1/2">
          <h2 className="text-2xl font-semibold text-white mb-6">
            Skills
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="group flex flex-col items-center justify-center p-6 bg-[#111] rounded-2xl border border-gray-800 shadow-lg hover:border-cyan-500 hover:scale-105 transition-all duration-300"
              >
                <div className={`${skill.color} mb-3`}>
                  {skill.icon}
                </div>

                <p className="text-gray-300 text-sm md:text-base font-medium">
                  {skill.name}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT SIDE - EXPERIENCE */}
        <div className="lg:w-1/2">
          <h2 className="text-2xl font-semibold text-white mb-6">
            Experience
          </h2>

          {/* Experience Card 1 */}
          <div className="bg-slate-900/60 border border-gray-800 rounded-2xl p-6 mb-6 shadow-lg hover:border-cyan-500 transition duration-300">
            <h3 className="text-xl font-semibold text-white">
              Data Analyst — Rapsol Technology
            </h3>

            <p className="text-gray-400 text-sm mt-1">
             Sep 2023 – Nov 2023
            </p>

            <ul className="mt-4 space-y-2 text-gray-300 text-sm">
              <li>• Working as a Data Analyst Intern</li>
              <li>• Performing data analysis and reporting</li>
              <li>• Handling data visualization and insights</li>
            </ul>
          </div>

          {/* Experience Card 2 */}
          <div className="bg-slate-900/60 border border-gray-800 rounded-2xl p-6 shadow-lg hover:border-cyan-500 transition duration-300">
            <h3 className="text-xl font-semibold text-white">
              Software Engineer — Vinatu Software (Startup)
            </h3>

            <p className="text-gray-400 text-sm mt-1">
              April 2025 - Present
            </p>

            <ul className="mt-4 space-y-2 text-gray-300 text-sm">
              <li>• Working as a Software Developer</li>
              <li>• Junior Software Engineer role</li>
              <li>• Building responsive web applications</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;