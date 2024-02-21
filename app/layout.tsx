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
      <body style={{ backgroundImage: `url('/background.svg')` }} className={`${inter.className} overflow-y-scroll overflow-x-hidden bg-cover bg-no-repeat object-cover bg-[#131313]`}>
         
         <Navbar />
         {children}

      </body>
    </html>
  );
}
