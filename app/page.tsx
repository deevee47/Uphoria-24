import LandingPage from "@/components/main/LandingPage";
import Timeline from "@/components/main/Timeline";
import FAQ from "@/components/main/FAQ";

export default function Home() {
  return (
  <main className="h-full w-full">
    <div className="flex flex-col justify-center items-center">
        <LandingPage />
        <Timeline />
        <FAQ />
    </div>
  </main>);
}

