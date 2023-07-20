import React from 'react';
import { HashLink as Link } from "react-router-hash-link";
import "./index.css"

export default function Nav() {
  return (
    <nav className='top-nav'>
      <Link to="#home">
        Home
      </Link>
      <Link to="#skills">
        Skills
      </Link>
      <Link to="about">
        About me
      </Link>
      <Link to="contact">
        Contact
      </Link>
    </nav>
  )
}