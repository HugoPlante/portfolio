import React from "react";
import { useTranslation } from "react-i18next";
import Section from "./Section";

const Contact = () => {
  const { t } = useTranslation("contact");
  return (
    <Section id="contact" title="" background={"variant"}>
      <div className="lg:px-72">
        <h2 className="text-2xl">{t("title")}</h2>
        <br />
        <p>{t("part1")}</p>
        <br />
        <p>
          {t("part2")}{" "}
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
