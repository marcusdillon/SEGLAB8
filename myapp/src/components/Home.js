import React from "react";
import { useTranslation } from "react-i18next";

const Home = () => {
  const { t } = useTranslation();

  return (
    <p>{t("home")}</p>
  );
};

export default Home;
