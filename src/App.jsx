import AboutMe from './components/AboutMe';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import './App.css'
import Projects from './components/Project';
import Skills from './components/Skill';
const App=()=> {

  return (
    /*---------CALL COMPONENTS-----------*/
    <div>
    <Navbar/>
    <Hero/>
    <AboutMe/>
    <Projects/>
    <Skills/>
    </div>
    
  );
}

export default App;
