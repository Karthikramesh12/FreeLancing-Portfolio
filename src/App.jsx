import './App.css'
import Experince from './Components/Experince/Experince'
import Footer from './Components/Footer/Footer'
import LoadingScreen from './Components/Loadin Screen/LoadingScreen'
import Projects from './Components/Projects/Projects'
import Skills from './Components/Skills/Skills'
import Contact from './Components/Contact/Contact';
function App() {
 

  return (
    <>
      <LoadingScreen/>
      <Skills/>
      <div className="timeline-section">
      <Projects/>
      <Experince/>
      </div>
      <Contact />
      <div className="footer">

      <Footer/>
      </div>
    </>
  )
}

export default App
