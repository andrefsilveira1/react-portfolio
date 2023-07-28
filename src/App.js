import React, { useState, useEffect } from 'react';
import { BrowserRouter } from "react-router-dom";
import LandPage from "./pages/home";
import Skills from "./components/sections";
import Nav from "./components/nav";
import './App.css';
import ReadingIndicator from './components/indicator';


function App() {
  const [value, setValue] = useState(false);
  const [transitionClass, setTransitionClass] = useState('');

  function handleChangeValue(newValue) {
    setValue(newValue);
  }

  useEffect(() => {
    const transitionDelay = 300;
    const timeout = setTimeout(() => {
      setTransitionClass(value ? 'bg-white' : 'bg-black');
    }, transitionDelay);

    return () => clearTimeout(timeout);
  }, [value]);

  return (
    <BrowserRouter>
    <ReadingIndicator/>
      <div className={`flex justify-center transition-colors ${transitionClass}`}>
      <Nav value={value} onChange={handleChangeValue}/>
      <div className="App bg-gray-900 text-white">
          <LandPage />
          <Skills/>
      </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
