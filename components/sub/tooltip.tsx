"use client";
import React from "react";
import { AnimatedTooltip } from "../ui/animated-tooltip";
const people = [
  {
    id: 1,
    name: "John Doe",
    designation: "Software Engineer",
    image:
      "/dv.jpg",
  },
  {
    id: 2,
    name: "Robert Johnson",
    designation: "Product Manager",
    image:
    "/dv.jpg"
  },
  {
    id: 3,
    name: "Jane Smith",
    designation: "Data Scientist",
    image:
    "/dv.jpg"
  },
  {
    id: 4,
    name: "Emily Davis",
    designation: "UX Designer",
    image:
    "/dv.jpg"
  },
  {
    id: 5,
    name: "Tyler Durden",
    designation: "Soap Developer",
    image:
    "/dv.jpg"
  },
  {
    id: 6,
    name: "Divyansh Vishwakarma",
    designation: "Full-Stack Developer",
    image:
    "/dv.jpg"
  },
];

export function AnimatedTooltipPreview() {
  return (
    <div className="flex flex-row items-center justify-center mb-10 w-full">
      <AnimatedTooltip items={people} />
    </div>
  );
}

export default AnimatedTooltipPreview;