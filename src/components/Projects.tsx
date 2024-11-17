import React from "react";
import { useTranslation } from "react-i18next";
import MyPorfolio from "./Projects/MyPorfolio";
import PasswordGenerator from "./Projects/PasswordGenerator";

const Projects = () => {
  const { t } = useTranslation("experiences");
  return (
    <section
      id="experiences"
      className="py-20 bg-gradient-to-b from-[#1a237e] to-[#0d47a1]"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-white">
          Mes Projets
        </h2>
        <div className="grid lg:grid-cols-2 justify-items-center gap-y-4">
          <PasswordGenerator />
          <MyPorfolio />
        </div>
      </div>
    </section>
  );
};

export default Projects;
