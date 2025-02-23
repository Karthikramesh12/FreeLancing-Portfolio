import './Skills.css';
import Skill_img from '../../../assets/Images/Services-icons/035244_9f46dd7c6e524eef94172c670fff1913~mv2_d_1920_1343_s_2.jpg';
import { useState, useRef, useEffect } from 'react';

function Skills() {
  const [visibleBars, setVisibleBars] = useState(new Array(7).fill(false));
  const sectionRef = useRef(null);

  const skills = [
    { name: "MERN Stack", percentage: 75 },
    { name: "React", percentage: 70 },
    { name: "WordPress", percentage: 80 },
    { name: "BootStrap", percentage: 95 },
    { name: "JavaScript", percentage: 85 },
    { name: "HTML & CSS", percentage: 80 },
    { name: "RustFull API", percentage: 85 }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          skills.forEach((_, index) => {
            setTimeout(() => {
              setVisibleBars(prev => {
                const newBars = [...prev];
                newBars[index] = true;
                return newBars;
              });
            }, index * 200);
          });
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div className="position-relative vh-100" style={{ minHeight: '110vh' }} ref={sectionRef}>
      {/* Background image */}
      <div className="skills-bg">
      <img 
        src={Skill_img}
        alt="Skills background" 
        className="w-100 h-100 object-fit-cover position-absolute"
      />
      </div>
      
      {/* Tint overlay */}
      <div className="tint-overlay position-absolute top-0 start-0 w-100 h-100" />
      
      {/* Content container */}
      <div className="position-absolute w-100 h-100">
        <div className="container h-100 d-flex flex-column justify-content-center">
          <div className="text-center mb-5">
            <h2 className="display-1 text-color fw-normal mb-3">01 PROFESSIONALS</h2>
            <p className="lead text-white fs-3">OUR KNOWLEDGE LEVEL IN SOFTWARE</p>
          </div>
          
          <div className="row justify-content-center">
            <div className="col-md-8">
              {skills.map((skill, index) => (
                <div 
                  key={index} 
                  className="mb-4 d-flex align-items-center"
                  style={{
                    opacity: visibleBars[index] ? 1 : 0,
                    transform: `translateY(${visibleBars[index] ? '0' : '20px'})`,
                    transition: 'all 0.5s ease-out'
                  }}
                >
                  {/* Skill Name (Left Side) */}
                  <span className="text-color fw-normal me-3" style={{ minWidth: "120px" }}>
                    {skill.name}
                  </span>

                  {/* Progress Bar (Right Side) */}
                  <div className="progress flex-grow-1" style={{ height: '10px' }}>
                    <div 
                      className="progress-bar progress-bar-animated"
                      role="progressbar"
                      style={{ 
                        width: visibleBars[index] ? `${skill.percentage}%` : '0%',
                        backgroundColor: '#0cb048', /* Solid green color */
                        transition: 'width 1s ease-in-out'
                      }}
                      aria-valuenow={visibleBars[index] ? skill.percentage : 0}
                      aria-valuemin="0"
                      aria-valuemax="100"
                    />
                  </div>

                  {/* Percentage (Right Side) */}
                  <span className="text-white fw-normal ms-3">{skill.percentage}%</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
