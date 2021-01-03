import React from "react";
import { Img } from "./ImageElement";

const ImageComponent = ({ url, key, caption }) => {
  return (
    <div className="single-image">
      <Img src={url} alt="" key={key} />
      <div className="overlay">
        <div className="text">{caption}</div>
      </div>
    </div>
  );
};

export default ImageComponent;
