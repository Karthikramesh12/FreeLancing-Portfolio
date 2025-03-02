<<<<<<< HEAD
import { Parallax, ParallaxProvider } from 'react-scroll-parallax';
import './App.css';
import Experince from './Components/Experince/Experince';
import Footer from './Components/Footer/Footer';
import LoadingScreen from './Components/Loadin Screen/LoadingScreen';
import Projects from './Components/Projects/Projects';
import Skills from './Components/Skills/Skills';
=======
import './App.css'
import Experince from './Components/Experince/Experince'
import Footer from './Components/Footer/Footer'
import LoadingScreen from './Components/Loadin Screen/LoadingScreen'
import Projects from './Components/Projects/Projects'
import Skills from './Components/Skills/Skills'
>>>>>>> 28303e68757e26104395133131e52fd29c2ad2d5
import Contact from './Components/Contact/Contact';
import ProjectsImg from './assets/Images/Services-icons/experince-bg.jpg';

function App() {
  return (
<<<<<<< HEAD
    <ParallaxProvider>
      <LoadingScreen />
      <Skills />

=======
    <>
      <LoadingScreen/>
      <Skills/>
>>>>>>> 28303e68757e26104395133131e52fd29c2ad2d5
      <div className="timeline-section">
        <div className="parallax-container" style={{ position: 'relative', overflow: 'hidden' }}>
          {/* Background Parallax (Smooth & Visible) */}
          <Parallax speed={-35.9999}>  {/* Reduced speed to make effect visible */}
            <div
              className="parallax-bg"
              style={{
                backgroundImage: `url(${ProjectsImg})`,
                backgroundColor: 'rgba(53, 80, 163, 0.45)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                height: '400vh',  // Covers both components fully
                width: '130vw',   // Slightly increased width
                position: 'absolute',
                top: '-50vh',      // Prevents early cutoff
                left: '-15vw',     // Centers image properly
                zIndex: 0,
              }}
            ></div>
          </Parallax>

          {/* Normal Speed Components */}
          <div className="content" style={{ position: 'relative', zIndex: 1 }}>
            <Parallax speed={0}>
              <Projects />
            </Parallax>
            <Parallax speed={0}>
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
  );
}

export default App;
