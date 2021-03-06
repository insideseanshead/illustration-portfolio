import React from "react";
import logo from '../images/logo.png'

const Nav = () => {
  // hamburger state
  const [ isActive, setisActive ] = React.useState(false)

  return (
    <div id="sticky">
      <nav
        className="navbar is-dark"
        role="navigation"
        aria-label="main navigation"
      >
        <div className="navbar-brand">
          <a class="navbar-item" id="logo" href="https://sean-morgan-illustration.herokuapp.com/">
            <img
              src={logo}
              alt="Bulma: Free, open source, and modern CSS framework based on Flexbox"
              width="112"
              height="28"
            />
          </a>
          <a 
          // click event to open/close hamburger
            onClick={() => {
              setisActive(!isActive)
            }}
            role="button"
            className={`navbar-burger burger ${isActive ? 'is-active' : ''}`}
            // className="navbar-burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div id="navbarBasicExample" className={`navbar-menu ${isActive ? 'is-active' : ''}`}>
        
          <div className="navbar-end">
            <a className="navbar-item" href="#gallery">
              Illustrations
            </a>

            <a className="navbar-item" href="#contact">
              Contact
            </a>

            <a
              className="navbar-item"
              href="https://twitter.com/SeanMorganArt"
              target="_blank"
            >
              Twitter
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
