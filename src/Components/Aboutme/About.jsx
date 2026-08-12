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
            <p style={{textAlign:"justify"}}>
Hey there! 👋 I'm Harshit Pathak, a Full Stack Developer passionate about building practical, scalable, and user-focused web applications. I work primarily with JavaScript, TypeScript, React, Node.js, Express, MongoDB, and modern full-stack technologies.

Over the past few years, I've worked on real-world applications across web and mobile development, building features such as authentication, REST APIs, database systems, payment integration, caching, AI-powered functionality, and production-oriented backend architectures. I enjoy understanding how systems work internally and turning complex requirements into clean, maintainable solutions.

One of my recent projects is <strong>CareerSaathi</strong>, an AI-powered career companion designed to help students understand their career goals, identify skill gaps, build personalized technical roadmaps, track progress, and prepare for their careers. I built it with a focus on practical product design, modular architecture, and real-world full-stack development.

Beyond writing code, I care about software architecture, clean code, performance, user experience, and solving problems in a way that makes applications easier to maintain and scale. I'm continuously improving my understanding of data structures, system design, databases, and core computer science while building and refining real-world projects.

I'm always open to challenging problems, meaningful products, and opportunities where I can learn, contribute, and grow as a software engineer.

</p>

        </div>
    </div>
  )
}

export default About
