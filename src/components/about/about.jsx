import avatar from '../../assets/hero.png';
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
                            <p className='text-sm md:text-md leading-tight'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate.</p>
                        </span>
                        </div>


                                       <div className="flex items-center gap-2">
                        <IoArrowForward size={20} className="text-blue-500" />
                        <span className='w-96'>
                            <h1 className='text-xl md:text-2xl font-semibold leading-normal'>Backend Developer</h1>
                            <p className='text-sm md:text-md leading-tight'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate.</p>
                        </span>
                        </div>



                                       <div className="flex items-center gap-2">
                        <IoArrowForward size={20} className="text-blue-500" />
                        <span className='w-96'>
                            <h1 className='text-xl md:text-2xl font-semibold leading-normal'>Sql Developer</h1>
                            <p className='text-sm md:text-md leading-tight'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate.</p>
                        </span>
                        </div>
                </ul>
            </div>
         </div>
       </div>
    )
}
export default About;