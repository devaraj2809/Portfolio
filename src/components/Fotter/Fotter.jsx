import { MdOutlineEmail } from "react-icons/md";
import {CiLinkedin} from "react-icons/ci";
import {FaGithub} from "react-icons/fa";
const Footer=()=>{
    return(
       <footer id="Footer" className="border-t border-white/10 bg-gradient-to-b from-white/5 to-transparent text-white p-10 md:p-16">
        <div className="max-w-6xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-10">
            {/* Left Section */}
            <div>
                <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-3">Let's Connect</h1>
                <p className="text-gray-400 text-base md:text-lg leading-relaxed">
                  Feel free to reach out for opportunities, collaborations, or just to chat!
                </p>
            </div>

            {/* Right Section - Contact Links */}
            <div className="flex flex-col gap-4">
                <a href="mailto:devarajnaik098@gmail.com" className="flex items-center gap-3 p-3 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 hover:border-blue-500/50 transition-all duration-300 group">
                    <MdOutlineEmail size={24} className="text-blue-400 group-hover:scale-110 transition-transform"/>
                    <span className="text-sm md:text-base">devarajnaik098@gmail.com</span>
                </a>
                <a href="https://www.linkedin.com/in/devaraj-naik-3882b52a8?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-3 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 hover:border-blue-500/50 transition-all duration-300 group">
                    <CiLinkedin size={24} className="text-blue-400 group-hover:scale-110 transition-transform"/>
                    <span className="text-sm md:text-base">linkedin.com/in/devaraj-naik</span>
                </a>
                <a href="https://github.com/devaraj2809" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-3 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 hover:border-blue-500/50 transition-all duration-300 group">
                    <FaGithub size={24} className="text-blue-400 group-hover:scale-110 transition-transform"/>
                    <span className="text-sm md:text-base">github.com/devaraj2809</span>
                </a>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-500 text-sm text-center md:text-left">
              © 2025 Devaraj Naik. All rights reserved.
            </p>
            <p className="text-gray-500 text-sm text-center">
              Crafted with ❤️ using React & Vite
            </p>
          </div>
        </div>
       </footer>
    )
}
export default Footer;