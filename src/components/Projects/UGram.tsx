import React from "react";
import html5 from "/src/assets/images/skills/html.png";
import css3 from "/src/assets/images/skills/css3.png";
import typescript from "/src/assets/images/skills/typescript.png";
import nodejs from "/src/assets/images/skills/nodejs.svg";
import ugram from "../../assets/images/projects/ugram.webp";
import amazons3 from "/src/assets/images/skills/amazons3.svg";

const UGram = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row ">
      <div className="flex-[50%] md:mr-4">
        <p className="self-start text-2xl font-extrabold">UGram</p>
        <p>
          Dans le cours Développement d'application web avancé nous devons
          faire, en équipe de 6, une application dans le même genre que
          Instagram. Nous devons faire le front-end et le back-end.
        </p>
        <br />
        <p>
          Le front-end est fait avec React et Material UI. Notre back-end
          utilise nodejs, Nestjs ainsi que MongoDB. Les deux sont écrits en
          Typescript.
        </p>
        <br />
        <p>
          Une partie importante du projet est d'utiliser AWS S3 pour héberger
          les images et pour le déploiement continu. Le projet est en
          développement actif.
        </p>
        <div className="flex flex-row space-x-2 items-center">
          <p>Fait avec : </p>
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
            src={nodejs}
            alt="typescript"
            className="w-10 h-10"
            title="Nodejs"
            loading="lazy"
          />
          <img
            src={amazons3}
            alt="typescript"
            className="w-10 h-10"
            title="Amazon s3"
            loading="lazy"
          />
        </div>
      </div>
      <div className="flex-[50%]">
        <div className="self-center ">
          <img
            loading="lazy"
            src={ugram}
            alt="UGram screenshot"
            className="self-center"
          ></img>
        </div>
      </div>
    </div>
  );
};

export default UGram;
