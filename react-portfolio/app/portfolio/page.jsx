"use client"

import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: "Personal Blog",
    description: "A blog site built with MVC architecture.",
    link: "https://github.com/EdRivera016/Personal-Blog"
  },
  {
    title: "Weather App",
    description: "A web application to check the weather.",
    link: "https://github.com/EdRivera016/Weather-App"
  },
  {
    title: "README Generator",
    description: "A tool to generate professional README files.",
    link: "https://github.com/EdRivera016/README_Generator"
  },
  {
    title: "SVG Logo Maker",
    description: "An application to create SVG logos.",
    link: "https://github.com/EdRivera016/SVG-LOGO-MAKER"
  },
  {
    title: "SQL Employee Tracker",
    description: "A CLI application to manage employees.",
    link: "https://github.com/EdRivera016/SQL-Employee-Tracker"
  },
  {
    title: "Note Taker",
    description: "A web app for taking and saving notes.",
    link: "https://github.com/EdRivera016/Note-Taker"
  },
  {
    title: "ProDev Text",
    description: "A PWA text editor.",
    link: "https://github.com/EdRivera016/ProDev-Text"
  },
  {
    title: "Fist of Five",
    description: "A collaborative project to gather feedback.",
    link: "https://github.com/MarcioPimentel01/Fist-of-five"
  },
  {
    title: "Game Night Quiz",
    description: "A quiz application for game nights.",
    link: "https://github.com/MarcioPimentel01/Game-Night-Quiz"
  }
];

const Portfolio = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 0.2, duration: 0.4, ease: "easeIn" } }}
      className="portfolio-section py-12 bg-gray-100"
    >
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-semibold mb-6 text-center">Portfolio</h1>
        <div className="projects-grid grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {projects.map((project, index) => (
            <div key={index} className="project-card bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-2xl font-semibold mb-2">{project.title}</h2>
                <p className="text-lg text-gray-700 mb-4">{project.description}</p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Portfolio;