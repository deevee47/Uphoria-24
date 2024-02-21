"use client";
import Image from 'next/image';
import React from 'react'
import {motion} from 'framer-motion'
import { slideInFromLeft, slideInFromTop } from '@/utils/motion'

const FAQContent = () => {
  return (
        <motion.div initial= "hidden" animate= "visible" className='h-full w-full flex flex-col items-center md:justify-center'>
            <div id="contact" className='contact-us w-full flex flex-col md:justify-center text-center items-center py-[14vw]'>
                <h1 className='contact-us-header text-[#FFAD0E] text-[6vw]  sm:text-[3.5vw]'>CONTACT US</h1>
                <div className='contact-us-text flex justify-center text-[#F6DFAD] sm:text-[2vw] text-[3vw] max-w-[70%] pt-[2vw] pb-[1.5vw]'>If you have any questions, feel free to reach out to us! We&apos;ll make sure to reach back to you as soon as possible. Be sure to check out FAQ section in case we already have some answers!</div>
                <div className='contact-us-mails text-[#F6DFAD] sm:text-[2vw] text-[3vw] font-bold underline'><a href="mailto:support@bu-fest.in">support@bu-fest.in</a><br></br><a href="mailto:uphoria.zenevia@bennett.edu.in">uphoria.zenevia@bennett.edu.in</a></div>
            </div>
            <div id="faqs" className='FAQHeading text-[5.8vw] sm:text-[4vw] text-[#FFAD0E] font-normal w-full text-center'>
                FREQUENTLY ASKED QUESTIONS
            </div>
        </motion.div>
  )
}

export default FAQContent
