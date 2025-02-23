import HeroImg from "./Hero-image";
import HeroText from "./Hero-text";
import './ProfileAnimation.css';

const EachProfile = ({ name, image, profession, isActive, direction, id }) => {
  const renderContent = () => {
    if (id === 1) {
      return (
        <div className="row">
          <HeroImg
            image={image}
            isActive={isActive}
          />
          <HeroText
            name={name}
            profession={profession}
            isActive={isActive}
          />
        </div>
      );
    }
   
    return (
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
    );
  };

  return (
    <div className="hero-container">
      <div className={`container profile-section ${isActive ? 'active' : ''} ${direction}`}>
        <div className="container Hero-content-margin">
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default EachProfile;