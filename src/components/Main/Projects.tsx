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
        <h3>Projects</h3>
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
      <h3>Projects</h3>
      <button>
        <Link to="/">
          <img
            width="64"
            height="64"
            src="https://img.icons8.com/sf-black-filled/64/FFFFFF/cancel.png"
            alt="cancel"
          />
        </Link>
      </button>
      <div className="projects-list">
        <ul>
          <li>Movie scene generator</li>
          <li>My Portfolio</li>
          <li>Apothéose</li>
        </ul>
      </div>
    </section>
  );
};

export default Projects;
