import type { Metadata } from "next";
import manrope from "../../lib/fonts";
import Navbar from "@/components/Navbar";
import "./globals.css";
import Background from "@/components/Background";

export const metadata: Metadata = {
  title: "Mario Hinojosa Freire",
  description: "@galizaragozadev",
  icons: {
    icon: "../../public/favIcon.svg"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">

      <body
        className={`${manrope.className} antialiased overflow-x-hidden`}
      >
        <Background>
          <Navbar />
          {children}
        </Background>
      </body>
    </html>
  );
}
