import React from "react";
import Section from "./Section";

const AboutMe = () => {
  return (
    <Section id="description" title="" alignement="left" background="variant">
      <div className="lg:px-72">
        <p className="text-2xl">Salut !</p>
        <br />
        <p>
          Je suis un programmeur full-stack passionné par la création
          d'interfaces web et d'API. Diplômé en informatique en 2021, j'ai
          acquis des compétences en développement web et en création
          d'interfaces utilisateur conviviales.
        </p>
        <br />
        <p>
          Je conçois et mets en œuvre des pages web esthétiques et
          fonctionnelles. Mes compétences en développement web me permettent de
          contribuer de manière significative à tout projet de développement
          web.
        </p>
        <br />
        <p>Merci de visiter mon portfolio !</p>
      </div>
    </Section>
  );
};

export default AboutMe;
