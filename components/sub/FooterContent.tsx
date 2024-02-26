import Image from 'next/image'
import React from 'react'
import AnimatedTooltipPreview from '../sub/tooltip'

const FooterContent = () => {
  return (
    <footer className='w-full h-full relative justify-center flex pb-[2vw] sm:pb-0'>
    <Image className="animate-pulse absolute  w-1/2 sm:w-[26.5%] -top-[50%] left-[50%] sm:-top-[65%] sm:left-[75%]" src="fullGoldMandala.svg" alt="Golden Mandala" width={250} height={30} loading="lazy"/>
    <div className='glass-footer flex flex-col  gap-5 justify-between h-[50%] w-[95%] bg-black/50 rounded-xl bg-clip-padding backdrop-filter backdrop-blur-md border border-[#FFAD0E]'>
        <div className="upperfooter flex justify-end p-[1.5vw] text-[2.7vw] sm:text-[1.1vw]">
            <div className='text-[#F6DFAD]'>Made with ❤️ from Uphoria&apos;s Tech Team <AnimatedTooltipPreview /> </div>
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
                <div className='flex justify-evenly pl-[1vw] w-[100%] text-white text-[2.7vw] sm:text-[1.1vw] '><a className='underline' href="https://www.bennett.edu.in/">Bennett University</a>
                     <a className='underline' href="k">Unstop</a></div>
            </div>
        </div>

    </div>
    </footer>
  )
}
export default FooterContent
