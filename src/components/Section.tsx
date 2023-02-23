import React from "react";

interface SectionProps {
  id: string;
  children: React.ReactNode;
  title: string;
}

const Section = ({ children, id, title }: SectionProps) => {
  return (
    <section id={id} className="flex flex-col place-content-start items-start ">
      <h2 className="text-2xl text-white pb-4">{title}</h2>
      <div className="bg-zinc-900 rounded-xl p-6">{children}</div>
    </section>
  );
};

export default Section;
