import React from 'react';
import HomeHeader from "../../components/header";
import "./index.css";

export default function LandPage() {
  return (
    <>
      <div id="home" className="text-white font-roboto grid justify-items-center">
        <div className="min-h-screen text-white w-3/4">
          <HomeHeader className="menu" />
        </div>
      </div>
    </>
  );
};


