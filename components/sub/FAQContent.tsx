"use client";
import Image from 'next/image';
import React from 'react'
import {motion} from 'framer-motion'
import { slideInFromLeft, slideInFromTop } from '@/utils/motion'

const FAQContent = () => {
  return (
        <motion.div initial= "hidden" animate= "visible" className='h-full w-full flex flex-col items-center md:justify-center'>

            <div className='FAQHeading text-[3vw] w-full text-center'>
                FREQUENTLY ASKED QUESTIONS
            </div>
        </motion.div>
  )
}

export default FAQContent
