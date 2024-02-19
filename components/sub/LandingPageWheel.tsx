"use client";
import Image from 'next/image'
import React from 'react'
import {motion} from 'framer-motion'
import { slideInFromLeft } from '@/utils/motion'

const LandingPageWheel = () => {
  return (
    <motion.div initial= "hidden" animate= "visible"className="absolute h-full w-full top-[1%] rotate-270">
        <motion.div variants={slideInFromLeft(0.5)}>
        <Image src="ColoredWheel.svg" alt="Colored Wheel SVG" width={430} height={60}/>
        </motion.div>
    </motion.div>
  )
}

export default LandingPageWheel
