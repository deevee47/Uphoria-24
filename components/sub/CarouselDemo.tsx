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

  const [showGenreMenu, setShowGenreMenu] = useState(false);
  const [selectedGenre, setSelectedGenre] = useState("All Genres");

  const toggleGenreMenu = () => {
    setShowGenreMenu(!showGenreMenu);
  };

  const selectGenre = (genre: string) => {
    setSelectedGenre(genre);
    setShowGenreMenu(false);
  };

  const allGenres = ["All Genres", ...Array.from(new Set(eventData.map((event) => event.genre)))];

  const filteredEventData = selectedGenre === "All Genres"
    ? eventData
    : eventData.filter((event) => event.genre === selectedGenre);

  return (
    <section className="py-4 w-full max-w-64 sm:max-w-xl md:max-w-2xl lg:max-w-7xl">
      <div className="relative z-20 mx-auto text-center">
        <button
          className="bg-[#ffad0e] text-white hover:bg-yellow-600 active:bg-yellow-700 rounded-xl p-2 cursor-pointer"
          onClick={toggleGenreMenu}
        >
          {selectedGenre}
        </button>
        {showGenreMenu && (
          <div className="absolute top-full left-1/2 transform -translate-x-1/2 bg-[#ffad0e] text-white rounded-xl p-2 mt-1">
            {allGenres.map((genre, index) => (
              <div
                className="hover:bg-yellow-600 active:bg-yellow-700 rounded-xl px-1 cursor-pointer"
                key={index}
                onClick={() => selectGenre(genre as string)}
              >
                {genre}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Carousel */}
      <Carousel className="py-4 z-10">
        <CarouselContent>
          {filteredEventData.map((event, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <div className="p-1">
                <Card className="w-400 h-400 border-yellow-500 rounded-xl transition-transform hover:bg-yellow-500 active:bg-yellow-600 cursor-pointer">
                  <CardContent className="flex flex-col aspect-square items-center justify-center p-6">
                    <h2 className="py-10 text-2xl font-bold mb-2 text-white">
                      {event.eventName}
                    </h2>
                    <p className="text-white">{event.eventDesc}</p>
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