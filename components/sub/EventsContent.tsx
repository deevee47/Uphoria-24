"use client";
import Image from 'next/image';
import React from 'react'
import {motion} from 'framer-motion'
import { slideInFromLeft, slideInFromTop } from '@/utils/motion'

const EventsContent = () => {
  return (
        <motion.div initial= "hidden" animate= "visible" className='h-full w-full flex flex-col items-center md:justify-center'>

            <div className='EventsHeading text-[3vw]'>
                Events
            </div>
        </motion.div>
  )
}

export default EventsContent
