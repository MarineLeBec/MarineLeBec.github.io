//* Styles
import "../App/reset.css";
import "./Projects.scss";
//* Hooks
// import { useState } from "react";

const ProjectsSpread: React.FC = () => {
  return (
    <section className="projects-spread">
      <h3>Projects</h3>
      <button>
        <img
          width="64"
          height="64"
          src="https://img.icons8.com/sf-black-filled/64/FFFFFF/cancel.png"
          alt="cancel"
        />
      </button>
    </section>
  );
};

export default ProjectsSpread;
