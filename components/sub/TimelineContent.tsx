import React from 'react'
import {motion} from 'framer-motion'
import { slideInFromLeft, slideInFromRight } from '@/utils/motion'
import Image from 'next/image';

interface EventItemProps {
  time: string;
  eventName: string;
  url: string;
}

const EventItem: React.FC<EventItemProps> = ({ time, eventName, url }) => {
  return (
    <div className='group h-full w-full flex gap-10 sm:gap-20 pl-[4vw] items-center justify-center  animate-underline'>

      <motion.div variants={slideInFromLeft(0.5)} className='EventTime w-[50%] flex items-center justify-end group-hover:drop-shadow-[0_0px_2px_#F6DFAD] text-[#F6DFAD] text-[3.5vw] sm:text-[2vw] group-hover:sm:text-[2.2vw] group-hover:stroke-current group-hover:underline animate-underline underline-offset-4'>
      <a href={url}>{time}</a>
      </motion.div>

      <motion.div variants={slideInFromRight(0.5)} className='EventName w-[50%] flex items-center justify-start group-hover:drop-shadow-[0_0px_2px_#58220] text-[4vw] sm:text-[2.5vw] group-hover:sm:text-[2.7vw] group-hover:stroke-current group-hover:underline animate-underline underline-offset-4'>
      <a href={url}>{eventName}</a>
      </motion.div>
    </div>
  );
};

