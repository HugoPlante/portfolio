import React from "react";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const { t } = useTranslation("navbar");
  return (
    <nav className="bg-[#0a1144]/80 p-4">
      <div className="flex justify-center gap-4 md:gap-6 text-md sm:text-base md:text-xl">
        <a
          href="#accueil"
          className="text-white hover:text-blue-200 transition"
        >
          Accueil
        </a>
        <a
          href="#experiences"
          className="text-white hover:text-blue-200 transition"
        >
          Projets
        </a>
        <a
          href="#description"
          className="text-white hover:text-blue-200 transition"
        >
          À Propos
        </a>
        <a
          href="#contact"
          className="text-white hover:text-blue-200 transition"
        >
          Contact
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
