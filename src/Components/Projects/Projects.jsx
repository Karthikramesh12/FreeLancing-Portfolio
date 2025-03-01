import './Projects.css';
import Deepcept_AI from "../../assets/Images/Projects/Deepcept_AI.png";
import ConfigYAML from "../../assets/Images/Projects/YAML.png";
import Portfolio from "../../assets/Images/Projects/Portfolio.png";
import WanderLust from "../../assets/Images/Projects/WanderLust.png";
import AI_video from "../../assets/Images/Projects/AI_video.png";

const projects = [
  {
    title: "Deepcept AI",
    description: "Led the redesign and redevelopment of Deepcept AI's main website, enhancing its UI/UX, structure, and overall functionality to improve user experience and engagement.",
    image: Deepcept_AI,
    live: "https://deep-ai.netlify.app/",
    techStack: ["HTML", "CSS", "JavaScript", "React"],
    developedBy: "Venkatesh Rayudu"
  },
  {
    title: "Config YAML Generation",
    description: "Developed a dynamic system for generating YAML configuration files by collecting and structuring user-provided camera details, ensuring seamless integration and automation.",
    image: ConfigYAML,
    github: "https://github.com/Venkatesh124rayudu/Project-1_Config.YAML-DeepCept-AI",
    techStack: ["Python", "Django", "YAML"],
    developedBy: "Venkatesh Rayudu"
  },
  {
    title: "Portfolio Website",
    description: "A personal portfolio built with React, designed to showcase my projects, technical skills, and professional experience in an interactive and visually appealing manner.",
    image: Portfolio,
    live: "https://venkateshrayudu.netlify.app/",
    techStack: ["React", "HTML", "CSS", "JavaScript"],
    developedBy: "Venkatesh Rayudu"
  },
  {
    title: "AI Video",
    description: "Designed and developed Django templates for AI-driven video analysis, facilitating seamless AI integration and enhancing user interaction with intelligent video processing features.",
    image: AI_video,
    github: "https://github.com/Venkatesh124rayudu/Canvas-Project_2-_Deepcept_AI",
    techStack: ["Django", "Python", "HTML", "CSS"],
    developedBy: "Venkatesh Rayudu"
  },
  {
    title: "Wanderlust",
    description: "A global house rental platform inspired by Airbnb, allowing users to list, explore, and book unique accommodations worldwide, enhancing the travel experience through seamless bookings.",
    image: WanderLust,
    live: "https://wanderlust-l877.onrender.com/listings",
    techStack: ["MongoDB", "Express.js", "Node.js", "EJS"],
    developedBy: "Venkatesh Rayudu"
  }
];

function Projects() {
  return (
    <div className='Projects'>
    <div className="container my-5">
      <h2 className="text-center fw-bold main-heading py-4">Projects</h2>
      <div className="projects-container">
        {projects.map((project, index) => (
          <div className="project-card shadow-lg" key={index}>
            <img src={project.image} alt={project.title} />
            <div className="card-body">
            <div className='view-content mb-3'>
            <div className='card-content'>
              <h5 className="card-title m-3">{project.title}</h5>
              <p className="text-muted m-3"><strong>Developed By:</strong>@{project.developedBy}</p>
              </div>
              <div className='cards-description'>
              <p className="card-text p-0 mx-3 subtext ">{project.description}</p>
              </div>
              </div>
             
           <div className='tech-stack-view '>
           <div className='d-flex flex-column justify-content-center align-items-center text-center'>
              <p className="tech-stack "><strong>Tech Stack:</strong></p>
              <ul className="tech-stack-list">
                {project.techStack.map((tech, i) => (
                  <li className='badge bg-primary me-1' key={i}>{tech}</li>
                ))}
              </ul>
              </div>
              <div className='projects-buttons'>
                {project.live ? (
                  <a href={project.live} className="btn d-flex align-items-center justify-content-center project-button w-100" target="_blank" rel="noopener noreferrer">
                    Live Demo
                  </a>
                ) : (
                  <a href={project.github} className="btn d-flex align-items-center justify-content-center   project-button w-100" target="_blank" rel="noopener noreferrer">
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
