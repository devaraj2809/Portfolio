
import Draj from "../../assets/Draj.jpeg";
import resume from "../../assets/Devaraj_Naik_Resume_.pdf";
const Home = ({ onOpenContact }) => {
  return (
    <div className="min-h-screen text-white flex flex-col-reverse md:flex-row items-center justify-between px-6 py-10 md:px-20 md:py-24 gap-10">

      {/* Left Section */}
      <div className="w-full md:w-1/2 text-center md:text-left animate-[fadeInUp_0.8s_ease-out]">
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold leading-tight tracking-tight">
          Hi, I am <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">Devaraj Naik</span>
        </h1>

        <p className="mt-8 text-lg sm:text-xl md:text-2xl text-gray-300 leading-relaxed">
          Results-driven Software Developer with expertise in <span className="text-blue-400 font-semibold">Java, JavaScript, SQL</span>, and Frontend technologies.
          Passionate about building <span className="text-purple-400 font-semibold">scalable and user-focused applications</span>.
        </p>

        {/* ✅ BUTTONS */}
        <div className="mt-10 flex flex-col sm:flex-row gap-5 justify-center md:justify-start">
          <button
            onClick={onOpenContact}
            className="px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl text-lg font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition duration-300 shadow-lg hover:scale-105 transform"
          >
            Contact Me
          </button>
          
          <a
            href={resume}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-transparent border-2 border-purple-500 rounded-xl text-lg font-semibold hover:bg-purple-500/10 transition duration-300 text-center hover:shadow-lg hover:shadow-purple-500/50 hover:scale-105 transform"
          >
            Download Resume
          </a>
        </div>
      </div>

      {/* Right Section */}
      <div className="w-full md:w-1/2 flex justify-center animate-[float_3s_ease-in-out_infinite]">
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-3xl opacity-30 animate-pulse"></div>
          <img
            className="relative w-64 sm:w-80 md:w-96 lg:w-[420px] object-contain rounded-full shadow-2xl border-4 border-blue-500/50 hover:border-purple-500 transition-all duration-300 hover:shadow-[0_0_50px_rgba(168,85,247,0.5)]"
            src={Draj}
            alt="Draj"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;