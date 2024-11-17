import React from "react";
import { useTranslation } from "react-i18next";
import Section from "./Section";

const AboutMe = () => {
  const { t } = useTranslation("aboutMe");

  return (
    <section id="description" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 ">
          À Propos
        </h2>
        <div className="max-w-2xl mx-auto">
          <p className="text-gray-300 text-lg leading-relaxed">
            Passionné par le développement web, je suis constamment à la
            recherche de nouvelles technologies et de meilleures pratiques pour
            créer des expériences web exceptionnelles. Mon parcours m'a permis
            d'acquérir une solide expertise en développement full-stack, avec un
            focus particulier sur les technologies modernes du web.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
