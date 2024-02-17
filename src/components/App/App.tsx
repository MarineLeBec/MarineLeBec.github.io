//* Styles
import "./reset.css";
import "./App.scss";

//* Hooks
import { useState } from "react";

//* Composants
import Tools from "../Tools/Tools";
import Contact from "../Footer/Contact";
import Social from "../Footer/Social";
import Home from "../Main/Home";
import { Link } from "react-router-dom";
//* -------------------------------------------------------- */

function App() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      <header>
        <section
          className={`title ${isHovered ? "hovered" : ""}`}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <Link to="/">
            <h1>Marine Le Bec</h1>
            <h2>Développeuse web</h2>
            <h2>full-stack</h2>
          </Link>
        </section>
        <Tools />
      </header>
      <Home />
      <footer>
        <Contact />
        <Social />
      </footer>
    </>
  );
}

export default App;
