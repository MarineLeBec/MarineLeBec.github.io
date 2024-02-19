//* Styles
import "../App/reset.css";
import "./Blog.scss";
//* Hooks
//* Components

const Blog: React.FC = () => {
  return (
    <section className="blog">
      <h3>Blog</h3>
      <button>
        <img
          width="50"
          height="50"
          src="https://img.icons8.com/sf-black-filled/64/FFFFFF/plus.png"
          alt="plus"
        />
      </button>
      <span>Coming soon...</span>
    </section>
  );
};

export default Blog;
