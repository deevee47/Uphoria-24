import React from 'react'
import {motion} from 'framer-motion'
import { slideInFromLeft, slideInFromRight } from '@/utils/motion'
import Image from 'next/image';

interface EventItemProps {
  time: string;
  eventName: string;
}

const EventItem: React.FC<EventItemProps> = ({ time, eventName }) => {
  return (
    <div className='group h-full w-fit pl-[3.5vw] sm:pl-[0vw] flex gap-10 sm:gap-20 items-center justify-center'>
      <motion.div variants={slideInFromLeft(0.5)} className='EventTime text-[#F6DFAD] text-[4vw] sm:text-[2.5vw] group-hover:sm:text-[2.6vw] group-hover:stroke-current group-hover:underline animate-underline underline-offset-4'>
        {time}
      </motion.div>
      <motion.div variants={slideInFromRight(0.5)} className='EventName text-[4.5vw] sm:text-[3.5vw] group-hover:sm:text-[3.6vw] group-hover:stroke-current group-hover:underline animate-underline underline-offset-4'>
        {eventName}
      </motion.div>
    </div>
  );
};

const TimelineContent: React.FC = () => {

  const events15 = [
    { time: '12:00 PM - 03:00 PM', eventName: 'Aaroh' },
    { time: '03:00 PM - 06:00 PM', eventName: 'Reverb' },
    { time: '12:00 PM - 05:00 PM', eventName: 'Page to Picture' },
    { time: '12:00 PM - 02:00 PM', eventName: 'Mandala Art' },
    { time: '02:00 PM - 04:00 PM', eventName: 'Doodling' },
    { time: '04:00 PM - 06:00 PM', eventName: 'Sketching' },
    { time: '12:00 PM - 06:00 PM', eventName: 'FIFA' },
    { time: '12:00 PM - 03:00 PM', eventName: 'Improv Leela' },
    { time: '02:00 PM - 04:00 PM', eventName: 'Reel it in' },
    { time: '02:00 PM - 04:00 PM', eventName: 'Stellar Vision' },
    { time: '12:00 PM - 02:30 PM', eventName: 'Nrityakala' },
    { time: '02:30 PM - 05:00 PM', eventName: 'Band Sound Check' },
    { time: '05:00 PM - 08:00 PM', eventName: 'Faculty Award Night' },
    { time: '09:00 PM - 10:00 PM', eventName: 'Prom Night' },
    { time: '10:00 PM - 12:00 AM', eventName: 'Band Night' },
    { time: '12:00 PM - 02:30 PM', eventName: 'Mridang' },
    { time: '02:30 PM - 05:00 PM', eventName: 'Chandrakala' },
    { time: '05:00 PM - 06:30 PM', eventName: 'Beat Brawl' },
    { time: '06:30 PM - 08:00 PM', eventName: 'Bars Mayhem' },
  ];

  const events16 = [
    { time: '9 AM - 12 AM', eventName: 'Abhinay' },
    { time: '9 AM - 12 AM', eventName: 'Stage Play (Day 2 + Day3)' },
    { time: '9 AM - 12 AM', eventName: 'Aaroh' },
    { time: '9 AM - 12 AM', eventName: 'Aaroh' },
    { time: '9 AM - 12 AM', eventName: 'Aaroh' },
    { time: '9 AM - 12 AM', eventName: 'Aaroh' },
    { time: '9 AM - 12 AM', eventName: 'Aaroh' },
    { time: '9 AM - 12 AM', eventName: 'Aaroh' },
    { time: '9 AM - 12 AM', eventName: 'Aaroh' },
    { time: '9 AM - 12 AM', eventName: 'Aaroh' },
    { time: '9 AM - 12 AM', eventName: 'Aaroh' },
    { time: '9 AM - 12 AM', eventName: 'Aaroh' },
    { time: '9 AM - 12 AM'  , eventName: 'Aaroh' },
    { time: '9 AM - 12 AM', eventName: 'Aaroh' },
    { time: '9 AM - 12 AM', eventName: 'Aaroh' },
  ];

  const events17 = [
    { time: '9 AM - 12 AM', eventName: 'Aaroh' },
    { time: '9 AM - 12 AM', eventName: 'Aaroh' },
    { time: '9 AM - 12 AM', eventName: 'Aaroh' },
    { time: '9 AM - 12 AM', eventName: 'Aaroh' },
    { time: '9 AM - 12 AM', eventName: 'Aaroh' },
    { time: '9 AM - 12 AM', eventName: 'Aaroh' },
    { time: '9 AM - 12 AM', eventName: 'Aaroh' },
    { time: '9 AM - 12 AM', eventName: 'Aaroh' },
    { time: '9 AM - 12 AM', eventName: 'Aaroh' },
    { time: '9 AM - 12 AM', eventName: 'Aaroh' },
    { time: '9 AM - 12 AM', eventName: 'Aaroh' },
    { time: '9 AM - 12 AM', eventName: 'Aaroh' },
    { time: '9 AM - 12 AM', eventName: 'Aaroh' },
    { time: '9 AM - 12 AM', eventName: 'Aaroh' },
    { time: '9 AM - 12 AM', eventName: 'Aaroh' },
  ];

  return (
    <>
        <div id ="timeline" className='TimelineHeading font-normal text-[#FFAD0E] sm:text-[8vw] text-[10vw] w-full text-center sm:pb-[5vw] pb-[10vw]'>
            Timeline
        </div>
        {events15.map((event, index) => (
            <EventItem key={index} time={event.time} eventName={event.eventName} />
        ))}
            <div className="goldenmandala animate-pulse absolute -top-[43%] rotate-180 left-[0%] w-[30%] sm:w-[20%] h-full flex justify-end">
              <Image src="goldenMandala.svg" alt="Golden Mandala" width={450} height={60} loading="lazy" />
            </div>
          <div className='flex flex-col absolute mt-[30vw] top-[6%] left-[10%] sm:top-[0%] sm:left-[10%]'>
            <div className='eventdate text-[16.5vw] sm:text-[15vw] font-normal'>15</div>
            <div className='eventmonth text-[4vw] sm:text-[3vw] font-bold text-[#FFAD0E]'>March <br></br>2024</div>
          </div>
          <Image src="Line.svg" alt="Line SVG" width={270} height={60} className='py-[4vw] sm:py-[6vw] sm:w-[50%]' loading="lazy"/>

          {/* <Image className=" items-end absolute top-[0%]" src="SideWheel.svg" alt="SideWheel SVG" width={550} height={60}/> */}
          

          {events16.map((event, index) => (
            <EventItem key={index} time={event.time} eventName={event.eventName} />
      ))}

            <div className="goldenmandala animate-pulse absolute -top-[5%] left-[70%] w-[30%] sm:w-[20%] sm:left-[80%] h-full flex justify-end">
              <Image src="goldenMandala.svg" alt="Golden Mandala" width={450} height={60} loading="lazy" />
            </div>
          <div className='flex flex-col  absolute mt-[90vw] top-[22%] left-[10%] sm:top-[10%] sm:left-[10%]'>
            <div className='eventdate text-[16.5vw] sm:text-[15vw] font-normal'>16</div>
            <div className='eventmonth text-[4vw] sm:text-[3vw] font-bold text-[#FFAD0E]'>March <br></br>2024</div>
          </div>
          <Image src="Line.svg" alt="Line SVG" width={270} height={60} className='py-[4vw] sm:py-[6vw] sm:w-[50%]' loading="lazy"/>

        {events17.map((event, index) => (
        <EventItem key={index} time={event.time} eventName={event.eventName} />
      ))}
          <div className='flex flex-col absolute mt-[160vw] top-[35%] left-[10%] sm:top-[10%] sm:left-[10%]'>
            <div className='eventdate text-[16.5vw] sm:text-[15vw] font-normal'>17</div>
            <div className='eventmonth text-[4vw] sm:text-[3vw] font-bold text-[#FFAD0E]'>March <br></br>2024</div>
          </div>    
    </>

  );
};

export default TimelineContent;

