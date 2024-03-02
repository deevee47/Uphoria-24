"use client";
import * as React from "react";
import { useState } from "react"; // Import useState for dropdown state
import { Card, CardContent } from "@/components/ui/card";
import Image from 'next/image'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface CardWithImageProps {
  className?: string;
  onClick?: () => void;
  children?: React.ReactNode;
}

const CardWithImage: React.FC<CardWithImageProps> = ({ className, onClick, children}) => (
  <Card className={className} onClick={onClick}>
    <div className="relative w-full h-full rounded-xl overflow-hidden backdrop-blur-sm">
      <img src={"/goldmandela.svg"} alt="Events" className="w-full h-full object-cover" />
      <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-end p-4">
        {children}
      </div>
    </div>
  </Card>
);


export default function CarouselDemo() {
  const eventData = [
    // Events for 15th March
    { genre: "Music", eventName: "Aaroh", description: "Solo Singing Hindi", url: "https://unstop.com/o/7DkUxRt?lb=MXeqmNyn" },
    { genre: "Music", eventName: "Reverb", description: "Solo Singing English", url: "https://unstop.com/o/j1yaA9V?lb=MXeqmNyn" },
    { genre: "Film", eventName: "Page to Picture", description: "Offline Film Making", url: "https://unstop.com/o/3r2yOl7?lb=MXeqmNyn" },
    { genre: "Art", eventName: "Mandala Art", description: "Mandala Art Making", url: "https://unstop.com/o/CNiAQOc?lb=MXeqmNyn" },
    { genre: "Art", eventName: "Doodling", description: "Doodling Competition", url: "https://unstop.com/o/FNPAx6O?lb=MXeqmNyn" },
    { genre: "Art", eventName: "Sketching", description: "Art", url: "https://unstop.com/o/vl4jTfL?lb=MXeqmNyn" },
    { genre: "Theatre", eventName: "Improv Leela", description: "Improvisational Theatre", url: "https://unstop.com/o/fuQ0dKZ?lb=MXeqmNyn" },
    { genre: "Film", eventName: "Reel it in", description: "Offline Reel Making Competition", url: "https://unstop.com/o/XobaNth?lb=MXeqmNyn" },
    { genre: "Creative", eventName: "Stellar Vision", description: "Model Showcase", url: "https://unstop.com/o/3wZzcJ5?lb=MXeqmNyn" },
    { genre: "Dance", eventName: "Nrityakala", description: "Group Classical Dance", url: "https://unstop.com/o/z0SpRwd?lb=MXeqmNyn" },
    { genre: "Main Event", eventName: "Prom Night", description: "", url: ""},
    { genre: "Main Event", eventName: "Band Night", description: "", url: ""},
    { genre: "Music", eventName: "Mridang", description: "Solo Instrumental", url: "https://unstop.com/o/QRv4qfD?lb=MXeqmNyn" },
    { genre: "Dance", eventName: "Chandrakala", description: "Solo Classical Dance", url: "https://unstop.com/o/aKk7B14?lb=MXeqmNyn" },
    { genre: "Music", eventName: "Beat Brawl", description: "Beatboxing Competition", url: "https://unstop.com/o/6nkP93B?lb=MXeqmNyn" },
    { genre: "Music", eventName: "Bars Mayhem", description: "Rap Competition", url: "https://unstop.com/o/t3HBj91?lb=MXeqmNyn" },
    
    // Events for 16th March
  { genre: "Theatre", eventName: "Abhinay", description: "Mono Acting", url: "https://unstop.com/o/DsFSORf?lb=MXeqmNyn" },
  { genre: "Theatre", eventName: "Stage Play", description: "Stage Play Competition", url: "https://unstop.com/o/MtPAqg2?lb=MXeqmNyn" },
  { genre: "Art", eventName: "Canvas Painting", description: "Art", url: "https://unstop.com/o/0vbOsDk?lb=MXeqmNyn" },
  { genre: "Debate", eventName: "Quick Fire Quible", description: "Just A Minute English", url: "https://unstop.com/o/9r1yoIv?lb=MXeqmNyn" },
  { genre: "Talent Show", eventName: "Mr and Ms Uphoria", description: "Talent Show", url: "https://unstop.com/o/gPkwEU8?lb=MXeqmNyn" },
  { genre: "Debate", eventName: "Tark Taal", description: "Just A Minute Hindi", url: "https://unstop.com/o/P14tyOL?lb=MXeqmNyn" },
  { genre: "Quiz", eventName: "Collegiate Quiz", description: "Quiz", url: "https://unstop.com/o/tYoIVfK?lb=MXeqmNyn" },
  { genre: "Gaming", eventName: "BGMI", description: "Inter College Battlegrounds Mobile India (BGMI)", url: "https://unstop.com/events/bgmi-league-uphoria-2024-bennett-university-bu-greater-noida-917061?lb=MXeqmNyn"},
  { genre: "Comedy", eventName: "StandUp Comedy", description: "Hasgulla", url: "https://unstop.com/o/5JFqXMD?lb=MXeqmNyn" },
  { genre: "Creative", eventName: "Pixel Perfect", description: "Offline Graphic Designing Competition", url: "https://unstop.com/o/guNlMvW?lb=MXeqmNyn" },
  { genre: "Photography", eventName: "Impromptu Frames", description: "On The Spot Photography", url: "https://unstop.com/o/0ySR6Tf?lb=MXeqmNyn" },
  { genre: "Music", eventName: "Rockmania", description: "Battle of Bands", url: "https://unstop.com/o/xL4bGyQ?lb=MXeqmNyn" },
  { genre: "Fashion", eventName: "Supernova", description: "Fashion Show", url: "https://unstop.com/o/Q7i8ubo?lb=MXeqmNyn" },
  { genre: "Main Event", eventName: "DJ Night", description: "", url: ""},
  { genre: "Music", eventName: "War of DJs", description: "DJ War", url: "https://unstop.com/o/5n6bhXK?lb=MXeqmNyn" },

  // Events for 17th March
  //already added once{ genre: "Theatre", eventName: "Stage Play", description: "Stage Play Competition", url: "https://unstop.com/o/MtPAqg2?lb=MXeqmNyn" },
  { genre: "Dance", eventName: "Freestyle Frenzy", description: "Freestyle Street Dance Off", url: "https://unstop.com/o/aibwtkK?lb=MXeqmNyn" },
  { genre: "Theatre", eventName: "Aakrosh", description: "Nukkad-Natak", url: "https://unstop.com/o/5rfBiuj?lb=MXeqmNyn" },
  { genre: "Dance", eventName: "Groove Wars", description: "Western Group Dance Competition", url: "https://unstop.com/o/gHCojA9?lb=MXeqmNyn" },
  { genre: "Debate", eventName: "A Wizard's Measure", description: "Debate - Harry Potter Theme", url: "https://unstop.com/o/bokSIxJ?lb=MXeqmNyn" },
  { genre: "Quiz", eventName: "Weeb Quiz", description: "Anime Quiz", url: "https://unstop.com/o/jGyJetC?lb=MXeqmNyn" },
  { genre: "Gaming", eventName: "Valorant Premieare League", description: " Inter-College Valorant Showdown", url: "https://unstop.com/events/valorant-premier-league-uphoria-2024-bennett-university-bu-greater-noida-917100?lb=MXeqmNyn" },
  { genre: "Poetry", eventName: "Bardic Battles", description: "Slam Poetry English", url: "https://unstop.com/o/NV8XjR9?lb=MXeqmNyn" },
  { genre: "Poetry", eventName: "Mehfil E Alfaz", description: "Slam Poetry Hindi", url: "https://unstop.com/o/cT7iFoK?lb=MXeqmNyn" },
  { genre: "Creative", eventName: "Ad Arena", description: "Ad Mad", url: "https://unstop.com/o/HC6NZPL?lb=MXeqmNyn" },
  { genre: "Dance", eventName: "Beat Blitz", description: "Western Solo Dance", url: "https://unstop.com/o/bD9GVLw?lb=MXeqmNyn" },
  { genre: "Main Event", eventName: "Artist Night", description: "", url: "" },
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

        <div className="flex justify-center">
          <button
            className="flex bg-[#ffad0e] text-white text-xs md:text-base hover:bg-yellow-600 active:bg-yellow-700 rounded-xl p-2 cursor-pointer"
            onClick={toggleGenreMenu}
          >
            {selectedGenre}
            
            <Image className="md:w-6" src="/chevron-down.svg" alt="Dropdown" width={1} height={1} loading="lazy"/>

          </button>

        </div>
        
        {showGenreMenu && (
          <div className="absolute top-full left-1/2 transform -translate-x-1/2 bg-[#ffad0e] text-white text-xs md:text-base rounded-xl p-2 mt-1">
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

      <Carousel className="py-4 z-10">
        <CarouselContent>
          {filteredEventData.map((event, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <div className="p-1">
                <CardWithImage
                  className="w-400 h-400 border-yellow-500 rounded-xl cursor-pointer transition-transform hover:bg-[#f1cf461e] active:bg-yellow-600"
                  onClick={() => window.location.href = event.url}
                >
                  <CardContent className="flex flex-col aspect-square items-center justify-center p-6 text-center">
                    <h2 className="CardName py-2 text-2xl md:text-4xl font-extrabold mb-2 text-white">
                      {event.eventName}
                    </h2>
                    <p className="CardDesc text-sm md:text-xl font-bold text-white mb-4">{event.description}</p>
                    <button className="mt-2 bg-[#ffad0e] text-black text-xs md:text-base border border-black hover:bg-yellow-600 active:bg-yellow-700 rounded-full px-4 py-2 focus:outline-none">
                      Register
                    </button>
                  </CardContent>
                </CardWithImage>
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
