import React, { useState } from 'react';
import { HashLink as Link } from "react-router-hash-link";
import "./index.css"

export default function Nav() {
  const [value, setValue] = useState(false);

  function changeValue() {
    setValue(!value);
  }
  return (
    <nav className='top-nav'>
      <Link to="#home">
        Home
      </Link>
      <Link to="#skills">
        Skills
      </Link>
      <Link to="#projects">
        Projects
      </Link>
      <Link to="#about">
        About me
      </Link>
      <Link to="#contact">
        Contact
      </Link>
      <label class="relative inline-flex items-center cursor-pointer ml-5">
        <input type="checkbox" value="" class="sr-only peer"  onChange={changeValue}/>
        <div class="select-none w-10 h-3 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[-2px] after:left-[0px] after:bg-white after:rounded-full after:h-4 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
      </label>
    </nav>
  )
}