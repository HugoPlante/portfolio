import React from "react";
import { useTranslation } from "react-i18next";
import Section from "./Section";

const AboutMe = () => {
  const { t } = useTranslation("aboutMe");

  return (
    <Section id="description" title="" alignement="left" background="variant">
      <div className="lg:px-72">
        <p className="text-2xl">{t("welcome")}</p>
        <br />
        <p>{t("part1")}</p>
        <br />
        <p>{t("part2")}</p>
        <br />
        <p>{t("thanks")}</p>
      </div>
    </Section>
  );
};

export default AboutMe;
