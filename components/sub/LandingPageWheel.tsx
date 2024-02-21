"use client";
import Image from 'next/image'
import React from 'react'
import {motion} from 'framer-motion'
import { slideInFromLeft } from '@/utils/motion'

const LandingPageWheel = () => {
  return (
    <motion.div initial= "hidden" animate= "visible"className="absolute top-[2%] -left-[50%] w-[72%] sm:w-[100%] sm:-left-[40%]">
        <motion.div variants={slideInFromLeft(0.5)}>
        <Image className="fullmandala animate-spin-slow" src="fullmandala.svg" alt="Mandala SVG" width={1000} height={150} />
        </motion.div>
    </motion.div>
  )
}

export default LandingPageWheel
