import { useTranslation } from "react-i18next";
import { Github, ExternalLink } from "lucide-react";
import { Button } from "../ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "../ui/card";

const MyPorfolio = () => {
  const { t } = useTranslation("experiences");
  return (
    <Card className="bg-white/10 border-none shadow-lg hover:shadow-xl transition-shadow duration-300 max-w-md">
      <CardHeader>
        <CardTitle className="text-white">Portfolio Personnel</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex justify-center items-center ">
          <img
            src="src\assets\images\projects\portfolio.webp"
            alt="Portfolio Preview"
            className="max-w-full w-full max-h-48 object-contain object-top rounded-lg mb-4"
          />
        </div>
        <p className="text-blue-100">
          Mon site portfolio personnel développé avec React et Tailwind CSS.
        </p>
      </CardContent>
      <CardFooter className="flex gap-4">
        <a href="https://github.com/HugoPlante/portfolio">
          <Button variant="secondary" size="sm">
            <Github className="w-4 h-4 mr-2" />
            GitHub
          </Button>
        </a>
        <a href="https://hugoplante.com/">
          <Button variant="secondary" size="sm">
            <ExternalLink className="w-4 h-4 mr-2" />
            Voir le site
          </Button>
        </a>
      </CardFooter>
    </Card>
  );
};

export default MyPorfolio;
