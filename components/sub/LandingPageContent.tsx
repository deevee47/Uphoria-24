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
              className="UphoriaText text-[#FFAD0E] pt-[34vw] text-[2.4vw] w-[70%] text-center ">
            Lorem Ipsum and etc etc content to be given whenever its provided issokay
            </motion.div> 
        </motion.div>
  )
}

export default LandingPageContent
