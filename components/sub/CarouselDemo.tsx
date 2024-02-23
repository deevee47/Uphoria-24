"use client";
import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function CarouselDemo() {
  const eventData = [
    {
      genre: "",
      eventName: "Event 1",
      eventDesc: "Description for Event 1",
      category: "Solo",
    },
    {
      genre: "",
      eventName: "Event 2",
      eventDesc: "Description for Event 2",
      category: "Team",
    },
    {
      genre: "",
      eventName: "Event 3",
      eventDesc: "Description for Event 3",
      category: "Solo",
    },
    {
      genre: "",
      eventName: "Event 4",
      eventDesc: "Description for Event 4",
      category: "Team",
    },
    {
      genre: "",
      eventName: "Event 5",
      eventDesc: "Description for Event 5",
      category: "Solo",
    },
    // Add more event data as needed
  ];

  return (
    <section className="flex justify-center">
      <Carousel className="container">
        <CarouselContent>
          {eventData.map((event, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <div className="p-1">
                <Card className="border-yellow-500 rounded-xl transition-transform hover:bg-yellow-500">
                  <CardContent className="flex flex-col items-center justify-center p-6">
                    <h2 className="py-10 text-2xl font-bold mb-2 text-white">
                      {event.eventName}
                    </h2>
                    <p className="mb-2 text-white">{event.eventDesc}</p>
                    <span className="text-white">{event.category}</span>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="border-yellow-500" />
        <CarouselNext className="border-yellow-500" />
      </Carousel>
    </section>
  );
}
