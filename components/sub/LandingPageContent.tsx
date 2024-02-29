"use client";

import Image from 'next/image';
import React from 'react'
import {motion} from 'framer-motion'
import { slideInFromLeft, slideInFromTop } from '@/utils/motion'

const LandingPageContent = () => {
  return (
        <motion.div initial= "hidden" animate= "visible" className=' mt-[26vw] sm:mt-[0vw] sm:pt-0 h-full w-full flex flex-col items-center md:justify-center'>

            <motion.div 
             variants={slideInFromTop}
             className='UphoriaBox pt-[36vw] sm:pt-[24vw]  w-fit sm:w-[100%]'>
              <Image className="UphoriaLogo mb-[2vw] sm:mt-[2vw] sm:ml-[29vw] animate-pulse" src="Uphoria.svg" alt="Example SVG" width={750} height={200} loading="eager"/>
              <a href='#events' className='hidden  sm:flex w-fit text-center justify-center items-center explore ml-[65vw] px-[0.7vw] py-[0.1vw] pt-[0.3vw] text-[1.2vw] bg-[#FFAD0ECC] rounded-xl hover:bg-transparent hover:text-[#FFAD0E]'>Explore</a>
            </motion.div>
             <motion.div
              id="about"
              variants={slideInFromLeft(0.5)}
              className="UphoriaText font-normal text-[#F6DFAD] pt-[33vw] text-[4vw] sm:text-[2.2vw] w-[85%] sm:w-[70%] text-center m-auto">
            Bennett University&apos;s annual cultural fest, takes a vibrant turn this year with the theme <span className='text-[#FFAD0E] font-normal'>Band Baaja Baraat</span>, celebrating the joyous energy and colorful traditions of Indian weddings. This brand kit captures the essence of the theme through a lively visual identity.
            </motion.div> 

            <motion.div>
              <a href="#timeline"><Image className="dates py-[20vw] w-[90%] sm:w-[100%]  m-auto" src="/dates.png" alt="Example SVG" width={1400} height={700} loading="lazy"/></a>
            </motion.div> 
        </motion.div>
  )
}

export default LandingPageContent
