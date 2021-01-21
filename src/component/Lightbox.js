import React from "react";
import { SRLWrapper } from "simple-react-lightbox";
import Image from "./Image";

const Lightbox = ({ images }) => {
  return (
    <SRLWrapper>
        <div className="gallery">
      {images.map((image) => (
        <Image key={image.id} image={image} />
        // <div className="thumbnail">
        //     <img className='content' src={image.image} alt={image.alt} />
        // </div>
      ))}
      </div>
    </SRLWrapper>
  );
};

export default Lightbox;
