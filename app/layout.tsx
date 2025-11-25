import type { Metadata } from "next";
import { Inria_Sans, Alegreya, Alegreya_Sans } from "next/font/google";
import "./globals.css";
import Loading from "./components/loading";

const inriaSans = Inria_Sans({
  variable: "--font-inria-sans",
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});

const alegreya = Alegreya({
  variable: "--font-alegreya",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const alegreyaSans = Alegreya_Sans({
  variable: "--font-alegreya-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "800"],
});

export const metadata: Metadata = {
  title: "Trans Mreža Balkan",
  description: "Transgender Network Balkan",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inriaSans.variable} ${alegreya.variable} ${alegreyaSans.variable} antialiased`}
      >
        <Loading />
        {children}
      </body>
    </html>
  );
}
