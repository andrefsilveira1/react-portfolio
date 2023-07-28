import React from "react";
import { FaReact } from "react-icons/fa";
import { BiLogoKubernetes , BiLogoDocker, BiLogoHtml5, BiLogoCss3, BiLogoSpringBoot, BiLogoGoLang, BiLogoTypescript, BiLogoVuejs} from "react-icons/bi";
import { DiHaskell } from "react-icons/di";
import "./index.css"

const Card = () => {

    return (
        <div className="tech-container d-flex justify-center">
            <div className="maincontainer">
                <div className="back">
                    <h6>React.js</h6>
                    <p>3 years of experience</p>
                </div>
                <div className="front">
                    <div className="image">
                        <FaReact size={70} />
                    </div>
                </div>
            </div>
            <div className="maincontainer">
                <div className="back">
                    <h6>Vue</h6>
                    <p>1 year of experience</p>
                </div>
                <div className="front">
                    <div className="image">
                        <BiLogoVuejs size={70}/>
                    </div>
                </div>
            </div>
            <div className="maincontainer">
                <div className="back">
                    <h6>HTML</h6>
                    <p>4 years of experience</p>
                </div>
                <div className="front">
                    <div className="image">
                        <BiLogoHtml5 size={70}/>
                    </div>
                </div>
            </div>
            <div className="maincontainer">
                <div className="back">
                    <h6>CSS</h6>
                    <p>4 years of experience</p>
                </div>
                <div className="front">
                    <div className="image">
                        <BiLogoCss3 size={70}/>
                    </div>
                </div>
            </div>
            <div className="maincontainer">
                <div className="back">
                    <h8>kubernetes</h8>
                    <p>1 year of experience</p>
                </div>
                <div className="front">
                    <div className="image">
                        <BiLogoKubernetes size={70}/>
                    </div>
                </div>
            </div>
            <div className="maincontainer">
                <div className="back">
                    <h6>Docker</h6>
                    <p>2 years of experience</p>
                </div>
                <div className="front">
                    <div className="image">
                        <BiLogoDocker size={70}/>
                    </div>
                </div>
            </div>
            <div className="maincontainer">
                <div className="back">
                    <h6>Spring</h6>
                    <p>1 year of experience</p>
                </div>
                <div className="front">
                    <div className="image">
                        <BiLogoSpringBoot size={70}/>
                    </div>
                </div>
            </div>
            <div className="maincontainer">
                <div className="back">
                    <h6>Go</h6>
                    <p>2 years of experience</p>
                </div>
                <div className="front">
                    <div className="image">
                        <BiLogoGoLang size={70}/>
                    </div>
                </div>
            </div>
            <div className="maincontainer">
                <div className="back">
                    <h8>Typescript</h8>
                    <p>3 years of experience</p>
                </div>
                <div className="front">
                    <div className="image">
                        <BiLogoTypescript size={70}/>
                    </div>
                </div>
            </div>
            <div className="maincontainer">
                <div className="back">
                    <h6>Haskell</h6>
                    <p>1 year of experience</p>
                </div>
                <div className="front">
                    <div className="image">
                        <DiHaskell size={70}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;
