import React from 'react';
import HomeHeader from "../../components/header";

export default function LandPage() {
  return (
    <>
      <div id="home" className="text-white font-roboto grid justify-items-center">
        <div className="min-h-screen text-white w-3/4">
          <HomeHeader className="menu" />
        <div className='mt-5'>
          <h1>Hello there!</h1>
          <p>Welcome to my portfolio, here I will show you something about projects developed by me</p>
        </div>
        </div>
      </div>
    </>
  );
};


