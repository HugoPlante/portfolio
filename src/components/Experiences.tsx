import React from "react";
import { useTranslation } from "react-i18next";
import IndustrielleAlliance from "./Projects/IndustrielleAlliance";
import MyPorfolio from "./Projects/MyPorfolio";
import UFood from "./Projects/UFood";
import UGram from "./Projects/UGram";
import Section from "./Section";

const Experiences = () => {
  const { t } = useTranslation("experiences");
  return (
    <Section id="experiences" title={t("title")} background="main">
      <div className="flex flex-col space-y-8 ">
        <UGram />
        <UFood />
        <MyPorfolio />
        <IndustrielleAlliance />
      </div>
    </Section>
  );
};

export default Experiences;
