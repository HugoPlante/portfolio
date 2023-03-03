import React from "react";
import html5 from "/src/assets/images/skills/html.png";
import css3 from "/src/assets/images/skills/css3.png";
import typescript from "/src/assets/images/skills/typescript.png";
import tailwind from "/src/assets/images/skills/tailwind.png";
import porfolioUrl from "../../assets/images/projects/porfolio.webp";
import { useTranslation } from "react-i18next";

const MyPorfolio = () => {
  const { t } = useTranslation("experiences");
  return (
    <div className="flex flex-col-reverse md:flex-row ">
      <div className="flex-[50%] md:mr-4">
        <p className="self-start text-2xl font-extrabold">Porfolio</p>
        <p>{t("porfolio.part1")}</p>
        <br />
        <p>{t("porfolio.part2")}</p>
        <br />
        <p>{t("porfolio.part3")}</p>
        <p>
          {t("porfolio.githubLink")}{" "}
          <a
            className="hover:border-b-2 hover:border-b-white"
            href={"https://github.com/HugoPlante/porfolio"}
          >
            Github
          </a>
        </p>
        <br />
        <div className="flex flex-row space-x-2 items-center">
          <p>{t("madeWith")}</p>
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
          <img
            src={tailwind}
            className="w-12 h-12"
            alt="tailwindcss"
            title="tailwind css"
            loading="lazy"
          />
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
