"use client";
import React from "react";
import { AnimatedTooltip } from "../ui/animated-tooltip";
const people = [
  {
    id: 1,
    name: "Divyansh Vishwakarma",
    designation: "Full-Stack Developer",
    image:
    "/dp/dv.jpg",
    url:"https://www.linkedin.com/in/divyansh-vishwakarma-190bb4273/",
  },
  {
    id: 2,
    name: "Mann Acharya",
    designation: "ML Engineer",
    image:
    "/dp/mann.jpg",
    url:"https://www.linkedin.com/in/mann-acharya/",
  },
  {
    id: 3,
    name: "Hardik Jain",
    designation: "UI/UX Designer",
    image:
    "/dp/hardik.jpg",
    url:"https://www.linkedin.com/in/hardik-jain-a86531247/",
  },
  {
    id: 4,
    name: "Garvit Sharma",
    designation: "UI/UX Designer",
    image:
    "/dp/garvit.jpg",
    url:"https://www.linkedin.com/in/garvitsharma1/",
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
