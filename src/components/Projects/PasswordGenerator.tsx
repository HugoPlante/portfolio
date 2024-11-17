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

const PasswordGenerator = () => {
  return (
    <Card className="bg-white/10 border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
      <CardHeader>
        <CardTitle className="text-white">Password Generator</CardTitle>
      </CardHeader>
      <CardContent>
        <img
          src="src\assets\images\projects\password-generator.webp"
          alt="Password Generator Preview"
          className="w-full h-48 object-cover object-top rounded-lg mb-4"
        />
        <p className="text-blue-100 mb-4">
          Un générateur de mots de passe sécurisé avec options personnalisables.
        </p>
        <div className="flex gap-2 mb-4">
          <img src="/placeholder.svg" alt="HTML" className="w-6 h-6" />
          <img src="/placeholder.svg" alt="CSS" className="w-6 h-6" />
          <img src="/placeholder.svg" alt="JavaScript" className="w-6 h-6" />
        </div>
      </CardContent>
      <CardFooter className="flex gap-4">
        <Button asChild variant="secondary" size="sm">
          <ExternalLink href="www.github.com/HugoPlante/password-generator">
            <Github className="w-4 h-4 mr-2" />
            GitHub
          </ExternalLink>
        </Button>
        <Button variant="secondary" size="sm">
          <ExternalLink className="w-4 h-4 mr-2" />
          Voir le site
        </Button>
      </CardFooter>
    </Card>
  );
};

export default PasswordGenerator;
