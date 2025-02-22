import { useState, useEffect } from 'react';
import Hero from '../Hero/Hero';
import './LoadingScreen.css';

const LoadingScreen = () => {
  const [progress, setProgress] = useState(0);
  const [loading, setLoading] = useState(true);
  const [transitionComplete, setTransitionComplete] = useState(false);
  const [showSecondName, setShowSecondName] = useState(false);

  useEffect(() => {
    let start = 0;
    let lastTime = performance.now();

    const animate = (currentTime) => {
      const deltaTime = currentTime - lastTime;
      lastTime = currentTime;

      start += deltaTime * 0.12; // Slightly faster but still smooth

      if (start >= 50 && !showSecondName) {
        setShowSecondName(true);
      }

      if (start >= 100) {
        setProgress(100);
        setTimeout(() => {
          // Start moving back
          let reverseStart = 100;
          const reverseAnimate = () => {
            reverseStart -= 1.2; // Same speed as forward
            if (reverseStart <= 0) {
              setProgress(0);
              setTimeout(() => {
                setTransitionComplete(true);
                setLoading(false);
              }, 400); // Small delay before revealing HeroCard
            } else {
              setProgress(reverseStart);
              requestAnimationFrame(reverseAnimate);
            }
          };
          requestAnimationFrame(reverseAnimate);
        }, 500); // Wait 0.5s before reversing
      } else {
        setProgress(start);
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, []);

  if (loading || !transitionComplete) {
    console.log(progress);
    return (
      <div className={`loading-screen ${transitionComplete ? 'transition-complete' : ''}`}>
        <div className="names-container">
          <h1 className={`loading-name ${showSecondName ? 'second' : 'first'}-name`} style={{ zIndex: 5 }}>
            {showSecondName ? 'Venkatesh Ryadu' : 'Karthik Ramesh'}
          </h1>
        </div>

        {/* Sliding transition effect */}
        <div
          className="transition-effect"
          style={{
            transform: `translateX(${progress}%)`,
          }}
        />
      </div>
    );
  }

  return <Hero/>;
};

export default LoadingScreen;
