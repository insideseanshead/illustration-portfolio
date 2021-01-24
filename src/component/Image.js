import React from "react";


const Image = ({ image }) => {
  return (
    <div className="thumbnail">
      <img className="content" src={image.public_id} />
    </div>
  );
};

export default Image;
