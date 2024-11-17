import React from "react";
import Contact from "../components/Contact";
import AboutMe from "../components/AboutMe";
import Experiences from "../components/Experiences";
import Header from "../components/Header";
import Navbar from "../components/Navbar/Navbar";

const Porfolio = () => {
  return (
    <div className="flex flex-col bg-background-main bg-[url('/src/assets/images/profile/bg-vertical.svg')] md:bg-[url('/src/assets/images/profile/bg-horizontal.svg')]">
      <Navbar />
      <Header />
      <div className="flex flex-col">
        <Experiences />
        <AboutMe />
        <Contact />
      </div>
    </div>
  );
};

export default Porfolio;
