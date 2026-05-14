import avatar from "../../assets/hero.png";

const Home = ({ onOpenContact }) => {
  return (
    <div className="min-h-screen text-white flex flex-col-reverse md:flex-row items-center justify-between px-6 py-10 md:px-20 md:py-24 gap-10">

      {/* Left Section */}
      <div className="w-full md:w-1/2 text-center md:text-left">
        <h1 className="text-4xl sm:text-5xl font-bold leading-tight tracking-tight">
          Hi, I am <span className="text-blue-400">Devaraj Naik</span>
        </h1>

        <p className="mt-6 text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed">
          Results-driven Software Developer with expertise in Java,
          JavaScript, SQL, and Frontend technologies.
          Passionate about building scalable and user-focused applications.
        </p>

        {/* ✅ BUTTONS */}
<div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
  <button
    onClick={onOpenContact}
    className="px-6 py-3 bg-blue-500 rounded-xl text-lg font-semibold hover:bg-blue-600 transition duration-300 shadow-lg"
  >
    Contact Me
  </button>
  
  <a
    href="/resume.pdf"
    target="_blank"
    rel="noopener noreferrer"
    className="px-6 py-3 bg-green-500 rounded-xl text-lg font-semibold hover:bg-green-600 transition duration-300 shadow-lg text-center"
  >
    Resume
  </a>
</div>
      </div>

      {/* Right Section */}
      <div className="w-full md:w-1/2 flex justify-center">
        <img
          className="w-64 sm:w-80 md:w-96 lg:w-[420px] object-contain"
          src={avatar}
          alt="Avatar"
        />
      </div>
    </div>
  );
};

export default Home;