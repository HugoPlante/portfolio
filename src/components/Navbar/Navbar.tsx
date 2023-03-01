import React from "react";
import Link from "./Link";

const Navbar = () => {
  return (
    <nav className="fixed left-0 top-0 w-screen h-12 border-b-2 border-background-variant bg-background-main">
      <ul
        role="list"
        className="flex flex-row justify-center items-center h-full space-x-2 md:space-x-4"
      >
        <Link text={"Accueil"} href={"#header"} />
        <Link text={"Description"} href={"#description"} />
        <Link text={"Expériences"} href={"#experiences"} />
        <Link text={"Contact"} href={"#contact"} />
      </ul>
    </nav>
  );
};

export default Navbar;
