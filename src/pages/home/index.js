import React from 'react';
import HomeHeader from "../../components/header";
import "./index.css";

export default function LandPage() {
  return (
    <>
      <div id="home" className="bg-gray-900 text-white min-h-screen font-roboto grid justify-items-center">
        <div className="bg-black min-h-screen text-white w-3/4">
          <HomeHeader className="menu" />
        </div>
        <div className="container mx-auto p-8">
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-4">About Me</h2>
            <p className="text-lg">
              Hello there! Somehow you've got here, and now, what do you think about know me more ?
            </p>
          </section>
        </div>
        <div>
          <p> Create new footer here!</p>
        </div>
      </div>
    </>
  );
};


