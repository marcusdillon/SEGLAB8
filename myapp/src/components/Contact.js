import React from "react";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation();

  return (
    <p>{t("contact")}</p>
  );
};

export default Contact;