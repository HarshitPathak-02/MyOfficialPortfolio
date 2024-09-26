import './App.css';
import About from './Components/Aboutme/About';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';
import Projects from './Components/Projects/Projects';
import Skills from './Components/Skills/Skills';
import Chart from './Assets/chart.png'
import Navbar from './Components/Navbar/Navbar';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className="main">
        <Home/>
        <About/>
        <Skills/>
        <img src={Chart} alt="" style={{width:'100%'}}/>
        <Projects/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;