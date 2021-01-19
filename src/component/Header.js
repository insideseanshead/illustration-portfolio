import "react-bulma-components/dist/react-bulma-components.min.css";
import { Hero, Navbar } from "react-bulma-components";

const Header = () => {
  return (
    <>
      <section className="hero is-success is-fullheight-with-navbar">
        <div className="hero-body hero-img">
          <div className="container">
            <h1 className="title">Sean Morgan</h1>
            <h2 className="subtitle">Illustration</h2>
          </div>
        </div>
      </section>
      <nav class="navbar" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
    <a class="navbar-item" href="https://bulma.io">
      <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28" />
    </a>

    <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

  <div id="navbarBasicExample" className="navbar-menu">
    <div className="navbar-start">
      <a className="navbar-item">
        Illustrations
      </a>

      <a className="navbar-item">
        Contact
      </a>

      <a className="navbar-item">
        Twitter
      </a>

      <a className="navbar-item">
        Instagram
      </a>
    </div>

    
  </div>
</nav>
    </>
  );
};

export default Header;
