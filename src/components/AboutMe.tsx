import React from "react";
import Section from "./Section";

const AboutMe = () => {
  return (
    <Section id="description" title="Description" alignement="left">
      <p className="text-xl">
        Salut !
        <br />
        <br />
        <p>
          Je suis un programmeur full-stack passionné par la création
          d'interfaces web et je suis déterminé à me spécialiser en tant que
          programmeur front-end. Diplômé d'une technique en informatique en
          2021, mes expériences passées m'ont permis d'acquérir des compétences
          en développement web et de créer des interfaces utilisateur
          conviviales.
        </p>
        <br />
        <p>
          J'aime particulièrement concevoir et mettre en œuvre des pages web qui
          sont à la fois esthétiques et fonctionnelles. Je suis constamment à la
          recherche de nouveaux défis et je suis convaincu que mes compétences
          en développement web me permettront de contribuer de manière
          significative à tout projet de développement front-end.
        </p>
        <br />
        <p>Merci de visiter mon portfolio !</p>
      </p>
    </Section>
  );
};

export default AboutMe;
