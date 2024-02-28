import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/main/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Uphoria 2024",
  description: "Bennett University Fest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="scroll-smooth" lang="en">
      <head><link href="https://cdn.jsdelivr.net/npm/remixicon@4.1.0/fonts/remixicon.css"rel="stylesheet"/></head>
        <body style={{ backgroundImage: `url('/noiseEffect70.png'), url('/bg2.svg')` }} className={`${inter.className} absolute bg-top sm:bg-top overflow-y-scroll overflow-x-hidden bg-cover bg-no-repeat bg-[#231F1E]`}>
         
         <Navbar />
         {children}

      </body>
    </html>
  );
}
