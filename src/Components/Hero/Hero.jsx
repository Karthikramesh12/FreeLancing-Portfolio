import "./Hero.css";
import HeroCard from "../../assets/Images/Services-icons/035244_b479c942430942bfab09b6cc06ff380a~mv2.jpg";

const Hero = () => {
  return (
    <div className="hero-container">
      {/* Hero image (Sticky) */}
      <img
        src={HeroCard}
        alt="Hero background"
        className="hero-image"
      />

      {/* Glass overlay */}
      <div className="glass-overlay" />

      {/* Dark overlay */}
      <div className="overlay-dark-sticky" />

      {/* Content container */}
      <div className="hero-content">
        <h1 className="display-3 fw-bold mb-2"><span className='color'>Karthik</span> Ramesh &</h1>
        <h1 className="display-3 fw-bold mb-4">Venkatesh <span className='color'>Rayudu</span></h1>
        <p className="lead fs-3 text-center">We are <h1 className="heading">Web Developers</h1></p>
      </div>
    </div>
  );
};

export default Hero;
