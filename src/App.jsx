
import { Parallax, ParallaxProvider } from 'react-scroll-parallax';
import './App.css';
import Experince from './Components/Experince/Experince';
import Footer from './Components/Footer/Footer';
import LoadingScreen from './Components/Loadin Screen/LoadingScreen';
import Projects from './Components/Projects/Projects';
import Skills from './Components/Skills/Skills';

import Contact from './Components/Contact/Contact';
import ProjectsImg from './assets/Images/Services-icons/experince-bg.jpg';
import ScrollReplaceContent from "./Components/Scroll";
function App() {
  return (<>

    <ParallaxProvider>
      <LoadingScreen />
      <Skills />


      <div className="timeline-section">
        <div className="" style={{ position: 'relative', overflow: 'hidden' }}>
          {/* Background Parallax (Smooth & Visible) */}
          <Parallax speed={-30}>  {/* Reduced speed to make effect visible */}
            <div
              className=""
              style={{
                backgroundImage: `url(${ProjectsImg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                height: '300vh', 
                width: '130vw', 
                position: 'absolute',   
                left: '-15vw',    
                zIndex: 100,
                top: '-100px'
              }}
            ></div>
          </Parallax>
             

          {/* Normal Speed Components */}
          <div className="content" style={{ position: 'relative', zIndex: 1 }}>
            <Parallax speed={0}>
              <Projects />
              <Experince />
              
            </Parallax>
            
          </div>
        </div>
      </div>

      <Contact />
      <div className="footer">
        <Footer />
      </div>
      
    </ParallaxProvider>
    
    </>
  );
}

export default App;
