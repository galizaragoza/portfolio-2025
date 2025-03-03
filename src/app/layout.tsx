import type { Metadata } from "next";
import manrope from "../../lib/fonts";
import Navbar from "@/components/navbar";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mario Hinojosa Freire",
  description: "@galizaragozadev",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">

      <body
        className={`${manrope.className} antialiased`}
      ><Navbar />
        {children}
      </body>
    </html>
  );
}
