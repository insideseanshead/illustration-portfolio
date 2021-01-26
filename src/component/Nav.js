import React, { useEffect } from "react";
import logo from '../images/logo.png'

const Nav = () => {
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
            role="button"
            className="navbar-burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div id="navbarBasicExample" className="navbar-menu is-fixed-top">
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
