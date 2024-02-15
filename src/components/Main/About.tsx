//* Styles
import "../App/reset.css";
import "./About.scss";
//* Hooks, Components
import { Link, useLocation } from "react-router-dom";
import portrait from "../../assets/portrait.png"

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
        <p>
          <span>Je m'appelle Marine et je suis développeuse full-stack </span>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          at mattis dolor. Praesent vitae lectus sapien. Pellentesque
          scelerisque gravida nunc in tempor. Class aptent taciti sociosqu ad
          litora torquent per conubia nostra, per inceptos himenaeos. Cras id
          luctus nisi. Mauris maximus dui purus, in lobortis arcu lacinia in.
          Quisque sit amet mi vitae erat interdum tempor. Quisque aliquet quis
          ante lacinia accumsan. Mauris et dolor vulputate, fermentum ex vitae,
          vestibulum arcu. Ut maximus mollis metus a ornare. In non diam
          finibus, consectetur ante a, efficitur metus. Maecenas sapien turpis,
          interdum non dui id, sodales faucibus ipsum. Morbi in dui vitae dui
          cursus sollicitudin vitae nec sem. Praesent vitae lectus sapien.
          Pellentesque scelerisque gravida nunc in tempor. Class aptent taciti
          sociosqu ad litora torquent per conubia nostra, per inceptos
          himenaeos. Cras id luctus nisi. Mauris maximus dui purus, in lobortis
          arcu lacinia in. Quisque sit amet mi vitae erat interdum tempor.
          Quisque aliquet quis ante lacinia accumsan. Mauris et dolor vulputate,
          fermentum ex vitae, vestibulum arcu. Ut maximus mollis metus a ornare.
          In non diam finibus, consectetur ante a, efficitur metus. Maecenas
          sapien turpis, interdum non dui id, sodales faucibus ipsum. Morbi in
          dui vitae dui cursus sollicitudin vitae nec sem. Pellentesque non
          ipsum ipsum. Donec lobortis egestas tellus sed tempor. Fusce eu odio
          non neque cursus porttitor in sit amet ante. Phasellus laoreet turpis
          vitae dolor rutrum interdum.
        </p>
      </div>
    </section>
  );
};

export default About;
