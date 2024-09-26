import React from 'react'
import './footer.css'
import { FaHeart } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <div id='footer'>
        <div className="page"></div>
        <div id="footers">
          <h1 id='buildh1'>Let's build something <span id='cool'>cool</span> together!</h1>
          <h3>I'am interested in ...</h3>
          <div className="int-boxes">
            <div className="int-box" id='ecocard'>
              <h4 id='ecoh4'>Ecommerce Website</h4>
            </div>
            <div className="int-box">
              <h4>Blog Website</h4>
            </div>
            <div className="int-box">
              <h4 id='porth4'>Portfolio Website</h4>
            </div>
          </div>
          <div className="int-boxes">
            <div className="int-box">
              <h4>Landing Page</h4>
            </div>
            <div className="int-box">
              <h4>Many more ...</h4>
            </div>
          </div>
          <h1 id='contacth1'>For contacting me...</h1>
          <h4 id='clickh4'>Click on the mail button</h4>
          <a href="mailto:harshitpathak.hp567@gmail.com" style={{textDecoration:'none',color:'#331c52'}}><MdEmail id='mail_icon'/></a>
          <div className="footer-end">
            <p>Built by <span style={{color:'#8121d0'}}>Harshit Pathak</span> with <FaHeart style={{color:'red'}} id='heart_icon'/></p>
          </div>
        </div>
    </div>
  )
}

export default Footer
