import LandingPage from "@/components/main/LandingPage";
import Image from "next/image";


export default function Home() {
  return (
  <main className="h-full w-full">
    <div className="flex justify-center items-center w-full h-screen">
        <LandingPage />
    </div>
  </main>);
}
