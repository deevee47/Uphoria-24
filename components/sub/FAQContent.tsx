"use client";
import React from 'react'
import {motion} from 'framer-motion'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
  
 /* eslint-disable */
const FAQContent = () => {
  return (
        <motion.div initial= "hidden" animate= "visible" className='h-full w-full flex flex-col items-center md:justify-center mb-[5vw]'>
            <div id="contact" className='contact-us w-full flex flex-col md:justify-center text-center items-center py-[14vw]'>
                <h1 className='contact-us-header text-[#FFAD0E] text-[6vw]  sm:text-[3.5vw]'>CONTACT US</h1>
                <div className='contact-us-text flex justify-center text-[#F6DFAD] sm:text-[2vw] text-[3vw] max-w-[70%] pt-[2vw] pb-[1.5vw]'>If you have any questions, feel free to reach out to us! We&apos;ll make sure to reach back to you as soon as possible. Be sure to check out FAQ section in case we already have some answers!</div>
                <div className='contact-us-mails text-[#F6DFAD] sm:text-[2vw] text-[3vw] font-bold underline'><a href="mailto:support@bu-fest.in">support@bu-fest.in</a><br></br><a href="mailto:uphoria.zenevia@bennett.edu.in">uphoria.zenevia@bennett.edu.in</a></div>
            </div>
            <div id="faqs" className='FAQHeading text-[5.8vw] sm:text-[4vw] text-[#FFAD0E] font-normal w-full text-center'>
                FREQUENTLY ASKED QUESTIONS
                <div className='faq-accordion w-[70%] sm:w-[50%] m-auto text-[3vw] sm:text-[1.5vw] text-left py-[10vw]'>
                    <Accordion type="single" collapsible className="w-full">
                        <AccordionItem value="item-1">
                            <AccordionTrigger>Will the university be providing us accommodations?</AccordionTrigger>
                            <AccordionContent>
                            Yes! Your safe stay will be ensured if your event requires it by the university which will be payable by you at a fair cost.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-2">
                            <AccordionTrigger>Can I participate in multiple events?</AccordionTrigger>
                            <AccordionContent>
                            Yes! It is completely alright for you to participate in any number of events you&apos;d like to, as long as their timelines don&apos;t crash. Be sure to get registered ASAP!
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-3">
                            <AccordionTrigger>What is the eligibility criteria for registration?</AccordionTrigger>
                            <AccordionContent>
                            While Eligibility varies form event to event, students in 10+2 or equivalent grade and students currently pursuing undergraduate course in any discipline are eligible for most of the listed events.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-4">
                            <AccordionTrigger>How can I pay the registration fee?</AccordionTrigger>
                            <AccordionContent>
                            The payment can be made through credit/debit card, UPI or Wallet , through the link mentioned in Unstop&apos;s description.
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>
            </div>
        </motion.div>
  )
}
 /* eslint-enable */
export default FAQContent
