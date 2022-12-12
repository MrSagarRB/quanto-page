import React from "react";
import loaderGIF from "../assets/loader.gif";

const Loader = () => {
  return (
    <div className="test h-screen flex items-center justify-center">
      <img src={loaderGIF} />
    </div>
  );
};

export default Loader;
