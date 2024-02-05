//* Styles
import "../App/reset.css";
import "./Contact.scss";
//* Hooks
import { useState, useRef } from "react";

function Contact() {
  const [isHovered, setIsHovered] = useState(false);
  const [isUnhovered, setIsUnhovered] = useState(false);

  const mailRef = useRef<HTMLLIElement>(null);
  const phoneRef = useRef<HTMLLIElement>(null);

  // Check if the element is present
  const copyTextToClipboard = (text: string) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        console.info(`${text} has been copied to clipboard !`);
      })
      .catch((error) => {
        console.error(`"Unable to copy ${text} to clipboard", ${error}`);
      });
  };

  return (
    <section
      className={`contact ${
        isHovered ? "hovered" : isUnhovered ? "unhovered" : ""
      }`}
      onMouseEnter={() => {
        setIsHovered(true);
        setIsUnhovered(false);
      }}
      onMouseLeave={() => {
        setIsHovered(false);
        setIsUnhovered(true);
        setTimeout(() => {
          setIsUnhovered(false);
        }, 1000);
      }}
    >
      <h3>Contact</h3>
      <div
        className={`contact-list ${
          isHovered ? "visible" : isUnhovered ? "shading" : ""
        }`}
      >
        <ul>
          <li
            ref={mailRef}
            onClick={() => copyTextToClipboard("marinelebec@protonmail.com")}
          >
            e-mail
            <img
              width="24"
              height="24"
              src="https://img.icons8.com/fluency-systems-regular/48/FFFFFF/copy--v1.png"
              alt="Copy to clipboard"
            />
          </li>
          <li
            ref={phoneRef}
            onClick={() => copyTextToClipboard("0836656565")}
          >
            Phone number
            <img
              width="24"
              height="24"
              src="https://img.icons8.com/fluency-systems-regular/48/FFFFFF/copy--v1.png"
              alt="Copy to clipboard"
            />
          </li>
          <li>behance</li>
          <li>wttj</li>
        </ul>
      </div>
    </section>
  );
}
export default Contact;
