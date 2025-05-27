"use client";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import introCiscoBadge from "../../public/certificates/intro-to-cyber-cisco.png";
import nuclio from "../../public/certificates/nuclio.png";
import isc2candidate from "../../public/certificates/isc2-candidate.png";

const Education = () => {
  const t = useTranslations("Education");
  return (
    <section
      id="experience"
      className="flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 text-center min-h-[60vh]"
    >
      <div>
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 dark:text-gray-100 text-end mb-12">
          {t("heading")}
        </h2>
        <div>
          <h3 className="text-2xl md:text-3xl font-extrabold text-gray-800 dark:text-gray-100 text-end mb-2">
            {t("masterTitle")}
          </h3>
          <h4 className="text-2xl md:text-2xl font-extrabold text-gray-600 dark:text-gray-400 text-end mb-2">
            {t("masterInstitution")}
          </h4>
          <p className="text-xl md:text-xl text-gray-800 dark:text-gray-200 text-end font-semibold">
            {t("masterDescription")}
          </p>
        </div>
        <h3 className="text-2xl md:text-3xl font-extrabold text-gray-800 dark:text-gray-100 text-end mb-2 mt-20">
          {t("certificates")}
        </h3>
        <div className="flex flex-wrap justify-center my-10 gap-8">
          <Link
            href={
              "https://www.credly.com/badges/a7977946-0f4d-4319-972c-d32b61dca599/public_url"
            }
            target="_blank"
          >
            <Image
              src={introCiscoBadge}
              alt=""
              width={200}
              height={200}
              className="hover:opacity-70 transition duration-300"
            />
          </Link>
          <Link
            href={
              "https://www.credly.com/badges/9a4810fa-8f37-431b-bccf-931c80155cb9/public_url"
            }
            target="_blank"
          >
            <Image
              src={isc2candidate}
              alt=""
              width={200}
              height={200}
              className="hover:opacity-70 transition duration-300"
            />
          </Link>
          <Link href={"certificates/cert_nuclio.pdf"} target="_blank">
            <Image
              src={nuclio}
              alt=""
              width={200}
              height={200}
              className="hover:opacity-70 transition duration-300"
            />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Education;
