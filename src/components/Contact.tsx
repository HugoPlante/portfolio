import React from "react";
import Section from "./Section";

const Contact = () => {
  return (
    <Section id="contact" title="" background={"variant"}>
      <div className="lg:px-72">
        <h2 className="text-2xl">Me contacter</h2>
        <br />
        <p>
          Si vous avez une opportunité à me proposer, je suis disponible pour en
          parler.
        </p>
        <br />
        <p>
          Vous pouvez me contacter soit par LinkedIn ou par courriel à l'adresse
          suivante :{" "}
          <a
            href="mailto:hugoplante@hotmail.fr"
            className="text-blue-500 hover:border-b-2 hover:border-b-white"
          >
            hugoplante@hotmail.fr
          </a>
        </p>
      </div>
    </Section>
  );
};

export default Contact;
