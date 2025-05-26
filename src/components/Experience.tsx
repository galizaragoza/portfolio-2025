import React from "react";
import { useTranslations } from "next-intl";

const Experience = () => {
  const t = useTranslations("Experience");
  return (
    <section
      className="flex items-center justify-center px-4 text-center min-h-[60vh]"
      id="experience"
    >
      <div>
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 text-start mb-12">
          {t("heading")}
        </h2>
        <div>
          <h3 className="text-2xl md:text-3xl font-extrabold text-gray-800 text-start mb-2">
            {t("position")}
          </h3>
          <h4 className="text-2xl md:text-2xl font-extrabold text-gray-600 text-start mb-2">
            {t("roleTitle")}
          </h4>
          <p className="text-xl md:text-xl text-gray-800 text-start font-semibold">
            {t("description1")}
            <br />
            {t("description2")}
          </p>
          <p className="text-xl md:text-xl text-gray-900 text-start font-bold mt-2">
            {t("note")}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Experience;
