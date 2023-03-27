import React from "react";
import { useTranslation } from "react-i18next";

const Port = () => {
  const { t } = useTranslation();

  return (
    <p>{t("port")}</p>
  );
};

export default Port;