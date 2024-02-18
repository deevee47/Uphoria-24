"use client";

import Image from 'next/image';
import React from 'react'
import {motion} from 'framer-motion'
import { slideInFromLeft, slideInFromTop } from '@/utils/motion'

const LandingPageContent = () => {
  return (
        <motion.div initial= "hidden" animate= "visible" className='h-full w-full flex flex-col items-center md:justify-center'>

            <motion.div 
             variants={slideInFromTop}
             className='UphoriaBox pt-[24vw]'>
              <Image className="UphoriaLogo" src="Uphoria.svg" alt="Example SVG" width={600} height={100}/>
            </motion.div>
             <motion.div
              variants={slideInFromLeft(0.5)}
              className="UphoriaText text-[#F6DFAD] pt-[34vw] text-[2vw] w-[70%] text-center ">
            Bennett University&apos;s annual cultural fest, takes a vibrant turn this year with the theme <span>Band Baaja Baraat</span>, celebrating the joyous energy and colorful traditions of Indian weddings. This brand kit captures the essence of the theme through a lively visual identity.
            </motion.div> 

            {/* <motion.div>
              <Image className="dates" src="/Dates.png" alt="Example SVG" width={2000} height={1000}/>
            </motion.div> */}
        </motion.div>
  )
}

export default LandingPageContent
