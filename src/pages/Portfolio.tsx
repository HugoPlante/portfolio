import React from "react";
import Contact from "../components/Contact";
import Description from "../components/Description";
import Experiences from "../components/Experiences";
import Header from "../components/Header";
import Navbar from "../components/Navbar/Navbar";

const Porfolio = () => {
  return (
    <div className="flex flex-col">
      <Navbar />
      <Header />
      <div className="flex flex-col space-y-12">
        <Description />
        <Experiences />
        <Contact />
      </div>
    </div>
  );
};

export default Porfolio;
