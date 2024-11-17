import { Github, ExternalLink, Link } from "lucide-react";
import React from "react";
import { Button } from "../ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "../ui/card";
import generatorImgUrl from "../../assets/images/projects/password-generator.webp";

const PasswordGenerator = () => {
  return (
    <Card className="bg-white/10 border-none shadow-lg hover:shadow-xl transition-shadow duration-300 max-w-md">
      <CardHeader>
        <CardTitle className="text-white">Password Generator</CardTitle>
      </CardHeader>
      <CardContent>
        <img
          src={generatorImgUrl}
          alt="Password Generator Preview"
          className="w-full h-48 object-cover object-top rounded-lg mb-4"
        />
        <p className="text-blue-100">
          Un générateur de mots de passe sécurisé avec options personnalisables.
        </p>
      </CardContent>
      <CardFooter className="flex gap-4">
        <a href="https://github.com/HugoPlante/password-generator">
          <Button variant="secondary" size="sm">
            <Github className="w-4 h-4 mr-2" />
            GitHub
          </Button>
        </a>
        <a href="https://hugoplante.github.io/password-generator/">
          <Button variant="secondary" size="sm">
            <ExternalLink className="w-4 h-4 mr-2" />
            Voir le site
          </Button>
        </a>
      </CardFooter>
    </Card>
  );
};

export default PasswordGenerator;
