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
    <div className='h-full w-full flex gap-20 items-center justify-center'>
      <motion.div variants={slideInFromLeft(0.5)} className='EventTime font-normal text-[#F6DFAD] text-[2vw]'>
        {time}
      </motion.div>
      <motion.div variants={slideInFromRight(0.5)} className='EventName font-normal sm:text-[2.7vw]'>
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
        <div className='TimelineHeading font-normal text-[#FFAD0E] sm:text-[8vw] text-[10vw] w-full text-center sm:pb-[5vw] pb-[10vw]'>
            Timeline
        </div>
        {events15.map((event, index) => (
            <EventItem key={index} time={event.time} eventName={event.eventName} />
        ))}
          <div className='flex flex-col absolute mt-[30vw]  top-0 left-40'>
            <div className='eventdate text-[15vw] font-normal'>15</div>
            <div className='eventmonth text-[3vw] font-bold text-[#FFAD0E]'>March <br></br>2024</div>
          </div>
          <Image src="Line.svg" alt="Line SVG" width={850} height={60} className='py-[2vw]'/>

          {/* <Image src="SideWheel.svg" alt="SideWheel SVG" width={550} height={60}/> */}
          

          {events16.map((event, index) => (
            <EventItem key={index} time={event.time} eventName={event.eventName} />
      ))}
          <div className='flex flex-col absolute mt-[90vw]  top-20 left-40'>
            <div className='eventdate text-[15vw] font-normal'>16</div>
            <div className='eventmonth text-[3vw] font-bold text-[#FFAD0E]'>March <br></br>2024</div>
          </div>
          <Image src="Line.svg" alt="Line SVG" width={850} height={60} className='py-[2vw]'/>

        {events17.map((event, index) => (
        <EventItem key={index} time={event.time} eventName={event.eventName} />
      ))}
          <div className='flex flex-col absolute mt-[160vw]  top-100 left-40'>
            <div className='eventdate text-[15vw] font-normal'>17</div>
            <div className='eventmonth text-[3vw] font-bold text-[#FFAD0E]'>March <br></br>2024</div>
          </div>    
    </>

  );
};

export default TimelineContent;

