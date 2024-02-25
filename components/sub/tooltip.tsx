"use client";
import React from "react";
import { AnimatedTooltip } from "../ui/animated-tooltip";
const people = [
  {
    id: 1,
    name: "John Doe",
    designation: "Software Engineer",
    image:
      "/dp/mann.jpg",
  },
  {
    id: 2,
    name: "Robert Johnson",
    designation: "Product Manager",
    image:
    "/dp/mann.jpg"
  },
  {
    id: 3,
    name: "Garvit",
    designation: "UI/UX Designer",
    image:
    "/dp/mann.jpg"
  },
  {
    id: 4,
    name: "Hardik Jain",
    designation: "UI/UX Designer",
    image:
    "/dp/dv.jpg"
  },
  {
    id: 5,
    name: "Mann Acharya",
    designation: "ML Engineer",
    image:
    "/dp/mann.jpg"
  },
  {
    id: 6,
    name: "Divyansh Vishwakarma",
    designation: "Full-Stack Developer",
    image:
    "/dp/dv.jpg"
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