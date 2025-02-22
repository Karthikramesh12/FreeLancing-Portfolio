import "./Hero.css";
import HeroAnimation from "./Hero-animation";
import HeroImg from "./Hero-image";
import HeroText from "./Hero-text";
import DemoCard from "./demo-card";
import NavBar  from "../Nav/Nav";
const Hero = () => {
  return (
    <>
      <HeroAnimation />
      <NavBar />
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
