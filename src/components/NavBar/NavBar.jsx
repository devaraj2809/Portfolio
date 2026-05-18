import { useState } from "react";
import { RiMenu2Line, RiCloseLine } from "@remixicon/react";

const NavBar = () => {

  const [menu, openMenu] = useState(false);
  const [showMenu, setShowMenu] = useState(true);

  return (
    <nav className='sticky top-0 z-50 flex flex-wrap justify-between md:items-center text-white px-10 py-6 md:px-20 backdrop-blur-md border-b border-white/10' style={{
      background: 'rgba(15, 23, 42, 0.7)',
    }}>

      <span className="text-2xl font-bold tracking-wider bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
        Portfolio
      </span>

      <ul
        className={`${menu ? "block" : "hidden"}
        mx-24 py-3 mt-4 font-semibold md:mt-0 px-4 rounded-2xl
        md:border-none text-center md:bg-transparent
        md:static md:mx-0 md:flex gap-8`}
        style={{
          background: menu ? 'rgba(15, 23, 42, 0.9)' : 'transparent',
          backdropFilter: menu ? 'blur(10px)' : 'none',
          border: menu ? '1px solid rgba(255, 255, 255, 0.1)' : 'none'
        }}
      >

        <a href="#About" className="group">
          <li className="text-base transition-all duration-300 p-2 md:p-0 hover:text-blue-400 relative">
            About
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-500 group-hover:w-full transition-all duration-300"></span>
          </li>
        </a>

        <a href="#Experience" className="group">
          <li className="text-base transition-all duration-300 p-2 md:p-0 hover:text-blue-400 relative">
            Experience
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-500 group-hover:w-full transition-all duration-300"></span>
          </li>
        </a>

        <a href="#Projects" className="group">
          <li className="text-base transition-all duration-300 p-2 md:p-0 hover:text-blue-400 relative">
            Projects
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-500 group-hover:w-full transition-all duration-300"></span>
          </li>
        </a>

        <a href="#Footer" className="group">
          <li className="text-base transition-all duration-300 p-2 md:p-0 hover:text-blue-400 relative">
            Contacts
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-500 group-hover:w-full transition-all duration-300"></span>
          </li>
        </a>

      </ul>

      {showMenu ? (
        <RiMenu2Line
          size={30}
          className="md:hidden absolute right-10 top-6 cursor-pointer hover:text-blue-400 transition-colors"
          onClick={() => {
            openMenu(!menu);
            setShowMenu(!showMenu);
          }}
        />
      ) : (
        <RiCloseLine
          size={30}
          className="md:hidden absolute right-10 top-6 cursor-pointer"
          onClick={() => {
            openMenu(!menu);
            setShowMenu(!showMenu);
          }}
        />
      )}

    </nav>
  );
};

export default NavBar;