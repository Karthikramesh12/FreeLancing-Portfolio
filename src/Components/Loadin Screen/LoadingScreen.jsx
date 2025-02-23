import { useState, useEffect } from 'react';
import Hero from '../Hero/Hero';
import './LoadingScreen.css';
import NavBar from '../Nav/Nav';


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

      start += deltaTime * 0.09; // Slightly faster but still smooth

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
              }, 400); // Small delay before revealing Hero
            } else {
              setProgress(reverseStart);
              requestAnimationFrame(reverseAnimate);
              setTransitionComplete(true)
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
    console.log(transitionComplete)
    return (
    <>
      <div className={`${transitionComplete ? 'come-out' : ''}`}>
        {/* Hero Content is Visible from the Start but Fades in */}
        <Hero />
        </div>
        {/* Loading Overlay - Fades Out as Progress Returns to 0 */}
        {(loading || !transitionComplete) && (
          <div className={`loading-screen ${transitionComplete ? 'transition-complete' : ''}`}>
            <div className="names-container">
              <h1
                className={`display-1 ${showSecondName ? 'second-name' : 'first-name'} 
                  ${showSecondName && transitionComplete ? 'fade-out' : ''}`}
                style={{ zIndex: 5 }}
              >
                {showSecondName ? 'Venkatesh Rayudu' : 'Karthik Ramesh'}
              </h1>
    
              {/* Progress Bar - Visible until transitionComplete is true */}
              {!transitionComplete && (
                <div className="progress-bar-container">
                  <div className={`progress-${showSecondName ? 'dark' : 'light'}`} style={{ width: `${progress}%` }} />
                </div>
              )}
            </div>
    
            {/* Sliding transition effect */}
            <div
              className="transition-effect"
              style={{
                transform: `translateX(${progress}%)`,
              }}
            />
          </div>
        )}
    </>
    );
  }    
  return <>
  <NavBar />
    <Hero />
    
  </>;
};

export default LoadingScreen;
