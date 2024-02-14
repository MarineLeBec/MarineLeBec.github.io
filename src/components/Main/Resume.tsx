//* Styles
import "../App/reset.css";
import "./Resume.scss";
//* Hooks
import { Link, useLocation } from "react-router-dom";
import CV from "../../assets/marinelebecCV.pdf"

const Resume: React.FC = () => {
  const location = useLocation();
  const isLink = location.pathname === "/";

  if (isLink) {
    return (
      <section className="resume">
        <Link to="/resume">
          <h3>CV</h3>
        </Link>
        <button>
          <Link to="/resume">
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
    <section className="resume">
      <h4>CV</h4>
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
      <object data={CV} width="90%" height="90%">
        <p>
          Unable to display PDF file.
          <a href="">
            Download
          </a>
          instead.
        </p>
      </object>
    </section>
  );
};

export default Resume;
