"use client";
import React from "react";
import { motion } from 'framer-motion'
import { slideInFromTop } from '@/utils/motion'

const Navbar = () => {
  return (
      <motion.div initial= "hidden" animate= "visible" className="z-10 absolute w-full flex flex-row items-center justify-center mt-[6vh]">
        <motion.div variants={slideInFromTop} className="sm:w-[50%] h-full flex flex-row items-center justify-between md:mr-22">
          <div className="flex items-center justify-between w-full shadow-[#FFAD0E]/50 h-auto border border-[#FFAD0E] mr-[18px] px-[23px] py-[13px] rounded-full text-[#FFAD0E] bg-[#0000003b]">
            <a href="#events" className="cursor-pointer hover:drop-shadow-[0_0_3px_#FDC951]">
              Events
            </a>
            <a className="dot">&#x2022;</a>
            <a href="#timeline" className="cursor-pointer hover:drop-shadow-[0_0_3px_#FDC951]">
              Timeline
            </a>
            <a className="dot">&#x2022;</a>
            <a href="#last-uphoria" className="cursor-pointer hover:drop-shadow-[0_0_3px_#FDC951]">
              Last Uphoria
            </a>
            <a className="dot">&#x2022;</a>
            <a href="#about" className="cursor-pointer hover:drop-shadow-[0_0_3px_#FDC951]">
              About
            </a>
            <a className="dot">&#x2022;</a>
            <a href="#contact" className="cursor-pointer hover:drop-shadow-[0_0_3px_#FDC951]">
              Contact
            </a>
            <a className="dot">&#x2022;</a>
            <a href="#faqs" className="cursor-pointer hover:drop-shadow-[0_0_3px_#FDC951]">
              FAQs
            </a>
          </div>
        </motion.div>
      </motion.div>
  );
};

export default Navbar;