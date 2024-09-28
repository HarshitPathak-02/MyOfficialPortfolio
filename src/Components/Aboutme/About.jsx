import React from 'react'
import './about.css'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import {ScrollTrigger} from "gsap/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger);
const About = () => {

  useGSAP(()=>{
    gsap.fromTo(".aboutme_desc h1, .aboutme_desc p",{x:-100,opacity:0},{
      x:0,
      opacity:1,
      duration:0.5, 
      stagger:0.5, 
      delay:0.1,
      scrollTrigger: '#aboutme'
    })
  })


  return (
    <div id='aboutme'>
        <div className="aboutme_desc">
            <h1>About me</h1>
            <br />
            <p>Hey there! 👋 I'm Harshit Pathak, a dynamic and creative web developer with a keen eye for design and a love for crafting seamless user experiences. My journey into the world of coding started 4 years ago, and since then, I've been on a mission to turn ideas into interactive, pixel-perfect websites. I thrive on staying ahead of the curve in the ever-evolving tech landscape. Proficient in a variety of languages and frameworks, including HTML, CSS, JavaScript,React, and Express. I'm always eager to tackle new challenges and push the boundaries of what's possible on the web. Beyond just code, I have a deep appreciation for good design. I believe that a beautiful and intuitive interface is just as important as clean and efficient code. Whether it's a sleek portfolio, an e-commerce platform, or a robust web application, I strive to create digital experiences that leave a lasting impression.</p>
        </div>
    </div>
  )
}

export default About
