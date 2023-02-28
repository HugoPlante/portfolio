import React from "react";
import html5 from "/src/assets/images/skills/html.png";
import css3 from "/src/assets/images/skills/css3.png";
import typescript from "/src/assets/images/skills/typescript.png";
import tailwind from "/src/assets/images/skills/tailwind.png";
import porfolioUrl from "../../assets/images/projects/porfolio.png";

const MyPorfolio = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row ">
      <div className="flex-[50%]">
        <p className="self-start text-2xl font-extrabold">Mon porfolio</p>
        <p>Ce site est fait completement par moi même !</p>

        <br />
        <p>
          J'ai utilisé React ainsi que tailwind pour découper les sections en
          composants réutilisables. Je me suis assuré que le site soit
          "responsive" autant en affichage bureau qu'en affichage mobile.
        </p>
        <br />
        <p>
          La derniere version du site web est déployée automatiquement grâce à
          Github actions et Github pages.
        </p>
        <p>
          Vous pouvez voir le code ici :{" "}
          <a
            className="hover:border-b-2 hover:border-b-white"
            href={"https://github.com/HugoPlante/porfolio"}
          >
            Github
          </a>
        </p>

        <div className="flex flex-row space-x-2 items-center">
          <p>Fait avec : </p>
          <img src={html5} alt="html5" className="w-8 h-8" />
          <img src={css3} alt="css3" className="w-8 h-8" />
          <img src={typescript} alt="typescript" className="w-8 h-8" />
          <img src={tailwind} className="w-12 h-12" alt="tailwindcss" />
        </div>
      </div>
      <div className="flex-[50%] md:pr-4 ">
        <div className="self-center ">
          <img
            loading="lazy"
            src={porfolioUrl}
            alt="ufood screnshot"
            className="self-center"
          ></img>
        </div>
      </div>
    </div>
  );
};

export default MyPorfolio;
