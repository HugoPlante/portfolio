import { Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import Avatar from "@/components/Avatar";
import Contact from "@/components/Contact";
import AboutMe from "@/components/AboutMe";
import PasswordGenerator from "@/components/Projects/PasswordGenerator";
import MyPorfolio from "@/components/Projects/MyPorfolio";
import Navbar from "@/components/Navbar/Navbar";
import Header from "@/components/Header";
import Projects from "@/components/Projects";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-[#1a237e]">
      <Navbar />
      <Header />
      <Projects />
      <AboutMe />
      <Contact />
    </div>
  );
}
