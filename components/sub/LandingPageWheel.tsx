"use client";
import Image from "next/image";
import React from "react";
const LandingPageWheel = () => {
  return (
    <div className="absolute -top-[24%] left-[120] w-[92%] sm:w-[100%] sm:-left-[40%] sm:top-[0%]">
        <Image
          className="fullmandala animate-spin-slow"
          src="/webpmandala.webp"
          alt="Mandala SVG"
          width={1000}
          height={150}
          loading="eager"
          priority
        />
      </div>
  );
};

export default LandingPageWheel;
