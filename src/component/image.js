import React from "react";
import Lightbox from "react-lightbox-component";


  


const Image = ({ image }) => {
  return (
    <div className="thumbnail">
      <img className="content" src={image.image} alt={image.alt} />
    </div>
  );
};

export default Image;