const TimelineContent: React.FC = () => {

  const events15 = [
    { time: '12:00 PM - 03:00 PM', eventName: 'Aaroh',  url: 'https://unstop.com/o/7DkUxRt?lb=MXeqmNyn'},
    { time: '03:00 PM - 06:00 PM', eventName: 'Reverb',  url: 'https://unstop.com/o/j1yaA9V?lb=MXeqmNyn'},
    { time: '12:00 PM - 05:00 PM', eventName: 'Page to Picture',  url: 'https://unstop.com/o/3r2yOl7?lb=MXeqmNyn'},
    { time: '12:00 PM - 02:00 PM', eventName: 'Mandala Art',  url: 'https://unstop.com/o/CNiAQOc?lb=MXeqmNyn'},
    { time: '02:00 PM - 04:00 PM', eventName: 'Doodling',  url: 'https://unstop.com/o/FNPAx6O?lb=MXeqmNyn'},
    { time: '04:00 PM - 06:00 PM', eventName: 'Sketching',  url: 'https://unstop.com/o/vl4jTfL?lb=MXeqmNyn'},


    { time: '12:00 PM - 06:00 PM', eventName: 'FIFA'},

    { time: '12:00 PM - 03:00 PM', eventName: 'Improv Leela',  url: 'https://unstop.com/o/fuQ0dKZ?lb=MXeqmNyn'},
    { time: '02:00 PM - 04:00 PM', eventName: 'Reel it in',  url: 'https://unstop.com/o/XobaNth?lb=MXeqmNyn'},
    { time: '02:00 PM - 04:00 PM', eventName: 'Stellar Vision',  url: 'https://unstop.com/o/3wZzcJ5?lb=MXeqmNyn'},
    { time: '12:00 PM - 02:30 PM', eventName: 'Nrityakala',  url: 'https://unstop.com/o/z0SpRwd?lb=MXeqmNyn'},

    { time: '09:00 PM - 10:00 PM', eventName: 'Prom Night'},
    { time: '10:00 PM - 12:00 AM', eventName: 'Band Night'},
    { time: '12:00 PM - 02:30 PM', eventName: 'Mridang',  url: 'https://unstop.com/o/QRv4qfD?lb=MXeqmNyn'},
    { time: '02:30 PM - 05:00 PM', eventName: 'Chandrakala',  url: 'https://unstop.com/o/aKk7B14?lb=MXeqmNyn'},

    { time: '02:30 PM - 05:00 PM', eventName: 'Band Sound Check'},
    { time: '05:00 PM - 08:00 PM', eventName: 'Faculty Award Night'},
    { time: '09:00 PM - 10:00 PM', eventName: 'Prom Night'},
    { time: '10:00 PM - 12:00 AM', eventName: 'Band Night'},
    { time: '12:00 PM - 02:30 PM', eventName: 'Mridang',  url: 'https://unstop.com/o/QRv4qfD?lb=MXeqmNyn'},
    { time: '02:30 PM - 05:00 PM', eventName: 'Chandrakala',  url: 'https://unstop.com/o/QRv4qfD?lb=MXeqmNyn'},
    { time: '05:00 PM - 06:30 PM', eventName: 'Beat Brawl',  url: 'https://unstop.com/o/6nkP93B?lb=MXeqmNyn'},
    { time: '06:30 PM - 08:00 PM', eventName: 'Bars Mayhem',  url: 'https://unstop.com/o/t3HBj91?lb=MXeqmNyn'},
  ];

  const events16 = [
    { time: '12:00 PM - 02:00 PM', eventName: 'Abhinay',  url: 'https://unstop.com/o/DsFSORf?lb=MXeqmNyn'},
    { time: '2:00 PM - 06:00 PM', eventName: 'Stage Play',  url: 'https://unstop.com/o/MtPAqg2?lb=MXeqmNyn'},
    { time: '4:00 PM - 06:00 PM', eventName: 'Canvas Painting',  url: 'https://unstop.com/o/0vbOsDk?lb=MXeqmNyn'},
    { time: '2:00 PM - 06:00 PM', eventName: 'Stage Play (Day 2 + Day3)',  url: 'https://unstop.com/o/MtPAqg2?lb=MXeqmNyn'},
    { time: '4:00 PM - 06:00 PM', eventName: 'Canvas Painting',  url: 'https://unstop.com/o/0vbOsDk?lb=MXeqmNyn'},
    { time: '4:00 PM - 06:00 PM', eventName: 'Clay Art'},
    { time: '12:00 PM - 01:30 PM', eventName: 'Quick Fire Quible',  url: 'https://unstop.com/o/9r1yoIv?lb=MXeqmNyn'},
    { time: '12:00 PM - 02:00 PM', eventName: 'Mr and Ms Uphoria',  url: 'https://unstop.com/o/gPkwEU8?lb=MXeqmNyn'},
    { time: '1:30 PM - 03:00 PM', eventName: 'Tark Taal',  url: 'https://unstop.com/o/P14tyOL?lb=MXeqmNyn'},
    { time: '3:00 PM - 04:30 PM', eventName: 'Collegiate Quiz',  url: 'https://unstop.com/o/tYoIVfK?lb=MXeqmNyn'},
    { time: '11:00 AM - 04:00 PM', eventName: 'BGMI'},
    { time: '4:00 PM - 09:00 PM', eventName: 'CODM'},
    { time: '3:00 PM - 04:00 PM', eventName: 'StandUp Comedy',  url: 'https://unstop.com/o/5JFqXMD?lb=MXeqmNyn'},
    { time: '12:00 PM - 03:00 PM', eventName: 'Pixel Perfect',  url: 'https://unstop.com/o/guNlMvW?lb=MXeqmNyn'},
    { time: '12:00 PM - 06:00 PM', eventName: 'Impromptu Frames',  url: 'https://unstop.com/o/0ySR6Tf?lb=MXeqmNyn'},
    { time: '11:00 AM - 05:00 PM', eventName: 'Rockmania',  url: 'https://unstop.com/o/xL4bGyQ?lb=MXeqmNyn'},
    { time: '5:00 PM - 10:00 PM', eventName: 'Supernova',  url: 'https://unstop.com/o/Q7i8ubo?lb=MXeqmNyn'},
    { time: '10:00 PM - 12:00 AM', eventName: 'DJ Night'},
    { time: '2:00 PM - 06:00 PM', eventName: 'War of DJs',  url: 'https://unstop.com/o/5n6bhXK?lb=MXeqmNyn'},
  ];

  const events17 = [
    { time: '11:00 AM - 06:00 PM', eventName: 'Stage Play', url: 'https://unstop.com/o/MtPAqg2?lb=MXeqmNyn'},
    { time: '11:00 AM - 06:00 PM', eventName: 'Stage Play (Day 2 + Day3)', url: 'https://unstop.com/o/MtPAqg2?lb=MXeqmNyn'},
    { time: '11:00 AM - 01:00 PM', eventName: 'Freestyle Frenzy', url: 'https://unstop.com/o/aibwtkK?lb=MXeqmNyn'},
    { time: '12:00 PM - 03:30 PM', eventName: 'Aakrosh', url: 'https://unstop.com/o/5rfBiuj?lb=MXeqmNyn'},
    { time: '01:30 PM - 03:30 PM', eventName: 'Groove Wars', url: 'https://unstop.com/o/gHCojA9?lb=MXeqmNyn'},
    { time: '02:00 PM - 04:00 PM', eventName: "A Wizard's Measure", url: 'https://unstop.com/o/bokSIxJ?lb=MXeqmNyn'},
    { time: '02:00 PM - 03:00 PM', eventName: 'Weeb Quiz', url: 'https://unstop.com/o/jGyJetC?lb=MXeqmNyn'},
    { time: '11:00 AM - 06:00 PM', eventName: 'Valorant Premieare League'},
    { time: '11:00 AM - 01:00 PM', eventName: 'Bardik Battles', url: 'https://unstop.com/o/NV8XjR9?lb=MXeqmNyn'},
    { time: '01:00 PM - 03:00 PM', eventName: 'Mehfil E Alfaz', url: 'https://unstop.com/o/cT7iFoK?lb=MXeqmNyn'},
    { time: '04:00 PM - 06:00 PM', eventName: 'Ad Arena', url: 'https://unstop.com/o/HC6NZPL?lb=MXeqmNyn'},
    { time: '04:00 PM - 06:00 PM', eventName: 'Beat Blitz', url: 'https://unstop.com/o/bD9GVLw?lb=MXeqmNyn'},
    { time: '09:00 PM - 11:00 PM', eventName: 'Artist Night', url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'},
    { time: '09:00 PM - 11:00 PM', eventName: 'Main Artist', url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'},
  ];

  return (
    <>
        <div id ="timeline" className=' TimelineHeading font-normal text-[#FFAD0E] sm:text-[8vw] text-[10vw] w-full text-center sm:pb-[5vw] pb-[46vw]'>
            Timeline
        </div>
        {events15.map((event, index) => (
            <EventItem key={index} time={event.time} eventName={event.eventName} url={event.url || "javascript:void(0)"} />
        ))}
            <div className="goldenmandala animate-pulse absolute -top-[43%] rotate-180 left-[0%] w-[30%] sm:w-[20%] h-full flex justify-end">
              <Image src="goldenMandala.svg" alt="Golden Mandala" width={450} height={60} loading="lazy" />
            </div>
          <div className='flex flex-col absolute mt-[30vw] -top-[2.5%] left-[44.5%] sm:top-[3%] sm:left-[10%]'>
            <div className='eventdate text-[16.5vw] sm:text-[15vw] font-normal'>15</div>
            <div className='eventmonth text-[4vw] sm:text-[3vw] font-bold text-[#FFAD0E] text-center sm:text-left'>March <br></br>2024</div>
          </div>
          <Image src="Line.svg" alt="Line SVG" width={270} height={60} className='pb-[50vw] sm:pb[0vw] py-[4vw] sm:py-[6vw] sm:w-[50%]' loading="lazy"/>

          

          {events16.map((event, index) => (
            <EventItem key={index} time={event.time} eventName={event.eventName} url={event.url || "javascript:void(0)"} />
      ))}

            <div className="goldenmandala animate-pulse absolute -top-[5%] left-[70%] w-[30%] sm:w-[20%] sm:left-[80%] h-full flex justify-end">
              <Image src="goldenMandala.svg" alt="Golden Mandala" width={450} height={60} loading="lazy" />
            </div>
          <div className='flex flex-col  absolute mt-[90vw] top-[20%] left-[44.5%] sm:top-[12%] sm:left-[10%]'>
            <div className='eventdate text-[16.5vw] sm:text-[15vw] font-normal'>16</div>
            <div className='eventmonth text-[4vw] sm:text-[3vw] font-bold text-[#FFAD0E] text-center sm:text-left'>March <br></br>2024</div>
          </div>
          <Image src="Line.svg" alt="Line SVG" width={270} height={60} className='pb-[50vw] sm:pb[0vw] py-[4vw] sm:py-[6vw] sm:w-[50%]' loading="lazy"/>

        {events17.map((event, index) => (
        <EventItem key={index} time={event.time} eventName={event.eventName} url={event.url || "javascript:void(0)"} />
      ))}
          <div className='flex flex-col absolute mt-[160vw] top-[40%] left-[44.5%] sm:top-[10%] sm:left-[10%]'>
            <div className='eventdate text-[16.5vw] sm:text-[15vw] font-normal'>17</div>
            <div className='eventmonth text-[4vw] sm:text-[3vw] font-bold text-[#FFAD0E] text-center sm:text-left'>March <br></br>2024</div>
          </div>    
    </>

  );
};

export default TimelineContent;

