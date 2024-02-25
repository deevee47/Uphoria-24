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
    <div className='group h-full w-full flex gap-10 sm:gap-20 pl-[10vw] items-center justify-center  animate-underline'>
      <motion.div variants={slideInFromLeft(0.5)} className='EventTime  w-[50%] flex items-center justify-end group-hover:drop-shadow-[0_0px_2px_#F6DFAD] text-[#F6DFAD] text-[3.5vw] sm:text-[2vw] group-hover:sm:text-[2.2vw] group-hover:stroke-current group-hover:underline animate-underline underline-offset-4'>
        {time}
      </motion.div>
      <motion.div variants={slideInFromRight(0.5)} className='EventName w-[50%] flex items-center justify-start group-hover:drop-shadow-[0_0px_2px_#58220] text-[4vw] sm:text-[2.5vw] group-hover:sm:text-[2.7vw] group-hover:stroke-current group-hover:underline animate-underline underline-offset-4'>
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
    { time: '12:00 PM - 02:00 PM', eventName: 'Abhinay' },
    { time: '2:00 PM - 06:00 PM', eventName: 'Stage Play (Day 2 + Day3)' },
    { time: '4:00 PM - 06:00 PM', eventName: 'Canvas Painting' },
    { time: '4:00 PM - 06:00 PM', eventName: 'Clay Art' },
    { time: '12:00 PM - 01:30 PM', eventName: 'Quick Fire Quible' },
    { time: '1:30 PM - 03:00 PM', eventName: 'Tark Taal' },
    { time: '3:00 PM - 04:30 PM', eventName: 'Collegiate Quiz' },
    { time: '11:00 AM - 04:00 PM', eventName: 'BGMI' },
    { time: '4:00 PM - 09:00 PM', eventName: 'CODM' },
    { time: '3:00 PM - 04:00 PM', eventName: 'StandUp Comedy' },
    { time: '12:00 PM - 03:00 PM', eventName: 'Pixel Perfect' },
    { time: '12:00 PM - 06:00 PM', eventName: 'Impromptu Frames' },
    { time: '11:00 AM - 05:00 PM', eventName: 'Rockmania' },
    { time: '5:00 PM - 10:00 PM', eventName: 'Supernova' },
    { time: '10:00 PM - 12:00 AM', eventName: 'DJ Night' },
    { time: '2:00 PM - 06:00 PM', eventName: 'War of DJs' },
  ];

  const events17 = [
    { time: '11:00 AM - 06:00 PM', eventName: 'Stage Play (Day 2 + Day3)' },
    { time: '11:00 AM - 01:00 PM', eventName: 'Freestyle Frenzy' },
    { time: '12:00 PM - 03:30 PM', eventName: 'Aakrosh' },
    { time: '02:00 PM - 04:00 PM', eventName: "A Wizard's Measure" },
    { time: '02:00 PM - 03:00 PM', eventName: 'Weeb Quiz' },
    { time: '11:00 AM - 06:00 PM', eventName: 'Valorant Premieare League' },
    { time: '11:00 AM - 01:00 PM', eventName: 'Bardik Battles' },
    { time: '01:00 PM - 03:00 PM', eventName: 'Mehfil E Alfaz' },
    { time: '04:00 PM - 06:00 PM', eventName: 'Ad Arena' },
    { time: '09:00 PM - 11:00 PM', eventName: 'Main Artist' },
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

