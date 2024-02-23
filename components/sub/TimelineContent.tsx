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
    <div className='h-full w-full flex gap-10 sm:gap-20 items-center justify-center'>
      <motion.div variants={slideInFromLeft(0.5)} className='EventTime font-normal text-[#F6DFAD] text-[2.5vw]'>
        {time}
      </motion.div>
      <motion.div variants={slideInFromRight(0.5)} className='EventName font-normal sm:text-[3.5vw]'>
        {eventName}
      </motion.div>
    </div>
  );
};

const TimelineContent: React.FC = () => {

  const events15 = [
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

  const events16 = [
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
              <Image src="goldenMandala.svg" alt="Golden Mandala" width={450} height={60} />
            </div>
          <div className='flex flex-col absolute mt-[30vw] top-[6%] left-[10%] sm:top-[0%] sm:left-[10%]'>
            <div className='eventdate text-[16vw] sm:text-[15vw] font-normal'>15</div>
            <div className='eventmonth text-[3.5vw] sm:text-[3vw] font-bold text-[#FFAD0E]'>March <br></br>2024</div>
          </div>
          <Image src="Line.svg" alt="Line SVG" width={270} height={60} className='py-[4vw] sm:py-[2vw] sm:w-[50%]'/>

          {/* <Image className=" items-end absolute top-[0%]" src="SideWheel.svg" alt="SideWheel SVG" width={550} height={60}/> */}
          

          {events16.map((event, index) => (
            <EventItem key={index} time={event.time} eventName={event.eventName} />
      ))}

            <div className="goldenmandala animate-pulse absolute -top-[5%] left-[70%] w-[30%] sm:w-[20%] sm:left-[80%] h-full flex justify-end">
              <Image src="goldenMandala.svg" alt="Golden Mandala" width={450} height={60} />
            </div>
          <div className='flex flex-col  absolute mt-[90vw] top-[16%] left-[10%] sm:top-[10%] sm:left-[10%]'>
            <div className='eventdate text-[16vw] sm:text-[15vw] font-normal'>16</div>
            <div className='eventmonth text-[3.5vw] sm:text-[3vw] font-bold text-[#FFAD0E]'>March <br></br>2024</div>
          </div>
          <Image src="Line.svg" alt="Line SVG" width={270} height={60} className='py-[4vw] sm:py-[2vw] sm:w-[50%]'/>

        {events17.map((event, index) => (
        <EventItem key={index} time={event.time} eventName={event.eventName} />
      ))}
          <div className='flex flex-col absolute mt-[160vw] top-[26%] left-[10%] sm:top-[10%] sm:left-[10%]'>
            <div className='eventdate text-[16vw] sm:text-[15vw] font-normal'>17</div>
            <div className='eventmonth text-[3.5vw] sm:text-[3vw] font-bold text-[#FFAD0E]'>March <br></br>2024</div>
          </div>    
    </>

  );
};

export default TimelineContent;

