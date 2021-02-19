import React from "react";


const Image = ({ image }) => {
  return (
    <div className="thumbnail">
      <img className="content" src={`https://res.cloudinary.com/seanmorgandesigns/image/upload/f_auto,q_auto/${image.public_id}`} alt={image.context.custom.alt} />
    </div>
  );
};

export default Image;
