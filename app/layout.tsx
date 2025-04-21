import type { Metadata } from "next";
import { Nunito, Dancing_Script } from "next/font/google";
import "./globals.css";

const nunito = Nunito({ subsets: ["latin"], variable: "--font-nunito" });
const dancingScript = Dancing_Script({ subsets: ["latin"], variable: "--font-dancing-script" });

export const metadata = {
  title: "Alex & Isabelle",
  icons: {
    icon: "/love-isabelle/girassol.png",
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${nunito.variable} ${dancingScript.variable}`}>{children}</body>
    </html>
  );
}