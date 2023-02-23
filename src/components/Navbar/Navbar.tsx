import React from "react";
import Link from "./Link";

const Navbar = () => {
  return (
    <div className="fixed left-0 top-0 w-screen h-12 bg-blue-700">
      <div className="flex flex-row justify-center items-center h-full space-x-4 text-lg">
        <Link text={"Accueil"} href={"header"} />
        <Link text={"Description"} href={"description"} />
        <Link text={"Expériences"} href={"experiences"} />
        <Link text={"Contact"} href={"contact"} />
      </div>
    </div>
  );
};

export default Navbar;
