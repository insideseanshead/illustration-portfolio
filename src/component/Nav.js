import React, { useEffect } from "react";

const Nav = () => {
  return (
    <div 
    // className={navbarClasses.join(" ")}
    id="sticky"
    >
      <nav className="navbar is-dark" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
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
            <a className="navbar-item" href='#gallery'>Illustrations</a>

            <a className="navbar-item" href='#contact'>Contact</a>

            <a className="navbar-item">Twitter</a>

            <a className="navbar-item">Instagram</a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
