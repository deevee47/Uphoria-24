"use client";
import Image from 'next/image'
import React from 'react'
import {motion} from 'framer-motion'
import { slideInFromLeft } from '@/utils/motion'

const LandingPageWheel = () => {
  return (
    <motion.div initial= "hidden" animate= "visible"className="absolute top-[0%] left-[0%] rotate-270 w-[25%]">
        <motion.div variants={slideInFromLeft(0.5)}>
        <Image className="fullmandala mt-[6vh]" src="ColoredWheel.svg" alt="Mandala SVG" width={450} height={150} />
        </motion.div>
    </motion.div>
  )
}

export default LandingPageWheel
