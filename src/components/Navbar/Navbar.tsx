import React from "react";
import { useTranslation } from "react-i18next";
import Link from "./Link";

const Navbar = () => {
  const { t } = useTranslation("navbar");
  return (
    <nav className="fixed left-0 top-0 w-screen h-12 border-b-2 border-background-variant bg-background-main">
      <ul
        role="list"
        className="flex flex-row justify-center items-center h-full space-x-2 md:space-x-4"
      >
        <Link text={t("home")} href={"#header"} />
        <Link text={t("aboutMe")} href={"#description"} />
        <Link text={t("experiences")} href={"#experiences"} />
        <Link text={t("contact")} href={"#contact"} />
      </ul>
    </nav>
  );
};

export default Navbar;
