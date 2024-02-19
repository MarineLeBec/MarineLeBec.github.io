//* Styles
import "../App/reset.css";
import "./Contact.scss";
//* Hooks
import { useState, useRef, useEffect } from "react";

function Contact() {
  const [isHovered, setIsHovered] = useState(false);
  const [isUnhovered, setIsUnhovered] = useState(false);

  const mailRef = useRef<HTMLLIElement>(null);
  const phoneRef = useRef<HTMLLIElement>(null);
  const [copyEmailSuccess, setCopyEmailSuccess] = useState(false);
  const [copyPhoneSuccess, setCopyPhoneSuccess] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (copyEmailSuccess) setCopyEmailSuccess(false);
      if (copyPhoneSuccess) setCopyPhoneSuccess(false);
    }, 1000);

    return () => clearTimeout(timeout);
  }, [copyEmailSuccess, copyPhoneSuccess]);

  const copyEmailToClipboard = (text: string) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        console.info(`${text} has been copied to clipboard !`);
        setCopyEmailSuccess(true);

        // Reset the success message after a short delay
        setTimeout(() => {
          setCopyEmailSuccess(false);
        }, 2000);
      })
      .catch((error) => {
        console.error(`Unable to copy ${text} to clipboard`, error);
      });
  };

  const copyPhoneToClipboard = (text: string) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        console.info(`${text} has been copied to clipboard !`);
        setCopyPhoneSuccess(true);

        // Reset the success message after a short delay
        setTimeout(() => {
          setCopyPhoneSuccess(false);
        }, 2000);
      })
      .catch((error) => {
        console.error(`Unable to copy ${text} to clipboard`, error);
      });
  };

  return (
    <section
      className={`contact ${isUnhovered ? "unhovered" : ""}`}
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
            onClick={() => copyEmailToClipboard("marinelebec@protonmail.com")}
          >
            e-mail
            {copyEmailSuccess ? (
              <img
                width="25"
                height="25"
                src="https://img.icons8.com/ios/50/FFFFFF/task-completed.png"
                alt="Copied to clipboard"
              />
            ) : (
              <img
                width="25"
                height="25"
                src="https://img.icons8.com/ios/50/FFFFFF/clipboard.png"
                alt="Copy to clipboard"
              />
            )}
          </li>
          <li ref={phoneRef} onClick={() => copyPhoneToClipboard("0629616392")}>
            phone
            {copyPhoneSuccess ? (
              <img
                width="25"
                height="25"
                src="https://img.icons8.com/ios/50/FFFFFF/task-completed.png"
                alt="Copied to clipboard"
              />
            ) : (
              <img
                width="25"
                height="25"
                src="https://img.icons8.com/ios/50/FFFFFF/clipboard.png"
                alt="Copy to clipboard"
              />
            )}
          </li>
        </ul>
        <div className="media">
          <a href="http://behance.net/marinelebec1" target="_blank">
            <img
              className="other-media"
              width="70"
              height="70"
              src="data:image/png;base64,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"
              alt="Lien vers Behance"
            />
          </a>
          <a href="http://codewars.com/users/MarineLeBec" target="_blank">
            <img
              className="other-media"
              width="70"
              height="70"
              src="data:image/png;base64,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"
              alt="Lien vers Codewars"
            />
          </a>
        </div>
      </div>
    </section>
  );
}
export default Contact;
