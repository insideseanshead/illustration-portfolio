import React from "react";
import { SRLWrapper } from "simple-react-lightbox";
import Image from "./Image";

const Lightbox = ({ images }) => {
  return (
    <SRLWrapper>
        <div className="gallery" id="gallery">
      {images.map((image) => (
        <Image image={image} />
      ))}
      </div>
    </SRLWrapper>
  );
};

export default Lightbox;
