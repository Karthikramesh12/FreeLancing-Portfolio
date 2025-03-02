import './Projects.css';
import Deepcept_AI from "../../assets/Images/Projects/Deepcept_AI.png";
import ConfigYAML from "../../assets/Images/Projects/YAML.png";
import Portfolio from "../../assets/Images/Projects/Portfolio.png";
import WanderLust from "../../assets/Images/Projects/WanderLust.png";
import AI_video from "../../assets/Images/Projects/AI_video.png";
import Portfolio_karthik from '../../assets/Images/Projects/Karthik_portfolio.png'
import WordPress from '../../assets/Images/Projects/WordPress_website.png'
import Chess from '../../assets/Images/Projects/Chess.png'
import Html from '../../assets/Images/Projects/html.png'
import Css from '../../assets/Images/Projects/css-3.png'
import Js from '../../assets/Images/Projects/js.png'
import React from '../../assets/Images/Projects/physics.png'
import Django from '../../assets/Images/Projects/django.png'
import Python from '../../assets/Images/Projects/python.png'
import Wordpress_img from '../../assets/Images/Projects/wordpress.png'
import Php from '../../assets/Images/Projects/php.png'
import Mern from '../../assets/Images/Projects/MERN.jpg'
import YAML from '../../assets/Images/Projects/yaml_img.png'

const techIcons = {
  'HTML': Html,
  'CSS': Css,
  'JavaScript': Js,
  'React': React,
  'MERN': Mern,
  'WordPress': Wordpress_img,
  'PHP': Php,
  'Python': Python,
  'Django': Django,
  'YAML': YAML

}

const projects = [
  {
    id: 1,
    title: "Deepcept AI",
    description: "Led the redesign and redevelopment of Deepcept AI's main website, enhancing its UI/UX, structure, and overall functionality to improve user experience and engagement.",
    image: Deepcept_AI,
    live: "https://deep-ai.netlify.app/",
    techStack: ["HTML", "CSS", "JavaScript", "React"],
    developedBy: "Venkatesh Rayudu and Karthik Ramesh"
  },
  {
    id: 4,
    title: "Wanderlust",
    description: "A global house rental platform inspired by Airbnb, allowing users to list, explore, and book unique accommodations worldwide, enhancing the travel experience through seamless bookings.",
    image: WanderLust,
    live: "https://wanderlust-l877.onrender.com/listings",
    techStack: ["MERN"],
    developedBy: "Venkatesh Rayudu"
  },
  {
    id: 6,
    title: "Chess Engine",
    description: "Built a Website using vanilla JavaScript and basic HTML and CSS to make a chess game where we can play against AI. The difficulty raises as the time to think for the AI increases.",
    image: Chess,
    live: "https://karthikramesh12.github.io/chess_game/",
    techStack: ["JavaScript", "HTML", "CSS"],
    developedBy: "Karthik Ramesh"
  },
  {
    id: 2,
    title: "Portfolio Website",
    description: "A personal portfolio built with React, designed to showcase my projects, technical skills, and professional experience in an interactive and visually appealing manner.",
    image: Portfolio,
    live: "https://venkateshrayudu.netlify.app/",
    techStack: ["React", "HTML", "CSS", "JavaScript"],
    developedBy: "Venkatesh Rayudu"
  },
  {
    id: 5,
    title: "WordPress Medical Website",
    description: "Built a Website for a medical company using frameworks like WordPress and added attractive animations that make the website look better.",
    image: WordPress,
    live: "http://amazon-filpcart.42web.io/homepage/",
    techStack: ["WordPress", "PHP"],
    developedBy: "Karthik Ramesh"
  },
  {
    id: 8,
    title: "Config YAML Generation",
    description: "Developed a dynamic system for generating YAML configuration files by collecting and structuring user-provided camera details, ensuring seamless integration and automation.",
    image: ConfigYAML,
    github: "https://github.com/Venkatesh124rayudu/Project-1_Config.YAML-DeepCept-AI",
    techStack: ["Python", "Django", "YAML"],
    developedBy: "Venkatesh Rayudu"
  },
  {
    id: 3,
    title: "Portfolio Website",
    description: "A personal portfolio built with basic HTML and CSS, designed to showcase my projects, technical skills, and professional experience in an interactive and visually appealing manner.",
    image: Portfolio_karthik,
    live: "https://karthikramesh12.github.io/Portfolio/",
    techStack: ["HTML", "CSS", "JavaScript"],
    developedBy: "Karthik Ramesh"
  },
  {
    id: 7,
    title: "AI Video",
    description: "Designed and developed Django templates for AI-driven video analysis, facilitating seamless AI integration and enhancing user interaction with intelligent video processing features.",
    image: AI_video,
    github: "https://github.com/Venkatesh124rayudu/Canvas-Project_2-_Deepcept_AI",
    techStack: ["Django", "Python", "HTML", "CSS"],
    developedBy: "Venkatesh Rayudu"
  }
];

function Projects() {
  return (
    <div className='Projects mt-5'>
      <div className="container Zindex">
        <h2 className="text-center display-1 text-light fw-normal higlighted">02 Our Best Works</h2>
        <p className="lead fs-3 text-uppercase text-center text-light mb-5">Some of the best projects we have worked on</p>
        <div className="projects-container">
          {projects.map((project) => (
            <div className="project-card shadow-lg" key={project.id}>
              <img src={project.image} alt={project.title} />
              <div className="card-body">
                <div className='view-content mb-3'>
                  <div className='card-content'>
                    <h5 className="card-title m-3">{project.title}</h5>
                    <p className="text-muted m-3"><strong>Developed By:</strong>@{project.developedBy}</p>
                  </div>
                  <div className='cards-description'>
                    <p className="card-text p-0 mx-3 subtext">{project.description}</p>
                  </div>
                </div>
                <div className='tech-stack-view '>
                  <div className='d-flex flex-column justify-content-center align-items-center text-center'>
                    <p className="tech-stack"><strong>Tech Stack:</strong></p>
                    <ul className="tech-stack-list">
                      {project.techStack.map((tech, i) => (
                        <li key={i} className="tech-icon-item">
                          {techIcons[tech] ? (
                            <img
                              src={techIcons[tech]}
                              alt={tech}
                              className={tech === "MERN" ? "tech-icon-large tech-icon" : "tech-icon"}
                            />
                          ) : (
                            <span className='badge bg-primary me-1'>{tech}</span> // Fallback if no icon found
                          )}
                        </li>
                      ))}
                    </ul>

                  </div>

                  <div className='projects-buttons'>
                    {project.live ? (
                      <a href={project.live} className="btn d-flex align-items-center justify-content-center project-button w-100" target="_blank" rel="noopener noreferrer">
                        Live Demo
                      </a>
                    ) : (
                      <a href={project.github} className="btn d-flex align-items-center justify-content-center project-button w-100" target="_blank" rel="noopener noreferrer">
                        GitHub
                      </a>
                    )}
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}


export default Projects;
