import React from "react";
import { useTranslation } from "react-i18next";

const FinNews = () => {
  const { t } = useTranslation();

  return (
    <p>{t("finNews")}</p>
  );
};

export default FinNews;