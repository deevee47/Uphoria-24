import LandingPage from "@/components/main/LandingPage";
import Timeline from "@/components/main/Timeline";
import FAQ from "@/components/main/FAQ";
import Events from "@/components/main/Events";
import Footer from "@/components/main/Footer";

export default function Home() {
  return (
  <main className="h-full w-full">
    <div className="flex flex-col justify-center items-center">
        <LandingPage />
        <Events />
        <Timeline />
        <FAQ />
        <Footer />
    </div>
  </main>);
}

