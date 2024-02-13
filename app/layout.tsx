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
    <html lang="en">
      <body className={`${inter.className} bg-[#000000] overflow-y-scroll overflow-x-hidden bg-cover bg-no-repeat bg-center`}>
         
         <Navbar />
         {children}

      </body>
    </html>
  );
}
