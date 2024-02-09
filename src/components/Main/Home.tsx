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

const Home: React.FC = () => {
  return (
    <>
      <Projects />
      <Blog />
      <Resume />
      <About />
    </>
  );
};

export default Home;
