"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { BsArrowUpRight, BsGithub } from "react-icons/bs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSliderBtns";

const projects = [
  {
    num: "01",
    category: "frontend",
    title: "Personal Blog",
    description: "A blog site built with MVC architecture.",
    stack: [{ name: "HTML5" }, { name: "CSS3" }, { name: "JavaScript" }],
    image: "/assets/work/PERSONALBLOG.png",
    live: "https://edrivera016.github.io/Personal-Blog/",
    github: "https://github.com/EdRivera016/Personal-Blog",
  },
  {
    num: "02",
    category: "frontend",
    title: "Weather App",
    description: "A web application to check the weather.",
    stack: [{ name: "React" }, { name: "API" }, { name: "CSS" }],
    image: "/assets/work/WEATHERAPP.png",
    live: "https://edrivera016.github.io/Weather-App/",
    github: "https://github.com/EdRivera016/Weather-App",
  },
  {
    num: "03",
    category: "backend",
    title: "SQL Employee Tracker",
    description: "A CLI application to manage employees.",
    stack: [{ name: "Node.js" }, { name: "SQL" }, { name: "CLI" }],
    image: "/assets/work/SQLEMPLOYEETRACKER.png",
    github: "https://github.com/EdRivera016/SQL-Employee-Tracker",
  },
  {
    num: "04",
    category: "frontend",
    title: "Task Manager",
    description: "A web app for managing tasks and to-dos.",
    stack: [{ name: "Express" }, { name: "Node.js" }, { name: "HTML5" }],
    image: "/assets/work/TASKMANAGER.png",
    live: "https://edrivera016.github.io/Task-Manager/",
    github: "https://github.com/EdRivera016/Task-Manager",
  },
  {
    num: "05",
    category: "frontend",
    title: "ProDev Text",
    description: "A PWA text editor.",
    stack: [{ name: "PWA" }, { name: "IndexedDB" }, { name: "JavaScript" }],
    image: "/assets/work/JATE.png",
    github: "https://github.com/EdRivera016/ProDev-Text",
  },
  {
    num: "06",
    category: "frontend",
    title: "Game Night Quiz",
    description: "A quiz application for game nights.",
    stack: [{ name: "React" }, { name: "API" }, { name: "CSS" }],
    image: "/assets/work/GAMENIGHTQUIZ.png",
    live: "https://marciopimentel01.github.io/Game-Night-Quiz/",
    github: "https://github.com/MarcioPimentel01/Game-Night-Quiz",
  },
];

const Work = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    const currentIndex = swiper.activeIndex;
    setProject(projects[currentIndex]);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.category} project
              </h2>
              <p className="text-white/60">{project.description}</p>
              <ul className="flex gap-4">
                {project.stack.map((item, index) => (
                  <li key={index} className="text-xl text-accent">
                    {item.name}
                    {index !== project.stack.length - 1 && ","}
                  </li>
                ))}
              </ul>
              <div className="border border-white/20"></div>
              <div className="flex items-center gap-4">
                <Link href={project.live || "#"}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                <Link href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => (
                <SwiperSlide key={index} className="w-full">
                  <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                    <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                    <div className="relative w-full h-full">
                      <Image
                        src={project.image}
                        fill
                        className="object-cover"
                        alt={project.title}
                      />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
              <WorkSliderBtns
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;
