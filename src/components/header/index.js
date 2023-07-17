import React from 'react';
import "./index.css";
import circle from "./circle.png"

import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';

export default function HomeHeader() {
  return (
    <>
      <nav className='menu'>
        <input type="checkbox" className="menu-open" name="menu-open" id="menu-open" />
        <label className="menu-open-button" htmlFor="menu-open">
        <img alt="Logo message" src={circle} className='menu-open-button'/>
        </label>

        <a href="https://github.com/andrefsilveira1" rel="noreferrer" target='_blank' className="menu-item"> <FaGithub size={80} /> </a>
        <a href="https://www.linkedin.com/in/andr%C3%A9-freitas-b59964208/" rel="noreferrer" target='_blank' className="menu-item "><FaLinkedin size={80} /></a>
        <a href="https://www.instagram.com/andre_freitas_1/" className="menu-item" rel="noreferrer" target='_blank'> <FaInstagram size={80} /> </a>
        </nav>
      <section>
        <h1> Create new content here</h1>
      </section>
    </>
  );
}
