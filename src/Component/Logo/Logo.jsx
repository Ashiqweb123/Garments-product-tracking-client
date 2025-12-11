import React from "react";
import logo from "../../assets/logo.jpg";

const Logo = () => {
  return (
    <div className="rounded">
      <img className="w-30 h-20 rounded-3xl" src={logo} alt="" />
    </div>
  );
};

export default Logo;
