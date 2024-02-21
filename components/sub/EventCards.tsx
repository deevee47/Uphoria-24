import React, { useState, useEffect } from "react";
import Head from "next/head";

import EventsInterface from "@/interfaces/events";

type EventsArray = EventsInterface[];

const EventCards: React.FC<{ events: EventsArray }> = ({ events }) => {

  return (
    <div className="container mx-auto px-4">
      <Head>
        <title>Event Cards</title>
        <link rel="stylesheet" href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css" />
      </Head>
      <div className="event-cards-container overflow-x-scroll scroll-snap-x snap-mandatory snap">
        <div className="event-card-wrapper flex flex-row snap-destination">
          {events.map((event: EventsInterface) => (
            <div
              key={event.Id}
              className="event-card flex flex-col justify-center items-center p-4 m-2 bg-white rounded-lg shadow-md snap-item"
             
            >
              <h2>{event.EventTitle}</h2>
              <p>{event.EventDecription}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EventCards;
