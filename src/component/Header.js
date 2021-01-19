import "react-bulma-components/dist/react-bulma-components.min.css";
import { Hero, Navbar } from "react-bulma-components";
import Nav from "./Nav"

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
      <Nav />
    </>
  );
};

export default Header;
