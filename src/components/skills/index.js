import React from 'react';

export default function Skills() {
    return (
        <div id="skills">
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

            <section className="mb-12" id="projects">
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

            <section className="mb-12" id="about">
                <h2 className="text-3xl font-bold mb-4">About</h2>
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

            <section id="contact">
                <h2 className="text-3xl font-bold mb-4">Contact</h2>
                <p className="text-lg">Feel free to reach out to me at freitasandre38@gmail.com</p>
            </section>
            
            </div>
    )
}