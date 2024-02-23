"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { slideInFromLeft, slideInFromTop } from "@/utils/motion";
import CarouselDemo from "./CarouselDemo";

const EventsContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="h-full w-full flex flex-col items-center md:justify-center"
    >
      <div
        id="events"
        className="EventHeader sm:text-[8vw] text-[10vw] w-full text-[#FFAD0E] text-center"
      >
        Events
      </div>
      <CarouselDemo />
    </motion.div>
  );
};

export default EventsContent;
