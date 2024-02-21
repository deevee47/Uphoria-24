import Image from 'next/image'
import React from 'react'

const FooterContent = () => {
  return (
    <footer className='w-full h-full relative justify-center flex'>
    <Image className=" absolute -top-[50%] left-[80%]" src="fullGoldMandala.svg" alt="Golden Mandala" width={350} height={60} />
    <div className='glass-footer flex flex-col justify-between gap-20  h-full w-[98%] bg-white-0 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-0 border border-[#FFAD0E]'>
        <div className="upperfooter flex justify-between p-[1.5vw] text-[1vw]">
            <div className='text-[#F6DFAD]'>Made with ❤️ from Uphoria's Tech Team </div>
        </div>
        <div className="lowerfooter flex justify-between p-[1.5vw] text-[1vw]">
            <div className='text-[#F6DFAD] text-[1.5vw] p-1 '>
                <div className='pb-2'>Follow us</div>
                <i className="ri-instagram-fill text-[1.5vw] bg-[#FFAD0E] text-black border-[#FFAD0E] rounded-full p-[0.5vw] mr-3"></i>
                <i className="ri-linkedin-fill text-[1.5vw] bg-[#FFAD0E] text-black border-[#FFAD0E] rounded-full p-[0.5vw] mr-3"></i>
                <i className="ri-facebook-fill text-[1.5vw] bg-[#FFAD0E] text-black border-[#FFAD0E] rounded-full p-[0.5vw] mr-3"></i>
            </div>
            <div className='bg-yellow flex flex-col'>
                <div className='flex'>
                    <div><i className="ri-map-pin-2-fill text-[1.7vw] text-[#FFAD0E] mr-2 sm:w-[100%]"></i></div>
                    <div className='text-[#F6DFAD] text-[1.1vw]'>Plot Nos 8-11, TechZone II,<br></br> Greater Noida 201310, UP. India.</div>
                </div>
                <div className='flex justify-evenly w-[110%] text-white '><a className='underline' href="https://www.bennett.edu.in/">Bennett University</a>
                     <a className='underline' href="k">Unstop</a></div>
            </div>
        </div>

    </div>
    </footer>
  )
}

export default FooterContent
