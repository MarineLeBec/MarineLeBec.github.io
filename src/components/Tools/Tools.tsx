//* Styles
import "../App/reset.css";
import "./Tools.scss";
//* Hooks
import { useState } from "react";
//* Logos
import html_logo from "./../../assets/icons8-html-5-144.png";
import css_logo from "./../../assets/icons8-css3-144.png";
import js_logo from "./../../assets/icons8-javascript-144.png";
import ts_logo from "./../../assets/icons8-typescript-144.png";
import tailwind_logo from "./../../assets/icons8-tailwind-css-144.png";
import wp_logo from "./../../assets/icons8-wordpress-144.png";
import react_logo from "./../../assets/icons8-react-200.png";
import php_logo from "./../../assets/icons8-php-logo-144.png";
import git_logo from "./../../assets/icons8-git-144.png";

const logos = [
  { id: 1, src: html_logo, alt: "Logo HTML" },
  { id: 2, src: css_logo, alt: "Logo CSS" },
  { id: 3, src: js_logo, alt: "Logo JavaScript" },
  { id: 4, src: ts_logo, alt: "Logo TypeScript" },
  { id: 5, src: tailwind_logo, alt: "Logo Tailwind" },
  { id: 6, src: wp_logo, alt: "Logo Wordpress" },
  { id: 7, src: react_logo, alt: "Logo React" },
  { id: 8, src: php_logo, alt: "Logo PHP" },
  { id: 9, src: git_logo, alt: "Logo Git" },
];
//* -------------------------------------------------------- */

function Tools() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section
      className={`tools ${isHovered ? "hovered" : ""}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <h3>Tools</h3>
      <div className={`tools-logos ${isHovered ? "visible" : ""}`}>
        {logos.map((logo) => (
          <img key={logo.id} src={logo.src} alt={logo.alt} />
        ))}
      </div>
    </section>
  );
}

export default Tools;