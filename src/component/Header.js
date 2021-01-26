import "react-bulma-components/dist/react-bulma-components.min.css";
import Nav from "./Nav"

const Header = () => {
  return (
    <>
      <section id="hero" className="hero is-success is-fullheight-with-navbar">
        <div className="hero-body hero-img">
          <div className="container">
            <h1 className="title is-1">Sean Morgan</h1>
            <h2 className="subtitle is-3">Illustration</h2>
          </div>
        </div>
      </section>
      <Nav />
    </>
  );
};

export default Header;
