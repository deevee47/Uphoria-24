"use client";

import React from 'react'
import {motion} from 'framer-motion'
import { slideInFromLeft, slideInFromTop } from '@/utils/motion'

const LandingPageContent = () => {
  return (
        <motion.div initial= "hidden" animate= "visible" className='h-full w-full flex flex-col items-center justify-center'>

            <motion.div 
             variants={slideInFromTop}
             className='UphoriaBox pt-[9vw] m-[19vw]'>
                <img src="Uphoria.svg" alt="Example SVG" className='h-[35vh]' />
            </motion.div>
            
             <motion.div
              variants={slideInFromLeft(0.5)}
              className="UphoriaText text-[#FDC951] text-[2.6vw] w-[73%] text-center">
            Lorem Ipsum and etc etc content to be given whenever its provided issokay
            </motion.div> 
        </motion.div>
  )
}

export default LandingPageContent
