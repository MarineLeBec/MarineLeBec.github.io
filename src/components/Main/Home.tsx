//* Styles
import "../App/reset.css";
import "./Home.scss";
//* Hooks
// import { useState } from "react";
//* Components
import Projects from "./Projects";
import Blog from "./Blog";
import About from "./About";
import Resume from "./Resume";
import { Route, Routes, useLocation } from "react-router-dom";

const Home: React.FC = () => {
  // Utilisation du hook useLocation pour obtenir l'objet location
  const location = useLocation();

  // Classe conditionnelle en fonction de la route
  const mainClass = location.pathname === "/" ? "grid-layout" : "";
  return (
    <main className={mainClass}>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Projects />
              <Blog />
              <Resume />
              <About />
            </>
          }
        />
        <Route path="/projects" element={<Projects />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </main>
  );
};

export default Home;
