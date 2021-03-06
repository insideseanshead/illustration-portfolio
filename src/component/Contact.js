import React from "react";
import "react-bulma-components/dist/react-bulma-components.min.css";
import profile from '../images/profile.jpg'

const Contact = () => {
  return (
    <div className="contact columns" id="contact">
      <div className="column is-3">
        <img className="portrait" src={profile} alt="Chimp in a Space Suit" />
      </div>
      <div className="info column is-5">
        <h2 className="title is-4">Sean Morgan</h2>
        <hr />
        <p>
          Is an illustrator who studied art at the California College of the
          Arts and resides in Seattle WA.
          <br />
          <br />
          He has worked for The SF Bay Guardian, Authentic RVA (Richmond VA),
          FineOwl LLC and most recently Flying Lion Brewery in Seattle WA.
          <br />
          <br />
          He is the illustrator and co-creator of the web comic Doc Yeti, Yeti
          Detective. Sean is also best un-known for his critically ignored web comic
          series "Nipples on the Batsuit."
        </p>
      </div>
      <div className="column is-4">
        <form className="contact-form">
          <ul>
            <li className="subtitle is-5">(415) 378-1824</li>
            <li className="subtitle is-5">seanmorgandesigns@gmail.com</li>
          </ul>
          
        </form>
      </div>
    </div>
  );
};

export default Contact;
