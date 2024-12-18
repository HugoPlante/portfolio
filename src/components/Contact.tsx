import React from "react";
import { useTranslation } from "react-i18next";
import { Mail, Github, Linkedin } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";

const Contact = () => {
  const { t } = useTranslation("contact");
  return (
    <section id="contact" className="py-20 bg-gray-800 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-white">
          Me Contacter
        </h2>
        <div className="max-w-md mx-auto">
          <Card className="bg-gray-700 border-gray-600">
            <CardContent className="space-y-4 pt-6">
              <div className="flex items-center gap-4">
                <Button
                  variant="outline"
                  size="icon"
                  className="text-blue-300 border-blue-300 hover:bg-blue-300 hover:text-gray-800"
                >
                  <Mail className="w-4 h-4" />
                </Button>
                <a
                  href="mailto:hugoplante@hotmail.fr"
                  className="text-blue-300 hover:underline"
                >
                  hugoplante@hotmail.fr
                </a>
              </div>
              <div className="flex items-center gap-4">
                <Button
                  variant="outline"
                  size="icon"
                  className="text-blue-300 border-blue-300 hover:bg-blue-300 hover:text-gray-800"
                >
                  <Github className="w-4 h-4" />
                </Button>
                <a
                  href="https://github.com/hugoplante"
                  className="text-blue-300 hover:underline"
                >
                  github.com/hugoplante
                </a>
              </div>
              <div className="flex items-center gap-4">
                <Button
                  variant="outline"
                  size="icon"
                  className="text-blue-300 border-blue-300 hover:bg-blue-300 hover:text-gray-800"
                >
                  <Linkedin className="w-4 h-4" />
                </Button>
                <a
                  href="https://linkedin.com/in/hugoplante"
                  className="text-blue-300 hover:underline"
                >
                  linkedin.com/in/hugoplante
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
