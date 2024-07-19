import React from 'react'
import './footer.css'
import { FaHeart } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <div id='footer'>
        <div className="page5"></div>
        <div id="footers">
          <h1 style={{fontSize:'4rem', color:'#291c3a',marginTop:'2rem'}}>Let's build something <span style={{color:'#8121d0'}}>cool</span> together!</h1>
          <br /><br />
          <h3 style={{fontSize:'3rem', color:'#291c3a'}}>I'am interested in ...</h3>
          <br /><br />
          <div className="int-boxes">
            <div className="int-box">
              <h4>Ecommerce Website</h4>
            </div>
            <div className="int-box">
              <h4>Blog Website</h4>
            </div>
            <div className="int-box">
              <h4>Portfolio Website</h4>
            </div>
          </div>
          <br /><br />
          <div className="int-boxes">
            <div className="int-box">
              <h4>Landing Page</h4>
            </div>
            <div className="int-box">
              <h4>Many more ...</h4>
            </div>
          </div>
          <br />
          <h1 style={{fontSize:'3rem'}}>For contacting me...</h1>
          <h4 style={{fontSize:'1.7rem'}}>Click on the mail button</h4>
          <a href="mailto:harshitpathak.hp567@gmail.com" style={{textDecoration:'none',color:'#331c52'}}><MdEmail style={{height:'5rem', width:'5rem'}}/></a>
          <div className="footer-end">
            <p>Built by <span style={{color:'#8121d0'}}>Harshit Pathak</span> with <FaHeart style={{color:'red'}}/></p>
          </div>
        </div>
    </div>
  )
}

export default Footer
