"use client";
import Image from "next/image";
import React from "react";
const LandingPageWheel = () => {
  return (
    <div className="absolute top-[2%] -left-[50%] w-[72%] sm:w-[100%] sm:-left-[40%]">
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
