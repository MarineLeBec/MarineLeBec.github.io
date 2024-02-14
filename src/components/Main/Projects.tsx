//* Styles
import "../App/reset.css";
import "./Projects.scss";
//* Hooks
import { Link, useLocation } from "react-router-dom";

const Projects: React.FC = () => {
  const location = useLocation();
  const isLink = location.pathname === "/";

  if (isLink) {
    return (
      <section className="projects">
        <Link to="/projects"><h3>Projects</h3></Link>
        <button>
          <Link to="/projects">
            <img
              width="50"
              height="50"
              src="https://img.icons8.com/sf-black-filled/64/FFFFFF/plus.png"
              alt="plus"
            />
          </Link>
        </button>
      </section>
    );
  }

  return (
    <section className="projects">
      <h4>My projects</h4>
      <button>
        <Link to="/">
          <img
            width="50"
            height="50"
            src="https://img.icons8.com/sf-black-filled/64/FFFFFF/cancel.png"
            alt="cancel"
          />
        </Link>
      </button>
      <div className="projects-list">
        <div className="project">
          <h5>Projet</h5>
          <p>Description du projet</p>
          <img
            src="https://images.unsplash.com/photo-1522542550221-31fd19575a2d?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="example"
          />
        </div>
        <div className="project">
          <h5>Projet</h5>
          <p>Description du projet</p>
          <img
            src="https://images.unsplash.com/photo-1522542550221-31fd19575a2d?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="example"
          />
        </div>
        <div className="project">
          <h5>Projet</h5>
          <p>Description du projet</p>
          <img
            src="https://images.unsplash.com/photo-1522542550221-31fd19575a2d?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="example"
          />
        </div>
      </div>
    </section>
  );
};

export default Projects;
