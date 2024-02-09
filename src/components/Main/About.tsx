//* Styles
import "../App/reset.css";
import "./About.scss";
//* Hooks
//* Components

const About: React.FC = () => {
  return (
    <section className="about">
      <h3>About</h3>
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

export default About;
