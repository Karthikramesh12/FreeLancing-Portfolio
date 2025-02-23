import HeroImg from "./Hero-image";
import HeroText from "./Hero-text";
import './ProfileAnimation.css';

const EachProfile = ({ name, image, profession, isActive, direction }) => {
  return (
    <div className="hero-container mt-5">
    <div className={`container  profile-section ${isActive ? 'active' : ''} ${direction}`}>
      <div className="container Hero-content-margin">
      <div className="row">
        <HeroText 
          name={name} 
          profession={profession} 
          isActive={isActive} 
        />
        <HeroImg 
          image={image} 
          isActive={isActive} 
        />
      </div>
      </div>
    </div>
    </div>
  );
};

export default EachProfile;