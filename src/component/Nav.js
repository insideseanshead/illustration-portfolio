import React, { useEffect } from "react";

const Nav = () => {

// sticky navbar
  const [sticky, setSticky] = React.useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 900) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  });

  let navbarClasses = ["nav"];

  if (sticky) {
    navbarClasses.push("sticky");
  }

  return (
    <div className={navbarClasses.join(" ")}>
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <a className="navbar-item" href="https://bulma.io">
            <img
              src="https://bulma.io/images/bulma-logo.png"
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
          <div className="navbar-start">
            <a className="navbar-item">Illustrations</a>

            <a className="navbar-item">Contact</a>

            <a className="navbar-item">Twitter</a>

            <a className="navbar-item">Instagram</a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
