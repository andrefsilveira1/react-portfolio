import { BrowserRouter } from "react-router-dom";
import LandPage from "./pages/home";
import { HashLink as Link } from "react-router-hash-link";
import Skills from "./components/skills";


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Link to="#home">
          Home
        </Link>
        <Link to="#skills">
          Skills
        </Link>
          <LandPage />
          <Skills/>
      </div>
    </BrowserRouter>
  );
}

export default App;
