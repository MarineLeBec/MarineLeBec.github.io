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
      className={`contact ${isUnhovered ? "unhovered" : ""
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
            onClick={() => copyTextToClipboard("0000000000")}
          >
            phone number
            <img
              width="24"
              height="24"
              src="https://img.icons8.com/fluency-systems-regular/48/FFFFFF/copy--v1.png"
              alt="Copy to clipboard"
            />
          </li>
          <br />
          <br />
          <li>
            <a href="http://behance.net/marinelebec1" target="_blank">
              <img
                width="24"
                height="24"
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAABlElEQVR4nL3VvU8VURAF8BeosBMbE+35CDYmhsJopR2aGAtrY62hsrKwgKf2Sl5s/B+gMmioqMRGrYFSay0AgZ8ZMiT3rcsL+9hwkil27t1z5szdO9vpnDcwjddYweopI/a+wtQg4hG8wT528KWBwAZ2891ucNUJBHlgCReHcD6OXnJ069oS6ktNiatIkf2+dmX/doapvApcynYtlsk4pI1OS8BXLJeJtYgWBdb6+M5dAFdxp4hZXGhT4Jv/8Qu3c/1apYCbGG0isIWPBcEcvmM7nOBvTQF3mwp8qNh+mkTxGc7gPp7jUToYOYuDe/iBzVx/gj8peIi3w7SoDs9wI2/qJzzEu1ybb+MMNnOYBdaLYRdTYL2tM+jVCES8GCTQNyoGnMFW0aLPeICXJflJo6KbA2p8wD34iVu5/hi/M38Qw7Lgiq9sDwulwFRW1cvnKzU3eaxS5Riu43Il/z7vyWSZP3Zx3OMjJ02QlQe5vuorv8xuOtnNPq6eMmJvtCUqX6j9ZRZCkym03EAg9i5ioqnzM+MfD7kZfg6CXMYAAAAASUVORK5CYII="
              ></img>
              behance
            </a>
          </li>
          <li>
            <a href="http://codewars.com/users/MarineLeBec" target="_blank">
              <img
                width="24"
                height="24"
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAC9UlEQVR4nO2XXWjPYRTH/zPDhLDMzVLe32qKCxO5QDQhLlxh1n9SQpRSLFrUWApjIhfLLhe1zIWLkWKLWNTy1ryF4sJYXmJL89Fp59HZ0+///DZ/c7Xv1f93nvP2nOe8/ROJAfwFgEHAZKAAmA1k/S/Dw4ADwCt64jNQCYzpT+NTgBbCeA3M7A/jI4EnxlAXUAtsAgqBEuC6nr0EdgNrgHHpGh4PJIEGY/wDsMjLBzH4PiIiP4DzQE5fDQ8BjgEdEUoLPb564vEcmNFb41nejZvN79se71nPkDxTFXAEqPMu8BjI7o0Dh41QKbDNfFcYvnzNBcFXYGOErjzghpEvizM+FviizHf1fZNRCrTsBL+AlQGdw4F7yvsGyAg5UGSMbVfaAkOrNbyNSrtkaNnAPGCFJKoLObDU6MgNOVBhGJcpLRN4q7RvTgFwX2lFekuRbfdyQnKgGphgzqaFHDhphNcautS5Q70m6hX9Xg88JIxPQJvmzIiQA3uN0CnvrMac3THfP02plapDST3v9By5ldK4AJhjmCXcU81ZBrDPJKmFVEGx33Ck9oFWw9eUiAPQZARa/QailbJZjUY5st9mulxCL+OQH+dAo6e0U8OZ1IQ7qOG24a/RZ3G44Ok8bc72hIyP0rpu08QJoUXfW3BZE9O25RKjd52hHw85MF2Z2rV0qiPmwUegXEtP3l3QrPK5JtxSuplKX27ky+Omn8MS01wWqpK5wFDDf015bxqajGmHAqXtNLQNIQcytF2i7TPl8ABWG6UnDL3M0Iu1nUtbd5vT6JQORCiQQZKX8KBV4ELdZTNbx7jDVl3hHA4l4kB3yGV0OnToaD0KnAGe0hNVnry7rT/KrwKDYx0wyfiMeNTZjVimYgTPd90P+rY5091wzqkCH++AHV7DWawV4tCgT5X2XpgDrAJ2mXVcFtAtupDKYnrRLCeCR8Ghk4Yzs0yVpMIDYNI/N+49TaWWlMULnQN/+kS/gu7WK3/L5gMTg6vWABKp8Rv5oQSAiqIaUAAAAABJRU5ErkJggg=="
              ></img>
              codewars
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}
export default Contact;
