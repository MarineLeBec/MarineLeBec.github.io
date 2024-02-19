//* Styles
import "../App/reset.css";
import "./Projects.scss";
//* Hooks
import { Link, useLocation } from "react-router-dom";
import AECOverview from "./../../assets/projects/AEC_mockup.png";
import PortfolioOverview from "./../../assets/projects/portfolio_mockup.png";

const Projects: React.FC = () => {
  const location = useLocation();
  const isLink = location.pathname === "/";

  if (isLink) {
    return (
      <section className="projects">
        <Link to="/projects">
          <h3>Projects</h3>
        </Link>
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
          <h5>Mon Portfolio</h5>
          <p>
            Réalisé en février 2024, mon portfolio me permet d'expérimenter sur
            le plan créatif et technique. C'est à la fois ma carte de visite et
            mon laboratoire d'essai.
          </p>
          <div className="img-container">
            <img src={PortfolioOverview} alt="Aperçu du projet Portfolio" />
          </div>
          <p className="project-tools">
            <h5>Outils utilisés :</h5>
            <ul>
              <li>React</li>
              <li>TypeScript</li>
              <li>SCSS</li>
            </ul>
          </p>
        </div>
        <div className="project">
          <h5>Association Entraide Chômeurs</h5>
          <p>
            Projet de site vitrine et de conception d'un back-office, pour une
            association d'aide au retour à l'emploi. Réalisé en 3 semaines en
            fin de formation par une équipe de 5 développeurs, ce projet est en
            cours et est voué à être amélioré progressivement. En voici{" "}
            <a href="https://www.canva.com/design/DAF8lNloy3A/R0XIXYAibrBwTIBBJ_cmUg/view?utm_content=DAF8lNloy3A&utm_campaign=designshare&utm_medium=link&utm_source=editor">
              un aperçu
            </a>
            .
          </p>
          <div className="img-container">
            <img src={AECOverview} alt="Aperçu du projet AEC" />
          </div>
          <p className="project-tools">
            <h5>Outils utilisés :</h5>
            <ul>
              <li>React + Redux</li>
              <li>Symfony</li>
              <li>TypeScript</li>
              <li>PHP</li>
              <li>Tailwind CSS</li>
            </ul>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Projects;
