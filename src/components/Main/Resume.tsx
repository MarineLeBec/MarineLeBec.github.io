//* Styles
import "../App/reset.css";
import "./Resume.scss";
//* Hooks
//* Components

const Resume: React.FC = () => {
  return (
    <section className="resume">
      <h3>CV</h3>
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

export default Resume;
