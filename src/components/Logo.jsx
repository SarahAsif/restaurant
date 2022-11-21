import React from "react";
import Curve from "../image/curve.png";

const Logo = () => {
  return (
    <div className="flex flex-col font-bold items-center text-center mt-8">
      <div className="App">ONLINE STORE</div>
      <div className="text-red-500 font-bold text-4xl font-serif flex items-center text-center">
        <div>Popular Products</div>
      </div>
      <img src={Curve} className="text-left items-start" />
    </div>
  );
};

export default Logo;
