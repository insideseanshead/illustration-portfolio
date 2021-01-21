import React from "react";
import "react-bulma-components/dist/react-bulma-components.min.css";

const Contact = () => {
  return (
    <div className="contact columns">
      <div className="column is-3">
        <img className="portrait" src="https://www.placecage.com/g/400/500" />
      </div>
      <div className="info column is-5">
        <h1 className="title is-4">Sean Morgan</h1>
        <hr />
        <p>
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum."
        </p>
      </div>
      <div className="column is-4">
        <form className="contact-form">
          <ul>
              <li className="subtitle is-5">(415) 378-1824</li>
              <li className="subtitle is-5">seanmorgandesigns@gmail.com</li>
          </ul>
          <h3>Form goes here</h3>
        </form>
      </div>
    </div>
  );
};

export default Contact;
