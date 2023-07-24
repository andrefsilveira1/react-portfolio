import { BrowserRouter } from "react-router-dom";
import LandPage from "./pages/home";
import Skills from "./components/sections";
import Nav from "./components/nav";
import "./App.css";


function App() {
  return (
    <BrowserRouter>
      <div className="flex justify-center">
      <Nav/>
      <div className="App bg-gray-900 text-white">
          <LandPage />
          <Skills/>
      </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
