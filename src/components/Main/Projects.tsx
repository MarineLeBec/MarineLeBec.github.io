//* Styles
import "../App/reset.css";
import "./Projects.scss";
//* Hooks
// import { useState } from "react";

const Projects: React.FC = () => {
  return (
    <section className="projects">
      <h3>Projects</h3>
      <button>
        <img
          width="50"
          height="50"
          src="https://img.icons8.com/sf-black-filled/64/FFFFFF/plus.png"
          alt="plus"
        />
      </button>
    </section>
  );
};

export default Projects;
