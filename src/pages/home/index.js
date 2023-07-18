import React, { useEffect, useState , useMemo} from 'react';
import HomeHeader from "../../components/header";
import "./index.css";

export default function LandPage() {

const anchors = [
    { id: 'section1', label: 'Seção 1' },
    { id: 'section2', label: 'Seção 2' },
    { id: 'section3', label: 'Seção 3' },
    { id: 'section4', label: 'Seção 4' },
    ];
    const [activeSection, setActiveSection] = useState(anchors[0].id);
    const anchorIds = useMemo(() => anchors.map(anchor => anchor.id), [anchors]);

    useEffect(() => {
      const handleScroll = () => {
        const sections = anchorIds.map(id => document.getElementById(id));
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
    }, [anchorIds]);
  return (
    <>
    <nav className="menu">
      <ul>
        {anchors.map((anchor) => (
          <li key={anchor.id} className={activeSection === anchor.id ? 'active' : ''}>
            <a href={`#${anchor.id}`}>{anchor.label}</a>
          </li>
        ))}
      </ul>
    </nav>
    <div className="bg-gray-900 text-white min-h-screen font-roboto grid justify-items-center">
        <div className="bg-black min-h-screen text-white w-3/4">
            <HomeHeader className="menu"/>
        </div>
      <div className="container mx-auto p-8">
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-4">About Me</h2>
          <p className="text-lg">
            Hello there! Somehow you've got here, and now, what do you think about know me more ?
          </p>
        </section>

        <section className="section1 mb-12" id="section1">
          <h2 className="text-3xl font-bold mb-4">Skills</h2>
          <ul className="list-disc pl-6">
            <li>HTML5</li>
            <li>CSS3</li>
            <li>JavaScript</li>
            <li>React</li>
            <li>Next.js</li>
            <li>Tailwind CSS</li>
          </ul>
        </section>

        <section className="mb-12" id="section2">
          <h2 className="text-3xl font-bold mb-4">Projects</h2>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-blue-700 p-4 rounded">
              <h3 className="text-xl font-semibold mb-2">Project 1</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div className="bg-blue-700 p-4 rounded">
              <h3 className="text-xl font-semibold mb-2">Project 2</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div className="bg-blue-700 p-4 rounded">
              <h3 className="text-xl font-semibold mb-2">Project 3</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div className="bg-blue-700 p-4 rounded">
              <h3 className="text-xl font-semibold mb-2">Project 4</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>
        </section>

        <section className="mb-12" id="section3">
          <h2 className="text-3xl font-bold mb-4">Projects</h2>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-blue-700 p-4 rounded">
              <h3 className="text-xl font-semibold mb-2">Project 1</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div className="bg-blue-700 p-4 rounded">
              <h3 className="text-xl font-semibold mb-2">Project 2</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div className="bg-blue-700 p-4 rounded">
              <h3 className="text-xl font-semibold mb-2">Project 3</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div className="bg-blue-700 p-4 rounded">
              <h3 className="text-xl font-semibold mb-2">Project 4</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>
        </section>

        <section id="section5">
          <h2 className="text-3xl font-bold mb-4">Contact</h2>
          <p className="text-lg">Feel free to reach out to me at freitasandre38@gmail.com</p>
        </section>
      </div>
      <div>
        <p> Create new footer here!</p>
      </div>
    </div>
    </>
  );
};


