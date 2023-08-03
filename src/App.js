import React, { useState, useEffect } from 'react';
import { BrowserRouter } from "react-router-dom";
import LandPage from "./pages/home";
import Nav from "./components/nav";
import './App.css';
import ReadingIndicator from './components/indicator';


function App() {
  function setTheme(newTheme) {
    localStorage.setItem('theme', newTheme);
    console.log("New theme here:", newTheme);
  }
  const [value, setValue] = useState(false);
  const [transitionClass, setTransitionClass] = useState('');
  const [transitionText, setTransitionText] = useState('');

  function handleChangeValue(newValue) {
    const theme = localStorage.getItem('theme');
    console.log("THEME:", theme)
    setValue(newValue);
    setTheme(newValue);
    if(theme && !newValue) {
      setValue(theme);
      setTheme(theme);
    }


  }

  useEffect(() => {
    const transitionDelay = 300;
    const theme = localStorage.getItem('theme');
    const timeout = setTimeout(() => {
      setTransitionClass(value ? 'bg-white' : 'bg-black');
      setTransitionText(value ? 'text-black' : 'text-white');
      if(theme) {
      setTransitionClass(theme ? 'bg-white' : 'bg-black');
      setTransitionText(theme ? 'text-black' : 'text-white');
      
      }
    }, transitionDelay);

    return () => clearTimeout(timeout);
  }, [value]);

  return (
    <BrowserRouter>
    <ReadingIndicator/>
      <div className={`flex justify-center transition-colors ${transitionClass}`}>
      ()
      <Nav value={value} onChange={handleChangeValue}/>
      <div className={`transition-colors ${transitionClass} ${transitionText}`}>
          <LandPage />
      </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
