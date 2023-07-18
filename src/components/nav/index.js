import React, { useEffect, useState } from 'react';
import './Menu.css';

const Menu = ({ anchors }) => {
  const [activeSection, setActiveSection] = useState(anchors[0].id);

  useEffect(() => {
    const handleScroll = () => {
      const sections = anchors.map(anchor => document.getElementById(anchor.id));
      let currentSection = '';

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (window.pageYOffset >= sectionTop - sectionHeight / 2) {
          currentSection = section.getAttribute('id');
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [anchors]);

  return (
    <nav className="menu">
      <ul>
        {anchors.map((anchor) => (
          <li key={anchor.id} className={activeSection === anchor.id ? 'active' : ''}>
            <a href={`#${anchor.id}`}>{anchor.label}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Menu;
