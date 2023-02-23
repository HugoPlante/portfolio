import React from "react";
import Avatar from "./Avatar";

const Header = () => {
  return (
    <div className="flex flex-row items-center">
      <Avatar />
      <div className="flex flex-col pl-8">
        <h1 className="pb-4">Hugo Plante</h1>
        <p> Dev front-end</p>
      </div>
    </div>
  );
};

export default Header;
