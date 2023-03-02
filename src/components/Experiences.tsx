import React from "react";
import IndustrielleAlliance from "./Projects/IndustrielleAlliance";
import MyPorfolio from "./Projects/MyPorfolio";
import UFood from "./Projects/UFood";
import UGram from "./Projects/UGram";
import Section from "./Section";

const Experiences = () => {
  return (
    <Section id="experiences" title="Mes expériences" background="main">
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
