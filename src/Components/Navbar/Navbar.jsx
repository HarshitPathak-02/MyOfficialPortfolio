import React from 'react'
import './navbar.css';
import Logo from '../../Assets/logo.avif'
import { RiContactsFill } from "react-icons/ri";
import LandingPhoto from "../../Assets/webPro.jpg"
import { RiMenu3Fill } from "react-icons/ri";
import { AiOutlineClose } from "react-icons/ai";
import gsap from 'gsap'
import {useGSAP} from '@gsap/react'

const Navbar = () => {
   
  useGSAP(()=>{
    let menu = document.querySelector('#menu')
    let close = document.querySelector("#close")
  
    let tl = gsap.timeline()

    tl.to('.menu_container',{
      opacity:1,
      duration:0.5
    })
    
    tl.pause()
    
    menu.addEventListener("click",()=>{
      gsap.to("#menu", {
        display:'none',
        duration:0.2
      })
      gsap.to("#close",{
        display:"block",
        duration:0.2
      })
      tl.play()
    })

    close.addEventListener("click",()=>{
      gsap.to(close,{
        display:'none',
        duration:0.2
      })
      gsap.to(menu,{
        display:'block',
        duration:0.2
      })
      tl.reverse()
    })
  })

  return (
    <div className='navbar'>
        <div className="navbar_left">
            <img src={LandingPhoto} alt="Harshit Pathak" id='pic'/>
            <h1 style={{color:'white'}} id='hp'>Harshit Pathak</h1>
        </div>
        <div className="navbar_links">
            <h4><a href="#home">Home</a></h4>
            <h4><a href="#aboutme">About</a></h4>
            <h4><a href="#skills">Skills</a></h4>
            <h4><a href="#projects">Projects</a></h4>
            <h4 className='navbar_contact-btn'><RiContactsFill/><a href="#footers">Contact me</a></h4>
        </div>
        <div className="menu">
          <h4 style={{color:'white'}} className='menu_h4'><RiMenu3Fill id='menu'/></h4>
        </div>
        <div className="close">
          <h4 style={{color:'white'}} className='close_h4'><AiOutlineClose id='close'/></h4>
        </div>
    </div>
  )
}

export default Navbar
