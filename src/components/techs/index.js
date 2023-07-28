import React, { useState } from "react";
import { FaReact } from "react-icons/fa";
import { BiLogoKubernetes , BiLogoDocker, BiLogoHtml5, BiLogoCss3, BiLogoSpringBoot, BiLogoGoLang, BiLogoTypescript, BiLogoVuejs} from "react-icons/bi";
import { DiHaskell } from "react-icons/di";
import "./index.css"

const Card = () => {

    return (
        <div className="tech-container d-flex justify-center">
            <div className="maincontainer">
                <div className="back">
                    <h4>React.js</h4>
                    <p>3 years of experience</p>
                </div>
                <div className="front">
                    <div className="image">
                        <FaReact size={80} />
                    </div>
                </div>
            </div>
            <div className="maincontainer">
                <div className="back">
                    <h4>Vue</h4>
                    <p>1 year of experience</p>
                </div>
                <div className="front">
                    <div className="image">
                        <BiLogoVuejs size={80}/>
                    </div>
                </div>
            </div>
            <div className="maincontainer">
                <div className="back">
                    <h4>HTML</h4>
                    <p>4 years of experience</p>
                </div>
                <div className="front">
                    <div className="image">
                        <BiLogoHtml5 size={80}/>
                    </div>
                </div>
            </div>
            <div className="maincontainer">
                <div className="back">
                    <h4>CSS</h4>
                    <p>4 years of experience</p>
                </div>
                <div className="front">
                    <div className="image">
                        <BiLogoCss3 size={80}/>
                    </div>
                </div>
            </div>
            <div className="maincontainer">
                <div className="back">
                    <h5>kubernetes</h5>
                    <p>1 year of experience</p>
                </div>
                <div className="front">
                    <div className="image">
                        <BiLogoKubernetes size={80}/>
                    </div>
                </div>
            </div>
            <div className="maincontainer">
                <div className="back">
                    <h4>Docker</h4>
                    <p>2 years of experience</p>
                </div>
                <div className="front">
                    <div className="image">
                        <BiLogoDocker size={80}/>
                    </div>
                </div>
            </div>
            <div className="maincontainer">
                <div className="back">
                    <h4>Spring</h4>
                    <p>1 year of experience</p>
                </div>
                <div className="front">
                    <div className="image">
                        <BiLogoSpringBoot size={80}/>
                    </div>
                </div>
            </div>
            <div className="maincontainer">
                <div className="back">
                    <h4>Go</h4>
                    <p>2 years of experience</p>
                </div>
                <div className="front">
                    <div className="image">
                        <BiLogoGoLang size={80}/>
                    </div>
                </div>
            </div>
            <div className="maincontainer">
                <div className="back">
                    <h5>Typescript</h5>
                    <p>3 years of experience</p>
                </div>
                <div className="front">
                    <div className="image">
                        <BiLogoTypescript size={80}/>
                    </div>
                </div>
            </div>
            <div className="maincontainer">
                <div className="back">
                    <h4>Haskell</h4>
                    <p>1 year of experience</p>
                </div>
                <div className="front">
                    <div className="image">
                        <DiHaskell size={80}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;
