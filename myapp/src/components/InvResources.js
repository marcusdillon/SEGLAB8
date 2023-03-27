import React from "react";
import { useTranslation } from "react-i18next";

const InvResources = () => {
  const { t } = useTranslation();

  return (
    <p>{t("invResources")}</p>
  );
};

export default InvResources;