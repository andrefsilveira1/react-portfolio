import React, { useState } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import { FaSun, FaMoon } from 'react-icons/fa';
import "./index.css"

const Nav = ({ propsValue, onChange }) => {
  const [value, setValue] = useState(propsValue);

  function changeValue() {
    setValue(!value);
    onChange(!value);
  }

  return (
    <nav className="fixed top-0 left-0 w-full bg-white dark:bg-black shadow-md md:shadow-none">
      <div className="container mx-auto px-4 py-2 md:py-4 md:flex md:items-center md:justify-between">
        <div className="flex items-center">
          <Link to="#home" className="nav-link mr-4 text-blue-500 md:mr-8">
            Home
          </Link>
          <Link to="#skills" className="nav-link mr-4 text-blue-500 md:mr-8">
            Skills
          </Link>
          <Link to="#projects" className="nav-link mr-4 text-blue-500 md:mr-8">
            Projects
          </Link>
          <Link to="#about" className="nav-link mr-4 text-blue-500 md:mr-8">
            About me
          </Link>
          <Link to="#contact" className="nav-link mr-4 text-blue-500 md:mr-8">
            Contact
          </Link>
        </div>
        <div className="flex items-center">
          <label className="relative inline-flex items-center cursor-pointer ml-5">
            <input
              type="checkbox"
              value=""
              className="sr-only peer"
              onChange={changeValue}
            />
            <div className="select-none w-10 h-3 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[6px] after:left-[0px] after:bg-white after:rounded-full after:h-4 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
            {value ? (
              <FaSun size={27} className="ml-5 text-blue-500" />
            ) : (
              <FaMoon size={27} className="ml-5 text-blue-500" />
            )}
          </label>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
