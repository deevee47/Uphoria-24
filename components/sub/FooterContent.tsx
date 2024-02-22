import Image from 'next/image'
import React from 'react'
import AnimatedTooltipPreview from '../sub/tooltip'

const FooterContent = () => {
  return (
    <footer className='w-full h-full relative justify-center flex'>
    <Image className="animate-pulse absolute  w-[60%] sm:w-[30%] -top-[40%] left-[45%] sm:-top-[55%] sm:left-[70%]" src="fullGoldMandala.svg" alt="Golden Mandala" width={350} height={60} />
    <div className='glass-footer flex flex-col justify-between gap-10 h-full w-[98%] bg-white-0 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-0 border border-[#FFAD0E]'>
        <div className="upperfooter flex justify-between p-[1.5vw] text-[2.7vw] sm:text-[1.1vw] w-fit">
            <div className='text-[#F6DFAD]'>Made with love from Uphoria&apos;s Tech Team <AnimatedTooltipPreview /> </div>
        </div>
        <div className="lowerfooter flex justify-between p-[1.5vw] text-[1vw]">
            <div className='text-[#F6DFAD] text-[4vw] sm:text-[1.5vw] p-1 '>
                <div className='pb-2'>Follow us</div>
                <i className="ri-instagram-fill text-[4.5vw] sm:text-[1.5vw] bg-[#FFAD0E] text-black border-[#FFAD0E] rounded-full p-[0.5vw] mr-3"></i>
                <i className="ri-linkedin-fill text-[4.5vw] sm:text-[1.5vw] bg-[#FFAD0E] text-black border-[#FFAD0E] rounded-full p-[0.5vw] mr-3"></i>
                <i className="ri-facebook-fill text-[4.5vw] sm:text-[1.5vw] bg-[#FFAD0E] text-black border-[#FFAD0E] rounded-full p-[0.5vw] mr-3"></i>
            </div>
            <div className='bg-yellow flex flex-col'>
                <div className='flex'>
                    <div><i className="ri-map-pin-2-fill text-[3vw] sm:text-[1.7vw] text-[#FFAD0E] mr-2 sm:w-[100%]"></i></div>
                    <div className='text-[#F6DFAD] text-[2.7vw] sm:text-[1.1vw]'>Plot Nos 8-11, TechZone II,<br></br> Greater Noida 201310, UP. India.</div>
                </div>
                <div className='flex justify-evenly w-[110%] text-white text-[2.7vw] sm:text-[1.1vw] '><a className='underline' href="https://www.bennett.edu.in/">Bennett University</a>
                     <a className='underline' href="k">Unstop</a></div>
            </div>
        </div>

    </div>
    </footer>
  )
}

export default FooterContent
