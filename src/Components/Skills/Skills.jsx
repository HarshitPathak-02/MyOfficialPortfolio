import React from "react";
import "./skills.css";
import C from "../../Assets/css.png";
import Boot from "../../Assets/bootstrap.png";
import H from "../../Assets/html.png";
import R from "../../Assets/react.png";
import N from "../../Assets/node.png";
import E from "../../Assets/express.png";
import Py from "../../Assets/python.png";
import Ja from "../../Assets/java.png";
import Mongo from "../../Assets/mongo.png";
import JS from "../../Assets/js.png";
import Chart from "../../Assets/chart.png";
import gsap from 'gsap'
import { useGSAP } from "@gsap/react";
import {ScrollTrigger} from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);


const Skills = () => {

  useGSAP(()=>{
    gsap.fromTo(".skills_desc h1, .skills_desc p",{
      opacity:0,
      scale:0.5,
    },{
      opacity:1,
      scale:1,
      duration:1,
      delay:0.1,
      scrollTrigger: ".skills_container"
    })

    gsap.fromTo(".skills_box", {x:1000,opacity:0},{
      opacity:1,
      x:0,
      duration:0.7,
      stagger:0.1,
      scrollTrigger: ".skills_container"
    })

    gsap.fromTo(".chart",{opacity:0,scale:0.5},{
      scale:1,
      opacity:1,
      duration:0.7,
      scrollTrigger:".chart"
    })
  })


  return (
    <div id="skills">
      <div className="skills_container">
        <div className="skills_desc">
          <div>
            <h1>My Skills</h1>
          </div>
          <div>
            <p>Technologies I've been wroking with</p>
          </div>
          <br />
          <div className="skills_boxes">
            <div className="skills_boxes1">
              <div className="skills_box">
                <img src={C} alt="CSS" />
              </div>
              <div className="skills_box">
                <img src={Boot} alt="CSS" />
              </div>
              <div className="skills_box">
                <img src={H} alt="CSS" />
              </div>
              <div className="skills_box" id="js">
                <img src={JS} alt="JS" />
              </div>
              <div className="skills_box" id="mongo">
                <img src={Mongo} alt="CSS" />
              </div>
            </div>
            <div className="skills_boxes2">
              <div className="skills_box">
                <img src={R} alt="CSS" />
              </div>
              <div className="skills_box">
                <img src={E} alt="CSS" />
              </div>
              <div className="skills_box">
                <img src={N} alt="CSS" />
              </div>
              <div className="skills_box" id="py">
                <img src={Py} alt="CSS" />
              </div>
              <div className="skills_box" id="java">
                <img src={Ja} alt="CSS" />
              </div>
            </div>
            <div className="skills_boxes3">
              <div className="skills_box">
                <img src={JS} alt="CSS" />
              </div>
              <div className="skills_box">
                <img src={Mongo} alt="CSS" />
              </div>
              <div className="skills_box">
                <img src={Py} alt="CSS" />
              </div>
            </div>
            <div className="skills_boxes4">
              <div className="skills_box">
                <img src={Ja} alt="CSS" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <img
          class = "chart"
          src={Chart}
          alt=""
          style={{ width: "100rem", marginLeft: "-5rem" }}
        />
      </div>
    </div>
  );
};

export default Skills;
