import React from "react";
import { useTranslation } from "react-i18next";

const Book = () => {
  const { t } = useTranslation();

  return (
    <p>{t("book")}</p>
  );
};

export default Book;