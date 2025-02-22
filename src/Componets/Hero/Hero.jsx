import "./Hero.css";
import HeroAnimation from "./Hero-animation";
import HeroImg from "./Hero-image";
import HeroText from "./Hero-text";
import DemoCard from "./demo-card";
const Hero = () => {
  return (
    <>
      <HeroAnimation />
      <div className="container hero-container">
        <div className="row">
          <HeroText />
          <HeroImg />
        </div>
      </div>

      <DemoCard />
    </>
  );
};
export default Hero;
