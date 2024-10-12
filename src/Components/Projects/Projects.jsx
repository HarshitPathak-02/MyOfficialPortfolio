import React from 'react'
import './project.css'
import Wthr from '../../Assets/weather.png'
import Wndrlst from '../../Assets/wanderlust.png'
import Gft from '../../Assets/gift.png'
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
                    <img src={Wthr} alt="" />
                    <br /><br />
                    <h2>Weather Dashboard</h2>
                    <br />
                    <p>This is a weather web app which is made with HTML, CSS, JavaScript and API integration.</p>
                    <br />
                    <h3><a href="https://weather-dashboard-lac-eight.vercel.app/">Visit site</a></h3>
                </div>
                <div className="project_card">
                    <img src={Gft} alt="" />
                    <br /><br />
                    <h2>Gift Suggestion AI</h2>
                    <br />
                    <p>Developed a website that uses an API to suggest personalized gift options based on user input. Utilized HTML, CSS, API Integration and JavaScript for user interface and functionality.</p>
                    <br />
                    <h3><a href="https://ai-generated-gifts.vercel.app/">Visit site</a></h3>
                </div>
            </div>
            <br />
            <br />
            <div className="project_cards4">
                <div className="project_card">
                    <img src={anmntd} alt="" />
                    <br /><br />
                    <h2>Animated Website</h2>
                    <br />
                    <p>Created a fully animated website using HTML, CSS, and JavaScript. Integrated hover effects, animated loaders, and footers to improve user interaction and experience.</p>
                    <br />
                    <h3><a href="https://animated-project-delta.vercel.app/">Visit site</a></h3>
                </div>
                <div className="project_card">
                    <img src={figma} alt="" />
                    <br /><br />
                    <h2>Figma Converted Website</h2>
                    <br />
                    <p>Developed a front-end project by converting a Figma design into a fully functional, responsive website using ReactJS, CSS, and JavaScript. Focused on accuracy and attention to detail while ensuring pixel-perfect design translation.</p>
                    <br />
                    <h3><a href="https://figma-converted-xi.vercel.app/">Visit site</a></h3>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Projects
