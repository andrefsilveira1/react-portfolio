import React from 'react';
import HomeHeader from "../../components/header";
import Typewriter from './typewriter';
import BoxCarousel from '../../components/carousel';
import Skills from '../../components/sections';
import Repositories from '../../components/repos';

export default function LandPage() {
  return (
    <>
      <div id="home" className="font-roboto grid justify-items-center mb-5">
        <div className="min-h-screen w-2/4 mb-5 shadow p-3">
          <HomeHeader className="menu" />
          <div className='mt-5'>
            <h1>Hello there!</h1>
            <Typewriter delay={50} text="Welcome to my portfolio, here I will show you something about projects developed by Me!" />
          </div>
          <div className='d-flex flex-column justify-center mt-5 mb-5'>
          <h4 className='mt-5'>My life in a nutshell</h4>
            <p>
              I was 10 years old when typed my first 'Hello World'. Since there, never stoped coding. At the moment, I'm a Computer Science student at Federal University of Rio Grande do Norte and
              software developer at BitLab. Besides my interest in web development, I use to say that a developer should be able to fit in every area. For that reason, my passion for coding includes
              the most diverses groups, since web, embedded systems, infraestructure, algorithms, cybersecurity and so on.
            </p>
          </div>
            <h4>My life outside computers</h4>
            <p>
              Even been the 'Computer guy', I never like stay inside home every single day
            </p>
          <div className='d-flex justify-center'>
            <BoxCarousel/>
          </div>
          <Skills/>
          <Repositories/>
        </div>
      </div>
    </>
  );
};


