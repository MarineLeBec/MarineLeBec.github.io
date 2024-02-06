//* Styles
import "../App/reset.css";
import "./Social.scss";
//* Hooks

function Social() {
  return (
    <section className="social">
      <a href="https://github.com/MarineLeBec" target="_blank">
        <img
          width="70"
          height="70"
          src="https://img.icons8.com/external-tal-revivo-regular-tal-revivo/96/FFFFFF/external-github-with-cat-logo-an-online-community-for-software-development-logo-regular-tal-revivo.png"
          alt="Github Logo"
        />
        /marinelebec
      </a>
      <a href="https://www.linkedin.com/in/marinelebec/" target="_blank">
        <img
          width="70"
          height="70"
          src="https://img.icons8.com/ios-filled/100/FFFFFF/linkedin.png"
          alt="Linkedin Logo"
        />
        /marinelebec
      </a>
    </section>
  );
}

export default Social;
