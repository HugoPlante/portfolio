import React from "react";

const Navbar = () => {
  return (
    <div className="fixed left-0 top-0 w-screen h-12 bg-blue-600">
      <div className="flex flex-row justify-center items-center h-full space-x-4 text-lg">
        <p>Acceuil</p>
        <p>Description</p>
        <p>Expériences</p>
        <p>Projets</p>
        <p>Contact</p>
      </div>
    </div>
  );
};

export default Navbar;
