import React from "react";

interface SectionProps {
  id: string;
  children: React.ReactNode;
  title: string;
  alignement?: "left" | "right";
  background: "main" | "variant";
}

const Section = ({
  children,
  id,
  title,
  alignement,
  background,
}: SectionProps) => {
  return (
    <section
      id={id}
      className={`flex flex-col place-content-start items-start min-h-[50vh] p-6 text-left
      ${
        background === "main" ? "bg-background-main" : "bg-background-variant"
      }`}
    >
      <h2 className="text-2xl text-white pb-4">{title}</h2>
      {children}
    </section>
  );
};

export default Section;
