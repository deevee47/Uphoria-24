"use client";
import React from "react";
import { motion } from "framer-motion";
import CarouselDemo from "./CarouselDemo";

const EventsContent = () => {
  return (
    <div className="h-full w-full flex flex-col items-center md:justify-center">
      <div
        id="events"
        className="EventHeader sm:text-[8vw] text-[10vw] w-full text-[#FFAD0E] text-center">
        Events
      </div>
      <CarouselDemo/>
    </div>
    
  );
};

export default EventsContent;
