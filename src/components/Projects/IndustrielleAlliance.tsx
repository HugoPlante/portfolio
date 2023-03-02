import React from "react";
import html5 from "/src/assets/images/skills/html.png";
import css3 from "/src/assets/images/skills/css3.png";
import typescript from "/src/assets/images/skills/typescript.png";
import industrielleAllianceUrl from "../../assets/images/projects/industrielleAlliance.webp";

const IndustrielleAlliance = () => {
  return (
    <div className="flex flex-col md:flex-row ">
      <div className="flex-[50%] md:pr-4 ">
        <div className="self-center ">
          <img
            loading="lazy"
            src={industrielleAllianceUrl}
            alt="ufood screenshot"
            className="self-center"
          ></img>
        </div>
      </div>
      <div className="flex-[50%]">
        <p className="self-start text-2xl font-extrabold">
          Industrielle Alliance
        </p>
        <p>
          Pendant mon parcours scolaire, j'ai effectué trois stages pendant les
          2 dernières années. Les deux premiers stages était un poste de
          développeur back-end. Je travaillais sur l'api (back-end for
          front-end) pour la nouvelle application React. L'api était écrit en C#
          avec .Net Core et stockait les données dans une base de données SQL.
        </p>
        <br />
        <p>
          Mon troisième stage chez Industrielle Alliance était un poste de
          développeur React. J'ai participé à la création de la nouvelle
          application pour la vente d'assurance. Le projet utilisait React,
          Redux, Typescript, Tailwind CSS et Storybook.
        </p>
        <div className="flex flex-row space-x-2 items-center">
          <p>Technologies utilisées : </p>
          <img
            src={html5}
            alt="html5"
            className="w-8 h-8"
            title="HTML5"
            loading="lazy"
          />
          <img
            src={css3}
            alt="css3"
            className="w-8 h-8"
            title="CSS3"
            loading="lazy"
          />
          <img
            src={typescript}
            alt="typescript"
            className="w-8 h-8"
            title="Typescript"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
};

export default IndustrielleAlliance;
