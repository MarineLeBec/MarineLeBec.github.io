import "../App/reset.css";
import "./Tools.scss";
import { useState } from "react";
import html_logo from "./../../assets/icons8-html-5-144.png";
import css_logo from "./../../assets/icons8-css3-144.png";
import js_logo from "./../../assets/icons8-javascript-144.png"

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
        <img src={html_logo} alt="Logo HTML" />
        <img src={css_logo} alt="Logo CSS" />
        <img src={js_logo} alt="Logo JavaScript" />
      </div>
    </section>
  );
}

export default Tools;
