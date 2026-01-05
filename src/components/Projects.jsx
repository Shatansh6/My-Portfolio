import React from "react";
import mainfoodImage from "../assets/mainfoodimage.png";
import weather from "../assets/weatherimage.png"
import enhancedImage from "../assets/enhancedImage.png"
const projects = [
  {
    name: "Food Delivery Website",
    desc: "A responsive React application built using Context API and local storage that allows users to browse menus, manage cart state, and place orders with a clean and intuitive UI.",
    skills: ["React", "JavaScript", "Context API", "CSS"],
    image: mainfoodImage,
    live: "https://shatansh6.github.io/Food-Delivery-App-react/",
    code: "https://github.com/shatansh6/Food-Delivery-App-react",
  },
  {
    name: "Weather API App",
    desc: "A JavaScript-based weather application that fetches real-time data from an external API and displays temperature, humidity, and weather conditions for any city.",
    skills: ["JavaScript", "API", "HTML", "CSS"],
    image: weather,
    live: "https://shatansh6.github.io/Weather-App/",
    code: "https://github.com/shatansh6/Weather-App",
  },
  {
  name: "AI Image Enhancer",
  desc: "A web application that enhances image quality using an AI-powered API. Users can upload an image, preview the original and enhanced versions side-by-side, and download the enhanced image with a smooth and intuitive user experience.",
  skills: ["React", "JavaScript", "Tailwind CSS", "REST API"],
  image: enhancedImage,
  live: "https://shatansh6.github.io/AI-ImageEnhancer/",
  code: "https://github.com/Shatansh6/AI-ImageEnhancer.git",
},
];

const Projects = () => {
  return (
    <section id="projects" className="resume-section">
      <h2>Projects</h2>

      <div className="projects-vertical">
        {projects.map((project, index) => (
          <div className="project-row" key={index}>
            {/* Project Image */}
            <div className="project-image">
              <img src={project.image} alt={project.name} />
            </div>

            {/* Project Content */}
            <div className="project-content">
              <h3>{project.name}</h3>

              <div className="project-skills">
                {project.skills.map((skill, i) => (
                  <span className="project-skill" key={i}>
                    {skill}
                  </span>
                ))}
              </div>

              <p>{project.desc}</p>

              <div className="project-buttons">
                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                  className="project-btn project-btn-left"
                >
                  Live
                </a>
                <a
                  href={project.code}
                  target="_blank"
                  rel="noreferrer"
                  className="project-btn project-btn-right"
                >
                  Code
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
