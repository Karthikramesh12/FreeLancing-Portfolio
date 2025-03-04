// import { useEffect, useRef } from "react";
import { useState } from "react";
import "./Experince.css";
import "../Hero/Hero.css";
import Karthik from '../../assets/Images/Karthik.png'
// const experienceData = [
//   {
//     year: "2019",
//     title: "High School",
//     description:
//       "I completed my high school at Agragami Vidya Kendra CBSE board in the year 2019. Learned some important skills such as time management and communication, etc.",
//   },
//   {
//     year: "2021",
//     title: "Pre University",
//     description:
//       "I completed my pre-university at the same school as my high school under the state syllabus. The course I opted for was PCMB, and I completed my pre-university in the year 2021.",
//   },
//   {
//     year: "2022",
//     title: "University",
//     description:
//       "I joined university in the year 2022 and opted for Electronics and Telecommunications Engineering as my course at Sir M Visvesvaraya Institute of Technology, Bangalore.",
//   },
//   {
//     year: "2023",
//     title: "Internship",
//     description:
//       "I completed my first internship in the year 2023 at a company called Varcons Technology under the topic of Machine Learning.",
//   },
// ];

function Experience() {
  // const timelineRef = useRef(null);
  // let timeoutRef = useRef(null); // Reference for timeout to slow down update

  // useEffect(() => {
  //   const timeline = timelineRef.current;

  //   const handleScroll = () => {
  //     clearTimeout(timeoutRef.current); // Clear previous timeout to avoid rapid updates

  //     timeoutRef.current = setTimeout(() => {
  //       const scrollY = window.scrollY;
  //       const timelineTop = timeline.offsetTop;
  //       const windowHeight = window.innerHeight;
  //       const totalHeight = timeline.scrollHeight;

  //       let fillHeight = ((scrollY + windowHeight - timelineTop) / totalHeight) * 100;
  //       fillHeight = Math.max(0, Math.min(fillHeight, 100)); // Keep it within 0-100%

  //       timeline.style.setProperty("--timeline-fill", `${fillHeight}%`);
  //     }, 100); // Adds a small delay to slow down updates
  //   };

  //   window.addEventListener("scroll", handleScroll);
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //     clearTimeout(timeoutRef.current);
  //   };
  // }, []);

  // return (
  //   <section className="mt-5 mb-5" id="education" ref={timelineRef}>

  //     <div className="d-flex justify-content-center align-items-center">
  //       <h2 className="heading display-1 text-light higlighted">03 Experience</h2>
  //     </div>

  //     <div className="timeline-items">
  //       {experienceData.map((item, index) => (
  //         <div className="timeline-item text-color" key={index}>
  //           <div className="timeline-dot"></div>
  //           <div className="timeline-data text-light">{item.year}</div>
  //           <div className="timeline-content d-flex justify-content-center align-items-left flex-column container w-50 text-light text-align">
  //             <h3>{item.title}</h3>
  //             <p>{item.description}</p>
  //           </div>
  //         </div>
  //       ))}
  //     </div>
  //   </section>
  // );
  const [activeTab, setActiveTab] = useState('skills');

// Dynamic Data
const skills = ["React.js", "JavaScript", "HTML/CSS", "Node.js", "Bootstrap"];

const experience = [
  {
    role: "Senior Web Developer",
    company: "Tech Innovations Inc.",
    duration: "2020-Present",
    description: "Led frontend development teams and implemented scalable web applications."
  },
  {
    role: "Web Developer",
    company: "Digital Solutions LLC",
    duration: "2017-2020",
    description: "Developed responsive web applications and maintained client websites."
  }
];

const education = [
  {
    degree: "Bachelor of Science in Computer Science",
    institution: "University of Technology",
    duration: "2013-2017",
    description: "Graduated with honors, specialized in web technologies and software engineering."
  }
];

// Content for different tabs
const tabContent = {
  skills: (
    <div>
      <h4 className="fs-1 display-4 higlighted">Skills</h4>
      <ul>
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </div>
  ),
  experience: (
    <div>
      <h4 className="fs-1 mb-3 higlighted">Professional Experience</h4>
      {experience.map((job, index) => (
        <div key={index}>
          <h5 className="fs-4 fw-normal display-4">{job.role}</h5>
          <p>{job.company} | {job.duration}</p>
          <p>{job.description}</p>
        </div>
      ))}
    </div>
  ),
  education: (
    <div>
      <h4 className="fs-1 mb-3 higlighted">Education</h4>
      {education.map((edu, index) => (
        <div key={index}>
          <h5 className="fs-4 fw-normal display-4">{edu.degree}</h5>
          <p>{edu.institution} | {edu.duration}</p>
          <p>{edu.description}</p>
        </div>
      ))}
    </div>
  )
};

return (
  <div className="container mt-5">
    <div className="row">
      {/* Image Card */}
      <div className="col-md-4">
        <div className="card h-100 card-dark">
          <img 
            src={Karthik} 
            alt="Profile" 
            className="card-img-top w-100 card-image"
          />
          <h5 className="text-center text-light fw-normal fs-1 higlighted">
            Karthik <span className="color higlighted">Ramesh</span>
          </h5>
        </div>
      </div>

      {/* About Section */}
      <div className="col-md-8">
        <h2 className="mb-4 higlighted display-3 text-dark">About Us</h2>
        <p className="lead text-dark">
          Passionate web developer with a keen eye for creating intuitive and 
          responsive web applications. Committed to delivering high-quality 
          solutions that meet both user needs and business objectives.
        </p>

        {/* Tabbed Navigation */}
        {Object.keys(tabContent).map((tab) => (
          <button 
            key={tab} 
            className={`btn text-dark me-4 mb-3 tab-link fs-6 fw-normal text-uppercase ${activeTab === tab ? 'active-link' : ''}`} 
            onClick={() => setActiveTab(tab)}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}

        {/* Dynamic Content Area */}
        <div className="tab-content text-dark">
          {tabContent[activeTab]}
        </div>
      </div>
    </div>
  </div>
);

}

export default Experience;