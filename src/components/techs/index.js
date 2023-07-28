import React, { useState } from "react";
import { FaReact } from "react-icons/fa";
import "./index.css"

const Card = () => {

    return (
        <div>
            <div className="maincontainer">
                <div className="back">
                    <h2>Copywriting</h2>
                    <p>Introduction to Copywriting’ workshop focuses on the theory and processes of professional copywriting as applied to persuasion, reasoning, and rhetoric. This workshop is best-suited to learning how to write and think about consumer-driven functions.</p>
                </div>
                <div className="front">
                    <div className="image">
                        <h2>Copywriting</h2>
                    </div>
                </div>
            </div>
            <div className="maincontainer">
                <div className="back">
                    <h2>Content Marketing</h2>
                    <p>Introduction to Content Marketing workshop focuses on building content frameworks that are designed for and directed at communication engagement. This interdisciplinary workshop is best-suited to learning visual and written communication strategies.</p>
                </div>
                <div className="front">
                    <div className="image">
                        <h2>Content Marketing</h2>
                    </div>
                </div>
            </div>
            <div className="maincontainer">
                <div className="back">
                    <h2>Web Writing</h2>
                    <p>Introduction to Web-Writing workshop focuses on building creative and systemic digital content through online user experiences that benefit people and robots. This workshop is best-suited to creating content for digital platforms and devices — websites, mobile, game consoles, and virtual reality engines.</p>
                </div>
                <div className="front">
                    <div className="image">
                        <h2>Web Writing</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;
