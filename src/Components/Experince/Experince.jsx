import { useState } from "react";
import "./Experince.css";
import Karthik from "../../assets/Images/Karthik.png";
import Venkatesh from "../../assets/Images/Venkatesh.jpg";

function Experience() {
  const [activeTabs, setActiveTabs] = useState({
    "Karthik Ramesh": "skills",
    "Venkatesh Rayudu": "skills",
  });

  const handleTabClick = (memberName, tab) => {
    setActiveTabs((prevTabs) => ({ ...prevTabs, [memberName]: tab }));
  };

  const members = [
    {
      name: "Karthik Ramesh",
      image: Karthik,
      role: "Web Developer",
      description:
        "Passionate web developer with a keen eye for creating intuitive and responsive web applications.",
      details: {
        skills: ["React.js", "JavaScript", "HTML/CSS", "Node.js", "Bootstrap"],
        experience: [
          {
            role: "Senior Web Developer",
            company: "Tech Innovations Inc.",
            duration: "2020-Present",
            description:
              "Led frontend development teams and implemented scalable web applications.",
          },
        ],
        education: [
          {
            degree: "Bachelor of Science in Computer Science",
            institution: "University of Technology",
            duration: "2013-2017",
            description:
              "Graduated with honors, specialized in web technologies and software engineering.",
          },
        ],
      },
    },
    {
      name: "Venkatesh Rayudu",
      image: Venkatesh,
      role: "Full Stack Developer",
      description:
        "Experienced full-stack developer with a strong foundation in building scalable and efficient web applications.",
      details: {
        skills: ["MongoDB", "Express.js", "React.js", "Node.js", "Firebase"],
        experience: [
          {
            role: "Full Stack Developer",
            company: "Innovative Tech Solutions",
            duration: "2022-Present",
            description:
              "Developed and deployed full-stack applications with seamless user experiences.",
          },
        ],
        education: [
          {
            degree: "Bachelor of Engineering in Computer Science",
            institution: "ABC Engineering College",
            duration: "2019-2023",
            description:
              "Specialized in web development and artificial intelligence applications.",
          },
        ],
      },
    },
  ];

  return (
    <div className="container mt-5">
      <div className="card-container">
        {members.map((member, index) => (
          <div key={index} className="card-wrapper">
            <div className="card mb-5 card-experience p-4 shadow-lg card-dark">
              <div className="row">
                {/* Image Card */}
                <div className="col-md-4 text-center">
                  <img
                    src={member.image}
                    alt="Profile"
                    className="rounded-circle img-fluid w-75"
                  />
                  <h5 className="mt-3 text-light fw-bold fs-3">
                    {member.name}
                  </h5>
                </div>

                {/* About Section */}
                <div className="col-md-8">
                  <h2 className="mb-4 display-5 text-light">About Me</h2>
                  <p className="lead text-light">{member.description}</p>

                  {/* Tabbed Navigation */}
                  <div className="d-flex mb-3">
                    {Object.keys(member.details).map((tab) => (
                      <button
                        key={tab}
                        className={`btn btn-outline-light me-3 ${
                          activeTabs[member.name] === tab ? "active" : ""
                        }`}
                        onClick={() => handleTabClick(member.name, tab)}
                      >
                        {tab.charAt(0).toUpperCase() + tab.slice(1)}
                      </button>
                    ))}
                  </div>

                  {/* Dynamic Content Area */}
                  <div className="text-light">
                    {activeTabs[member.name] === "skills" && (
                      <ul>
                        {member.details.skills.map((skill, index) => (
                          <li key={index}>{skill}</li>
                        ))}
                      </ul>
                    )}

                    {activeTabs[member.name] === "experience" &&
                      member.details.experience.map((job, index) => (
                        <div key={index} className="mb-3">
                          <h5 className="fw-bold">{job.role}</h5>
                          <p>{job.company} | {job.duration}</p>
                          <p>{job.description}</p>
                        </div>
                      ))}

                    {activeTabs[member.name] === "education" &&
                      member.details.education.map((edu, index) => (
                        <div key={index} className="mb-3">
                          <h5 className="fw-bold">{edu.degree}</h5>
                          <p>{edu.institution} | {edu.duration}</p>
                          <p>{edu.description}</p>
                        </div>
                      ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Experience;
