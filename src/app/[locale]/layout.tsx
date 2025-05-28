// app/[locale]/layout.tsx
import type { Metadata } from "next";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import LangSwitch from "@/components/LangSwitch";
import manrope from "../../../lib/fonts";
import NavBar from "components/NavBar";
import Background from "@/components/Background";
import "@/app/globals.css";
import { routing } from "@/i18n/routing";

export async function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export const metadata: Metadata = {
  title: "Mario Hinojosa Freire",
  description: "@galizaragozadev",
  icons: { icon: "/favIcon.svg" },
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  // Ahora params es una Promise, así que la resolvemos:
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) notFound();

  const messages = (await import(`../../../messages/${locale}.json`)).default;

  return (
    <html lang={locale}>
      <body className={`${manrope.className} antialiased overflow-x-hidden`}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Background>
            <LangSwitch />
            <NavBar />
            {children}
          </Background>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
