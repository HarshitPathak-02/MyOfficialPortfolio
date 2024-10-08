import React from 'react'
import './project.css'
import Ntflx from '../../Assets/netflix.png'
import Clcltr from '../../Assets/calculator.png'
import Wthr from '../../Assets/weather.png'
import Wndrlst from '../../Assets/wanderlust.png'
import Sptfy from '../../Assets/spotify.png'
import Gft from '../../Assets/gift.png'
import Tdo from '../../Assets/todo.png'
import Tmprtre from '../../Assets/temperature.png'
import Trbte from '../../Assets/tribute.png'
import anmntd from '../../Assets/animated.png'
import figma from '../../Assets/figma.png'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import {ScrollTrigger} from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

const Projects = () => {

    useGSAP(()=>{
        gsap.fromTo('.proj_desc h1, .proj_desc p',{y:50, opacity:0},{
            y:0,
            opacity:1,
            delay:0.2,
            duration:0.8,
            stagger:0.3,
            scrollTrigger:"#projects"
        })

        gsap.fromTo(".project_cards1 .project_card",{
            opacity:0,
            scale:0.5
        }, {
            scale:1,
            opacity:1,
            duration:0.7,
            stagger:0.3,
            scrollTrigger:".project_cards1"
        })
        gsap.fromTo(".project_cards2 .project_card",{
            opacity:0,
            scale:0.5
        }, {
            scale:1,
            opacity:1,
            duration:0.7,
            stagger:0.3,
            // delay:0.5,
            scrollTrigger:".project_cards2"
        })
        gsap.fromTo(".project_cards3 .project_card",{
            opacity:0,
            scale:0.5
        }, {
            scale:1,
            opacity:1,
            duration:0.7,
            // delay:0.5,
            stagger:0.3,
            scrollTrigger:".project_cards3"
        })
        gsap.fromTo(".project_cards4 .project_card",{
            opacity:0,
            scale:0.5
        }, {
            scale:1,
            opacity:1,
            duration:0.7,
            stagger:0.3,
            // delay:0.5,
            scrollTrigger:".project_cards4"
        })
    })


  return (
    <div id='projects'>
        <div className="proj_desc">
            <h1>My Projects</h1>
            <br />
            <p>Below are my projects, take a look at them!</p>
        </div>
        <br /><br />
        <div className="projects_cards">
            <div className="project_cards1">
                <div className="project_card">
                    <img src={Wndrlst} alt="" />
                    <br /><br />
                    <h2>Wanderlust</h2>
                    <br />
                    <p>This is a full stack project made with HTML, CSS, JavaScript, ExpressJs, MongoDb and MERN Stack technologies.</p>
                    <br />
                    <h3><a href="https://wanderlust-mbxk.onrender.com/listings">Visit site</a></h3>
                    <br />
                </div>
                <div className="project_card">
                    <img src={Clcltr} alt="" />
                    <br /><br />
                    <h2>Calculator</h2>
                    <br />
                    <p>This is a calculator web app which is made with HTML, CSS, JavaScript.</p>
                    <br />
                    <h3><a href="https://calculator-theta-steel-98.vercel.app/">Visit site</a></h3>
                </div>
                <div className="project_card">
                    <img src={Wthr} alt="" />
                    <br /><br />
                    <h2>Weather Dashboard</h2>
                    <br />
                    <p>This is a weather web app which is made with HTML, CSS, JavaScript and API integration.</p>
                    <br />
                    <h3><a href="https://weather-dashboard-lac-eight.vercel.app/">Visit site</a></h3>
                </div>
            </div>
            <br />
            <div className="project_cards2">
                <div className="project_card">
                    <img src={Trbte} alt="" />
                    <br /><br />
                    <h2>Tribute Page</h2>
                    <br />
                    <p>This is a tribute web page in which you can give tribute to you idol. It is made with HTML and CSS.</p>
                    <br />
                    <h3><a href="https://tribute-page-ashen-delta.vercel.app/">Visit site</a></h3>
                </div>
                <div className="project_card">
                    <img src={Sptfy} alt="" />
                    <br /><br />
                    <h2>Spotify Clone</h2>
                    <br />
                    <p>This is a spotify clone made with HTML and CSS.</p>
                    <br />
                    <h3><a href="https://spotify-clone-lake-eta.vercel.app/">Visit site</a></h3>
                </div>
                <div className="project_card">
                    <img src={Ntflx} alt="" />
                    <br /><br />
                    <h2>Netflix Clone</h2>
                    <br />
                    <p>This is a netflix clone which is made with HTML and CSS.</p>
                    <br />
                    <h3><a href="https://netflix-clone-web-dev.vercel.app/">Visit site</a></h3>
                </div>
            </div>
            <br />
            <div className="project_cards3">
                <div className="project_card">
                    <img src={Gft} alt="" />
                    <br /><br />
                    <h2>Gift Suggestion AI</h2>
                    <br />
                    <p>This is a gift suggestion webpage in which you will get gift suggestions based on your preferences. It is made with HTML, CSS, API integration.</p>
                    <br />
                    <h3><a href="https://ai-generated-gifts.vercel.app/">Visit site</a></h3>
                </div>
                <div className="project_card">
                    <img src={Tdo} alt="" />
                    <br /><br />
                    <h2>Todo List</h2>
                    <br />
                    <p>This is a todo web app which is made with HTML, CSS and JavaScrip</p>
                    <br />
                    <h3><a href="https://to-do-list-blue-kappa.vercel.app/">Visit site</a></h3>
                </div>
                <div className="project_card">
                    <img src={Tmprtre} alt="" />
                    <br /><br />
                    <h2>Temperature Converter</h2>
                    <br />
                    <p>A temperature converter web app in which you can convert the different temperature degrees into celcius, farehnite and kelvin. It is made with HTML, CSS, JavaScript.</p>
                    <br />
                    <h3><a href="https://temperature-convertor-xi.vercel.app/">Visit site</a></h3>
                </div>
            </div>
            <br />
            <div className="project_cards4">
                <div className="project_card">
                    <img src={anmntd} alt="" />
                    <br /><br />
                    <h2>Animated Website</h2>
                    <br />
                    <p>This is an animated website in which you can enjoy the smooth user experience with beautiful animations. It is made with HTML, CSS, JavaScript.</p>
                    <br />
                    <h3><a href="https://animated-project-delta.vercel.app/">Visit site</a></h3>
                </div>
                <div className="project_card">
                    <img src={figma} alt="" />
                    <br /><br />
                    <h2>Figma Converted Website</h2>
                    <br />
                    <p>This website is converted from a figma design. It is a Figma project and it is made with React.</p>
                    <br />
                    <h3><a href="https://figma-converted-xi.vercel.app/">Visit site</a></h3>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Projects
