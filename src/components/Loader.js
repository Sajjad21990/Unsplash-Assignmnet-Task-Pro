import React from "react";
import loader from "../loader.gif";

const Loader = () => {
  return (
    <div className="loader-container">
      <img
        src={loader}
        alt="loader"
        style={{ width: "10vw", height: "100%" }}
      />
    </div>
  );
};

export default Loader;
