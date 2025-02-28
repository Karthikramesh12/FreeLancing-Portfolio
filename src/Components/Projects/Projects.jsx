import './Projects.css';
import Deepcept_AI from "../../assets/Images/Projects/Deepcept_AI.png"
import ConfigYAML from "../../assets/Images/Projects/Deepcept_AI.png"
import Portfolio from "../../assets/Images/Projects/Deepcept_AI.png"
import WanderLust from "../../assets/Images/Projects/Deepcept_AI.png"
import AI_video from "../../assets/Images/Projects/Deepcept_AI.png"

const projects = [
  {
    title: "Deepcept AI",
    description: "Led the redesign and redevelopment of Deepcept AI's main website, enhancing its UI/UX, structure, and overall functionality to improve user experience and engagement.",
    image: Deepcept_AI,
    live: "https://deep-ai.netlify.app/",
  },
  {
    title: "Config YAML Generation",
    description: "Developed a dynamic system for generating YAML configuration files by collecting and structuring user-provided camera details, ensuring seamless integration and automation.",
    image: ConfigYAML,
    github: "https://github.com/Venkatesh124rayudu/Project-1_Config.YAML-DeepCept-AI",
  },
  {
    title: "Portfolio Website",
    description: "A personal portfolio built with React, designed to showcase my projects, technical skills, and professional experience in an interactive and visually appealing manner.",
    image: Portfolio,
    live: "https://venkateshrayudu.netlify.app/",
  },
  {
    title: "AI Video",
    description: "Designed and developed Django templates for AI-driven video analysis, facilitating seamless AI integration and enhancing user interaction with intelligent video processing features.",
    image: AI_video,
    github: "https://github.com/Venkatesh124rayudu/Canvas-Project_2-_Deepcept_AI",
  },
  {
    title: "Wanderlust",
    description: "A global house rental platform inspired by Airbnb, allowing users to list, explore, and book unique accommodations worldwide, enhancing the travel experience through seamless bookings.",
    image: WanderLust,
    live: "https://wanderlust-l877.onrender.com/listings",
  },
];

function Projects() {
  return (
    <div className="container my-5">
    <h2 className="text-center fw-bold main-heading py-4">Projects</h2>
    <div className="projects-container">
      {projects.map((project, index) => (
        <div className="project-card" key={index}>
          <img src={project.image} alt={project.title} />
          <div className="card-body">
            <h5 className="card-title">{project.title}</h5>
            <p className="card-text subtext">{project.description}</p>
            <div className='d-flex mb-3 justify-content-center'>
              {project.live ? (
                <a href={project.live} className="btn open-resume-btn" target="_blank" rel="noopener noreferrer">
                  Live Demo
                </a>
              ) : (
                <a href={project.github} className="btn open-resume-btn" target="_blank" rel="noopener noreferrer">
                  GitHub
                </a>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
  );
}

export default Projects;
