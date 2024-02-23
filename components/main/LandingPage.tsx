import React from "react";
import LandingPageContent from "../sub/LandingPageContent";
import LandingPageWheel from "../sub/LandingPageWheel";
import Navbar from "./Navbar";

const LandingPage = () => {
  return (
    <div className="relative flex flex-col items-center justify-center h-full w-full">
      <LandingPageContent />
      <LandingPageWheel />
    </div>
  );
};

export default LandingPage;
