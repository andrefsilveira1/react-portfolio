import {React, useEffect, useState} from 'react';
import "./index.css";

import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';



export default function HomeHeader() {

  const [avatar, setAvatar] = useState('');

  useEffect(() => {
    fetch("https://api.github.com/users/andrefsilveira1")
        .then((res) => res.json())
        .then(
            (result) => {
                console.log("header:", result)
                setAvatar(result.avatar_url)
            }, (error) => { console.log("err:", error) }
        )
}, [])
  return (
    <>
      <nav className='menu'>
        <input type="checkbox" className="menu-open" name="menu-open" id="menu-open" />
        <label className="menu-open-button" htmlFor="menu-open">
        <img alt="new logo " src={avatar}  className='menu-open-button'/>
        </label>

        <a href="https://github.com/andrefsilveira1" rel="noreferrer" target='_blank' className="menu-item"> <FaGithub size={80} /> </a>
        <a href="https://www.linkedin.com/in/andr%C3%A9-freitas-b59964208/" rel="noreferrer" target='_blank' className="menu-item "><FaLinkedin size={80} /></a>
        <a href="https://www.instagram.com/andre_freitas_1/" className="menu-item" rel="noreferrer" target='_blank'> <FaInstagram size={80} /> </a>
        </nav>
    </>
  );
}
