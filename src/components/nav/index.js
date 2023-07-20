import React from 'react';
import { BrowserRouter } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";

export default function Nav() {
  return (
    <nav>
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