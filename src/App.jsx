import './App.css'
import Experince from './Components/Experince/Experince'
import Footer from './Components/Footer/Footer'
import LoadingScreen from './Components/Loadin Screen/LoadingScreen'
import Projects from './Components/Projects/Projects'
import Skills from './Components/Skills/Skills'
function App() {
 

  return (
    <>
      <LoadingScreen/>
      <Skills/>
      <Projects/>
      <Experince/>
      <div className="footer">

      <Footer/>
      </div>
    </>
  )
}

export default App
