import "./project.css";

import Wthr from "../../Assets/weather.png";
import Wndrlst from "../../Assets/wanderlust.png";
import Gft from "../../Assets/gift.png";
import figma from "../../Assets/figma.png";
import CareerSaathi from "../../Assets/careersaathi.png";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {

    useGSAP(() => {

        gsap.fromTo(
            ".proj_desc h1, .proj_desc p",
            {
                y: 50,
                opacity: 0,
            },
            {
                y: 0,
                opacity: 1,
                delay: 0.2,
                duration: 0.8,
                stagger: 0.3,
                scrollTrigger: "#projects",
            }
        );

        gsap.fromTo(
            ".project_cards1 .project_card",
            {
                opacity: 0,
                scale: 0.5,
            },
            {
                scale: 1,
                opacity: 1,
                duration: 0.7,
                stagger: 0.3,
                scrollTrigger: ".project_cards1",
            }
        );

        gsap.fromTo(
            ".project_cards2 .project_card",
            {
                opacity: 0,
                scale: 0.5,
            },
            {
                scale: 1,
                opacity: 1,
                duration: 0.7,
                stagger: 0.3,
                scrollTrigger: ".project_cards2",
            }
        );

        gsap.fromTo(
            ".project_cards3 .project_card",
            {
                opacity: 0,
                scale: 0.5,
            },
            {
                scale: 1,
                opacity: 1,
                duration: 0.7,
                stagger: 0.3,
                scrollTrigger: ".project_cards3",
            }
        );

    });

    return (
        <div id="projects">

            <div className="proj_desc">
                <h1>My Projects</h1>
                <br />
                <p>
                    A selection of projects I've built to solve
                    real-world problems and explore modern technologies.
                </p>
            </div>

            <br />
            <br />

            <div className="projects_cards">

                {/* Featured Project */}
                <div className="project_cards1">

                    <div className="project_card project_card_featured">

                        <img
                            src={CareerSaathi}
                            alt="CareerSaathi"
                        />

                        <div className="featured_badge">
                            Featured Project
                        </div>

                        <h2>CareerSaathi</h2>

                        <p>
                            An AI-powered career companion that helps students
                            identify skill gaps, build personalized technical
                            roadmaps, track their progress, and prepare for
                            software engineering careers.
                        </p>

                        <div className="project_tech">
                            React, TypeScript, Node.js, Express,
                            MongoDB, Redux Toolkit, RTK Query, AI
                        </div>

                        <h3>
                            <a
                                href="https://career-saathi-6qz6-nine.vercel.app"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Visit site
                            </a>
                        </h3>

                    </div>

                </div>

                <br />
                <br />

                {/* Existing Full Stack Projects */}
                <div className="project_cards2">

                    <div className="project_card">

                        <img
                            src={Wndrlst}
                            alt="Wanderlust"
                        />

                        <br />
                        <br />

                        <h2>Wanderlust</h2>

                        <br />

                        <p>
                            A full-stack web application for discovering and
                            managing travel listings, built using JavaScript,
                            Express.js, MongoDB and modern web technologies.
                        </p>

                        <br />

                        <h3>
                            <a
                                href="https://wanderlust-mbxk.onrender.com/listings"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Visit site
                            </a>
                        </h3>

                    </div>

                    <div className="project_card">

                        <img
                            src={Wthr}
                            alt="Weather Dashboard"
                        />

                        <br />
                        <br />

                        <h2>Weather Dashboard</h2>

                        <br />

                        <p>
                            A responsive weather application using JavaScript
                            and API integration to retrieve and display
                            real-time weather information.
                        </p>

                        <br />

                        <h3>
                            <a
                                href="https://weather-dashboard-lac-eight.vercel.app/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Visit site
                            </a>
                        </h3>

                    </div>

                    <div className="project_card">

                        <img
                            src={Gft}
                            alt="Gift Suggestion AI"
                        />

                        <br />
                        <br />

                        <h2>Gift Suggestion AI</h2>

                        <br />

                        <p>
                            An AI-powered web application that generates
                            personalized gift suggestions based on user
                            preferences and input.
                        </p>

                        <br />

                        <h3>
                            <a
                                href="https://ai-generated-gifts.vercel.app/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Visit site
                            </a>
                        </h3>

                    </div>

                </div>

                <br />
                <br />

                {/* Frontend Project */}
                <div className="project_cards3">

                    <div className="project_card">

                        <img
                            src={figma}
                            alt="Figma Converted Website"
                        />

                        <br />
                        <br />

                        <h2>Figma Converted Website</h2>

                        <br />

                        <p>
                            A responsive React frontend created by converting
                            a Figma design into a functional web experience
                            with attention to layout, responsiveness and UI
                            accuracy.
                        </p>

                        <br />

                        <h3>
                            <a
                                href="https://figma-converted-xi.vercel.app/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Visit site
                            </a>
                        </h3>

                    </div>

                </div>

            </div>

        </div>
    );
};

export default Projects;