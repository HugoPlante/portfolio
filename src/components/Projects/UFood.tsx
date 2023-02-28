import React from "react";
import html5 from "/src/assets/images/skills/html.png";
import css3 from "/src/assets/images/skills/css3.png";
import typescript from "/src/assets/images/skills/typescript.png";
import tailwind from "/src/assets/images/skills/tailwind.png";
import ufooUrl from "../../assets/images/projects/ufood.webp";

const UFood = () => {
  return (
    <div className="flex flex-col md:flex-row ">
      <div className="flex-[50%] md:pr-4 ">
        <div className="self-center ">
          <img
            loading="lazy"
            src={ufooUrl}
            alt="ufood screenshot"
            className="self-center"
          ></img>
        </div>
      </div>
      <div className="flex-[50%]">
        <p className="self-start text-2xl font-extrabold">UFood</p>
        <p>
          Dans le cours Développement d'application web nous devions faire, en
          équipe de 6, une application pour trouver des restaurants à proximité
          et leur écrire une évaluation.
        </p>
        <br />
        <p>
          Le projet a été réalié avec Vue.js 3 et Tailwind CSS. Nous étions
          évalués selon les fonctionnalités réalisées, la propreté du code et
          sur l'architecture du projet.
        </p>
        <div className="flex flex-row space-x-2 items-center">
          <p>Fait avec : </p>
          <img src={html5} alt="html5" className="w-8 h-8" />
          <img src={css3} alt="css3" className="w-8 h-8" />
          <img src={typescript} alt="typescript" className="w-8 h-8" />
          <img src={tailwind} className="w-12 h-12" alt="tailwindcss" />
        </div>
      </div>
    </div>
  );
};

export default UFood;
