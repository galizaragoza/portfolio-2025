import React from "react";
import { useTranslations } from "next-intl";

const ContactSection = () => {
  const t = useTranslations("Contact");
  return (
    <section
      id="contact"
      className="flex flex-col items-center justify-center mt-20 px-4 sm:px-6 lg:px-8 text-center min-h-[60vh]0"
    >
      <div>
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 dark:text-gray-100 mb-12">
          {t("title")}
        </h2>
        <div>
          <h3 className="text-2xl md:text-3xl font-extrabold text-gray-800 dark:text-gray-100 mb-2">
            {t("description")}
          </h3>
          <h4 className="text-2xl md:text-2xl font-extrabold text-gray-600 dark:text-gray-400 mb-2">
            {t("emailPrompt")}
          </h4>
          <p className="text-xl md:text-xl text-gray-800 dark:text-gray-200 font-semibold">
            {t("footer")}
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
