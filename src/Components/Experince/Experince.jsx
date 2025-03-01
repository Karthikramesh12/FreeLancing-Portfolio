import { useEffect, useRef } from "react";
import "./Experince.css";
import "../Hero/Hero.css";

const experienceData = [
  {
    year: "2019",
    title: "High School",
    description:
      "I completed my high school at Agragami Vidya Kendra CBSE board in the year 2019. Learned some important skills such as time management and communication, etc.",
  },
  {
    year: "2021",
    title: "Pre University",
    description:
      "I completed my pre-university at the same school as my high school under the state syllabus. The course I opted for was PCMB, and I completed my pre-university in the year 2021.",
  },
  {
    year: "2022",
    title: "University",
    description:
      "I joined university in the year 2022 and opted for Electronics and Telecommunications Engineering as my course at Sir M Visvesvaraya Institute of Technology, Bangalore.",
  },
  {
    year: "2023",
    title: "Internship",
    description:
      "I completed my first internship in the year 2023 at a company called Varcons Technology under the topic of Machine Learning.",
  },
];

function Experience() {
  const timelineRef = useRef(null);
  let timeoutRef = useRef(null); // Reference for timeout to slow down update

  useEffect(() => {
    const timeline = timelineRef.current;

    const handleScroll = () => {
      clearTimeout(timeoutRef.current); // Clear previous timeout to avoid rapid updates

      timeoutRef.current = setTimeout(() => {
        const scrollY = window.scrollY;
        const timelineTop = timeline.offsetTop;
        const windowHeight = window.innerHeight;
        const totalHeight = timeline.scrollHeight;

        let fillHeight = ((scrollY + windowHeight - timelineTop) / totalHeight) * 100;
        fillHeight = Math.max(0, Math.min(fillHeight, 100)); // Keep it within 0-100%

        timeline.style.setProperty("--timeline-fill", `${fillHeight}%`);
      }, 100); // Adds a small delay to slow down updates
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <section className="mt-5 mb-5" id="education" ref={timelineRef}>
      <div className="overlay-dark"></div>

      <div className="d-flex justify-content-center align-items-center">
        <h2 className="heading display-1 text-dark">03 EXPERIENCE</h2>
      </div>

      <div className="timeline-items">
        {experienceData.map((item, index) => (
          <div className="timeline-item text-color" key={index}>
            <div className="timeline-dot"></div>
            <div className="timeline-data text-dark">{item.year}</div>
            <div className="timeline-content d-flex justify-content-center align-items-left flex-column container w-50 text-dark text-align">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;
