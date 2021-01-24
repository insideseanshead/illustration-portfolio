import React from "react";


const Image = ({ image }) => {
  // const img = `res.cloudinary.com/seanmorgandesigns/image/list/illustration${image.public_id}.jpg`


  return (
    <div className="thumbnail">
      <img className="content" src={`https://res.cloudinary.com/seanmorgandesigns/image/upload/${image.public_id}`} alt={image.public_id} />
    </div>
  );
};

export default Image;
