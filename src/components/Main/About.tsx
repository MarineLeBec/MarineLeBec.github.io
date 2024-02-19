//* Styles
import "../App/reset.css";
import "./About.scss";
//* Hooks, Components
import { Link, useLocation } from "react-router-dom";
import portrait from "../../assets/portrait.png";

const About: React.FC = () => {
  const location = useLocation();
  const isLink = location.pathname === "/";

  if (isLink) {
    return (
      <section className="about">
        <Link to="/about">
          <h3>About</h3>
        </Link>
        <button>
          <Link to="/about">
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
    <section className="about">
      <h4>About me</h4>
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

      <div className="portrait">
        <img src={portrait} alt="Mon portrait" />
        <h5>Qui suis-je ?</h5>
        <img
          className="icon"
          width="35"
          height="35"
          src="https://img.icons8.com/pastel-glyph/64/884ab2/laptop-coding--v2.png"
          alt="laptop-coding--v2"
        />
        <span>Je m'appelle Marine et je suis développeuse full-stack</span>
        <img
          className="icon"
          width="30"
          height="30"
          src="https://img.icons8.com/ios/50/884ab2/heart-puzzle.png"
          alt="heart-puzzle"
        />
        <p>
          Je suis passionnée de musique, de cinéma et de séries. J'aime
          assembler des grands puzzles, jouer à des jeux vidéos cosy et marcher
          en forêt;
        </p>
        <img
          className="icon"
          width="30"
          height="30"
          src="https://img.icons8.com/pastel-glyph/64/884ab2/brain--v2.png"
          alt="brain--v2"
        />
        <p>
          J'ai une personnalité plutôt terre-à-terre, curieuse et empathique;
        </p>
        <img
          className="icon"
          width="30"
          height="30"
          src="https://img.icons8.com/ios/50/884ab2/development-skill.png"
          alt="development-skill"
        />
        <p>
          Je travaille chaque jour à améliorer ma pratique de code. Je suis
          passionnée de CSS, d'UX et de TypeScript, et je m'intéresse aux
          langages côté serveur pour optimiser mes projets.
        </p>
      </div>
    </section>
  );
};

export default About;
