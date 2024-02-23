"use client";
import * as React from "react";
import { useState } from "react"; // Import useState for dropdown state
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
      genre: "Music",
      eventName: "Event 1",
      eventDesc: "Description for Event 1",
      category: "Solo",
    },
    {
      genre: "Dance",
      eventName: "Event 2",
      eventDesc: "Description for Event 2",
      category: "Team",
    },
    {
      genre: "Dance",
      eventName: "Event 3",
      eventDesc: "Description for Event 3",
      category: "Solo",
    },
    {
      genre: "Dance",
      eventName: "Event 4",
      eventDesc: "Description for Event 4",
      category: "Team",
    },
    {
      genre: "Dance",
      eventName: "Event 5",
      eventDesc: "Description for Event 5",
      category: "Solo",
    },
    {
      genre: "Comedy",
      eventName: "Event 6",
      eventDesc: "Description for Event 6",
      category: "Solo",
    },

    // Add more event data as needed
  ];

  // Add state for the selected genre
  const [selectedGenre, setSelectedGenre] = useState(""); // Initially no genre selected

  // Filter eventData based on selected genre
  const filteredEventData = selectedGenre
    ? eventData.filter((event) => event.genre === selectedGenre)
    : eventData;

  return (
    <section className="">
      {/* Dropdown menu */}
      <div className="mb-4 flex justify-center">
        <select
          value={selectedGenre}
          onChange={(event) => setSelectedGenre(event.target.value)}
          className="text-yellow-500 bg-transparent border border-yellow-500 rounded-xl px-3 py-2"
        >
          <option value="">All Genres</option>
          {Array.from(new Set(eventData.map((event) => event.genre))).map(
            (genre) => (
              <option key={genre} value={genre}>
                {genre}
              </option>
            )
          )}
        </select>
      </div>

      <Carousel className="">
        <CarouselContent>
          {filteredEventData.map((event, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <div className="p-1">
                <Card className="backdrop-blur border-yellow-500 rounded-xl transition-transform hover:bg-yellow-500">
                  <CardContent className="flex flex-col aspect-square items-center justify-center p-6">
                    <h2 className="py-10 text-2xl font-bold mb-2 text-white">
                      {event.eventName}
                    </h2>
                    <p className=" text-white">{event.eventDesc}</p>
                    <span className="text-white">{event.category}</span>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="border-yellow-500 text-white hover:text-yellow-200" />
        <CarouselNext className="border-yellow-500 text-white hover:text-yellow-200" />
      </Carousel>
    </section>
  );
}
