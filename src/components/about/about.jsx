import avatar from '../../assets/about.jpg';
import { IoArrowForward } from 'react-icons/io5';
const About=()=>{
    return(
       <div id="About" className="text-white px-6 py-20 md:px-20">
         <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">About Me</h2>
         </div>

         <div className="md:flex items-center gap-12">
            <div className="flex justify-center md:justify-start mb-8 md:mb-0">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl blur-2xl opacity-30"></div>
                <img className="relative md:h-80 rounded-2xl shadow-2xl border-2 border-purple-500/50" src={avatar} alt="About Image" />
              </div>
            </div>

            <div className="space-y-6">
                <ul className="space-y-6">

                    <div className="flex items-start gap-4 p-6 rounded-xl bg-white/5 border border-white/10 hover:bg-white/8 hover:border-blue-500/30 transition-all duration-300">
                        <IoArrowForward size={24} className="text-blue-400 flex-shrink-0 mt-1" />
                        <span className='flex-1'>
                            <h1 className='text-xl md:text-2xl font-semibold text-white mb-2'>Frontend Developer</h1>
                            <p className='text-sm md:text-base text-gray-300 leading-relaxed'>Building responsive and intuitive user interfaces with React, JavaScript, and modern CSS frameworks. Focused on creating seamless user experiences and high-performance web applications.</p>
                        </span>
                    </div>

                    <div className="flex items-start gap-4 p-6 rounded-xl bg-white/5 border border-white/10 hover:bg-white/8 hover:border-purple-500/30 transition-all duration-300">
                        <IoArrowForward size={24} className="text-purple-400 flex-shrink-0 mt-1" />
                        <span className='flex-1'>
                            <h1 className='text-xl md:text-2xl font-semibold text-white mb-2'>Backend Developer</h1>
                            <p className='text-sm md:text-base text-gray-300 leading-relaxed'>Developing robust server-side applications and APIs using Node.js and Express. Specializing in database integration, authentication, and creating scalable backend solutions.</p>
                        </span>
                    </div>

                    <div className="flex items-start gap-4 p-6 rounded-xl bg-white/5 border border-white/10 hover:bg-white/8 hover:border-pink-500/30 transition-all duration-300">
                        <IoArrowForward size={24} className="text-pink-400 flex-shrink-0 mt-1" />
                        <span className='flex-1'>
                            <h1 className='text-xl md:text-2xl font-semibold text-white mb-2'>SQL Developer</h1>
                            <p className='text-sm md:text-base text-gray-300 leading-relaxed'>Designing and optimizing databases with SQL, creating complex queries, and ensuring data integrity. Expertise in database architecture and performance optimization.</p>
                        </span>
                    </div>
                </ul>
            </div>
         </div>
       </div>
    )
}
export default About;