import React from "react";

interface LinkProps {
  text: string;
  href: string;
}

const Link = ({ text, href }: LinkProps) => {
  return (
    <li>
      <a
        href={href}
        className="text-white hover:text-gray-300 shrink text-[1rem] sm:text-lg lg:text-xl hover:border-b-2 hover:border-b-white"
      >
        {text}
      </a>
    </li>
  );
};

export default Link;
