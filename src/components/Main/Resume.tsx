//* Styles
import "../App/reset.css";
import "./Resume.scss";
//* Hooks
import { Link, useLocation } from "react-router-dom";
import CV from "../../assets/marinelebecCV.pdf";

const Resume: React.FC = () => {
  const location = useLocation();
  const isLink = location.pathname === "/";

  // Add the desired parameters to the PDF file URL
  const CVUrl = `${CV}#toolbar=0&navpanes=0`;

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
      <iframe src={CVUrl} width="90%" height="90%">
        <p>
          Unable to display PDF file.
          <a href="">Download</a>
          instead.
        </p>
      </iframe>
    </section>
  );
};

export default Resume;
