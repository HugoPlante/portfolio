import React from "react";
import { useTranslation } from "react-i18next";
import Avatar from "./Avatar";
import { Github, Linkedin } from "lucide-react";
import { Button } from "./ui/button";

const Header = () => {
  const { t } = useTranslation("header");
  return (
    <div className="relative bg-gradient-to-b from-[#1a237e] to-[#0d47a1] overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'%3E%3Cpath fill='%230a1144' fill-opacity='0.3' d='M0,96L48,112C96,128,192,160,288,186.7C384,213,480,235,576,213.3C672,192,768,128,864,128C960,128,1056,192,1152,208C1248,224,1344,192,1392,176L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z'%3E%3C/path%3E%3C/svg%3E\")",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      />
      <div className="container mx-auto px-4 py-20 relative">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
          <Avatar />
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Hugo Plante
            </h1>
            <p className="text-xl text-blue-100 mb-6">
              Programmeur full-stack avec un très grand intérêt pour le web
            </p>
            <div className="flex gap-4 justify-center md:justify-start">
              <a href="https://github.com/HugoPlante">
                <Button variant="secondary" size="icon" type="button">
                  <Github className="w-5 h-5" />
                </Button>
              </a>
              <a href="https://www.linkedin.com/in/hugo-plante/">
                <Button variant="secondary" size="icon" type="button">
                  <Linkedin />
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
