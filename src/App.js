import { BrowserRouter } from "react-router-dom";
import LandPage from "./pages/home";
import { HashLink as Link } from "react-router-hash-link";
import Skills from "./components/skills";
import Nav from "./components/nav"


function App() {
  return (
    <BrowserRouter>
      <div className="flex justify-center">
      <Nav/>
      <div className="App">
          <LandPage />
          <Skills/>
      </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
