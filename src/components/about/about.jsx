import avatar from '../../assets/about.jpg';
import { IoArrowForward } from 'react-icons/io5';
const About=()=>{
    return(
       <div id="About" className="text-white md:flex overflow items-center md:flex-wrap md:justify-center bg-black shadow-xl mx-0 bg-opacity-30 rounded-lg p-12">
         <div>

            <h2 className="text-2xl md:text-4xl font-bold">About</h2>
            <div className="md:flex flex-wrap flex-col md:flex-row items-center">
                <img className="md:h-80 " src={avatar} alt="About Image" />
                <p className="text-sm md:text-2xl tracking-tight mt-5 md:mt-0 md:ml-10">
                    </p>
                    <ul>

                    <div className="flex items-center gap-2">
                        <IoArrowForward size={20} className="text-blue-500" />
                        <span className='w-96'>
                            <h1 className='text-xl md:text-2xl font-semibold leading-normal'>Frontend Developer</h1>
                            <p className='text-sm md:text-md leading-tight'>Building responsive and intuitive user interfaces with React, JavaScript, and modern CSS frameworks. Focused on creating seamless user experiences and high-performance web applications.</p>
                        </span>
                        </div>


                                       <div className="flex items-center gap-2">
                        <IoArrowForward size={20} className="text-blue-500" />
                        <span className='w-96'>
                            <h1 className='text-xl md:text-2xl font-semibold leading-normal'>Backend Developer</h1>
                            <p className='text-sm md:text-md leading-tight'>Developing robust server-side applications and APIs using Node.js and Express. Specializing in database integration, authentication, and creating scalable backend solutions.</p>
                        </span>
                        </div>



                                       <div className="flex items-center gap-2">
                        <IoArrowForward size={20} className="text-blue-500" />
                        <span className='w-96'>
                            <h1 className='text-xl md:text-2xl font-semibold leading-normal'>SQL Developer</h1>
                            <p className='text-sm md:text-md leading-tight'>Designing and optimizing databases with SQL, creating complex queries, and ensuring data integrity. Expertise in database architecture and performance optimization.</p>
                        </span>
                        </div>
                </ul>
            </div>
         </div>
       </div>
    )
}
export default About;