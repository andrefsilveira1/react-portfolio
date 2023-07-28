import { React, useState, useEffect } from "react";
import "./index.css";

function ReadingIndicator() {
  const [indicator, setIndicator] = useState(0);
  const scroller = () => {
    var element = document.documentElement,
      top = element.scrollTop || document.body.scrollTop,
      height = element.scrollHeight || document.body.scrollHeight;
    var calculate = (top / (height - element.clientHeight)) * 100;
    setIndicator(calculate);
  };
  useEffect(() => {
    window.addEventListener("scroll", scroller);
    return () => window.removeEventListener("scroll", scroller);
  }, [indicator]);
  return (
    <div className="bar" style={{ width: indicator + "%" }}/>
  );
}
export default ReadingIndicator;