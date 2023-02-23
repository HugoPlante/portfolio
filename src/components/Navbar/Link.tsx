import React from "react";

interface LinkProps {
  text: string;
  href: string;
}

const Link = ({ text, href }: LinkProps) => {
  return (
    <a href={`#${href}`} className="text-white hover:text-gray-300">
      {text}
    </a>
  );
};

export default Link;
