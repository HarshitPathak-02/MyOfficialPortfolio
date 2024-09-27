import React from "react";
import "./home.css";
import Logo from "../../Assets/logo.avif"
import LandingPhoto from "../../Assets/webPro.jpg" 
import { PiHandWavingFill } from "react-icons/pi";
const Home = () => {
  return (
    <div id="home">
      <div className="home-main">
        <div className="home_left">
          <div className="h1">
            <h1>Hello</h1>
            <PiHandWavingFill style={{ color: "orange" }} />
          </div>
          <div className="h2">
            I'm a Full Stack <br/>
            Engineer
          </div>
          <br />
          <div className="h3">I build whatever comes in front ...</div>
        </div>
        <div className="right-pic">
          <img src={LandingPhoto} alt=""/>
        </div>
      </div>
      <div className="home_bottom">
        <div className="exp">
          <h1 style={{ color: "white", fontSize: "5.5rem" }}>1.5</h1>
          <h5 style={{ color: "#dccfed", fontSize: "1.7rem" }}>
            YEARS OF <br /> EXPERIENCE
          </h5>
        </div>
        <div className="proj">
          <h1 style={{ color: "white", fontSize: "5.5rem" }}>12</h1>
          <h5 style={{ color: "#dccfed", fontSize: "1.7rem" }}>
            PROJECTS COMPLETED <br /> AROUND THE WORLD
          </h5>
        </div>
      </div>
    </div>
  );
};

export default Home;
