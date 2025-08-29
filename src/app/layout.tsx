import type { Metadata } from "next";
import { Geist, Geist_Mono, Montserrat } from "next/font/google";
import "./globals.css";
import Header from "./components/header";
import Footer from "./components/footer";
import ToasterClient from "./components/Toaster";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });
const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-montserrat", display: "swap" });

export const metadata: Metadata = {
  title: "Oleksandr Lutsiuk",
  description: "Portfolio website of Oleksandr Lutsiuk",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${montserrat.variable} antialiased px-[3rem] sm:px-[6rem] md:px-[7rem] lg:px-[8rem] xl:px-[12rem] flex flex-col h-screen`}
      >
        <Header />
        <ToasterClient /> 
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
