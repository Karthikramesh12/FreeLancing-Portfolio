import "./Hero.css";
import HeroCard from "../../assets/Images/Services-icons/035244_b479c942430942bfab09b6cc06ff380a~mv2.jpg";

const Hero = () => {
  return (
    <div className="position-relative vh-100" style={{ minHeight: "110vh" }}>
      {/* Hero image */}
      <img
        src={HeroCard}
        alt="Hero background"
        className="w-100 h-100 object-fit-cover position-absolute"
      />

      {/* Glass overlay */}
      <div className="glass-overlay position-absolute top-0 start-0 w-100 h-100" />

      {/* Dark overlay */}
      <div className="position-absolute top-0 start-0 w-100 h-100 overlay-dark" />

      {/* Content container */}
      <div className="hero-content position-absolute top-50 start-0 translate-middle-y text-white text-start">
        <h1 className="display-3 fw-bold mb-2"><span className='color'>Karthik</span> Ramesh &</h1>
        <h1 className="display-3 fw-bold mb-4">Venkatesh <span className='color'>Rayudu</span></h1>
        <p className="lead fs-3">We are <h1 className="heading">Web Developers</h1></p>
      </div>
    </div>
  );
};

export default Hero;
