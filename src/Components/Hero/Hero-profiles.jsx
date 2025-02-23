import EachProfile from "./Hero-individual-profile";
import Karthik from "../../assets/Images/Karthik.png";
import {useState} from "react";
import { useEffect } from "react";
import './ProfileAnimation.css';
import HeroAnimation from "./Hero-animation";
const HeroProfiles = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [scrollDirection, setScrollDirection] = useState('down');
    const [lastScrollTop, setLastScrollTop] = useState(0);
  
    const profileData = [
      {
        id: 0,
        name: "Karthik Ramesh",
        image: Karthik,
        profession: "Full stack Web Developer.",
      },
      {
        id: 1,
        name: "Venkatesh Rayudu",
        image: Karthik,
        profession: "Full stack Web Developer.",
      }
    ];
  
    useEffect(() => {
      const handleScroll = () => {
        const scrollTop = window.scrollY;
        const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercentage = scrollTop / scrollHeight;
        const newIndex = Math.min(
          Math.floor(scrollPercentage * profileData.length),
          profileData.length - 1
        );
        
        setScrollDirection(scrollTop > lastScrollTop ? 'down' : 'up');
        setLastScrollTop(scrollTop);
        setActiveIndex(newIndex);
      };
  
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScrollTop, profileData.length]);
  
    return (
       
        
      <div className="scroll-container" style={{ height: `${300 * profileData.length}vh` }}>
        <div className="sticky-container">
        <HeroAnimation />
          {profileData.map((profile, index) => (
            <EachProfile
              key={profile.id}
              name={profile.name}
              image={profile.image}
              profession={profile.profession}
              isActive={index === activeIndex}
              direction={scrollDirection}
            />
          ))}
        </div>
      </div>
  
    );
  };
  
  export default HeroProfiles;