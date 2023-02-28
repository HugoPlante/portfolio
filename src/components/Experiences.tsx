import React from "react";
import MyPorfolio from "./Projects/MyPorfolio";
import UFood from "./Projects/UFood";
import Section from "./Section";

const Experiences = () => {
  return (
    <Section id="experiences" title="Mes expériences" background="main">
      <div className="flex flex-col space-y-8 ">
        <UFood />
        <MyPorfolio />
      </div>
    </Section>
  );
};

export default Experiences;
