"use client";
import React from "react";
import EventsContent from "../sub/EventsContent";
import EventCards from "../sub/EventCards";
import EventsInterface from "@/interfaces/events";

type EventsArray = EventsInterface[];

const events: EventsArray = [
  {
    "Id":1,
    "EventTitle":"Lorem1",
    "EventDecription":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam iusto laboriosam at quibusdam, quidem ipsa.",
    "EventGenre":"Dance",
    "EventLink":"https://unstop.com/events/plethora-of-emotions-uphoria-x-zenevia-bennett-university-bu-greater-noida-443749"
  },
  {
    "Id":2,
    "EventTitle":"Lorem2",
    "EventDecription":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam iusto laboriosam at quibusdam, quidem ipsa.",
    "EventGenre":"Dance",
    "EventLink":"https://unstop.com/events/plethora-of-emotions-uphoria-x-zenevia-bennett-university-bu-greater-noida-443749"
  },
  {
    "Id":3,
    "EventTitle":"Lorem3",
    "EventDecription":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam iusto laboriosam at quibusdam, quidem ipsa.",
    "EventGenre":"Dance",
    "EventLink":"https://unstop.com/events/plethora-of-emotions-uphoria-x-zenevia-bennett-university-bu-greater-noida-443749"
  },
  {
    "Id":4,
    "EventTitle":"Lorem4",
    "EventDecription":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam iusto laboriosam at quibusdam, quidem ipsa.",
    "EventGenre":"Music",
    "EventLink":"https://unstop.com/events/plethora-of-emotions-uphoria-x-zenevia-bennett-university-bu-greater-noida-443749"
  },

  {
    "Id":5,
    "EventTitle":"Lorem5",
    "EventDecription":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam iusto laboriosam at quibusdam, quidem ipsa.",
    "EventGenre":"Music",
    "EventLink":"https://unstop.com/events/plethora-of-emotions-uphoria-x-zenevia-bennett-university-bu-greater-noida-443749"
  },

  {
    "Id":6,
    "EventTitle":"Lorem6",
    "EventDecription":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam iusto laboriosam at quibusdam, quidem ipsa.",
    "EventGenre":"Music",
    "EventLink":"https://unstop.com/events/plethora-of-emotions-uphoria-x-zenevia-bennett-university-bu-greater-noida-443749"
  },
]

const FAQ = () => {
  return (
    <div className='relative flex flex-col items-center justify-center h-full w-full'>      
      <EventCards events={events}/>
    </div>
  );
};

export default FAQ;
