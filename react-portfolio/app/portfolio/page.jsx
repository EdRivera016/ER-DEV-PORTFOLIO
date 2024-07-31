// app/portfolio/page.jsx
import React from 'react';

const projects = [
  {
    title: "Project 1",
    description: "Description of project 1.",
    link: "https://github.com/username/project1"
  },
  {
    title: "Project 2",
    description: "Description of project 2.",
    link: "https://github.com/username/project2"
  }
];

const Portfolio = () => {
  return (
    <section className="portfolio-section py-12">
      <div className="container mx-auto">
        <h1 className="text-4xl font-semibold mb-6">Portfolio</h1>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card mb-6">
              <h2 className="text-2xl font-semibold">{project.title}</h2>
              <p className="text-lg mb-2">{project.description}</p>
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-blue-500">View Project</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
