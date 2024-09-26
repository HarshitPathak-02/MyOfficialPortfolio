import React from 'react'
import './navbar.css';
import Pic from '../../Assets/pic.jpg'
import { RiContactsFill } from "react-icons/ri";


const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="navbar_left">
            <img src={Pic} alt="Harshit Pathak" style={{height:'4rem', width:'4rem', borderRadius:'50%'}}/>
            <h1 style={{color:'white'}}>Harshit Pathak</h1>
        </div>
        <div className="navbar_links">
            <h4><a href="#home">Home</a></h4>
            <h4><a href="#aboutme">About</a></h4>
            <h4><a href="#skills">Skills</a></h4>
            <h4><a href="#projects">Projects</a></h4>
        </div>
        <div className="navbar_contact-btn">
            <h4><RiContactsFill/><a href="#footer">Contact me</a></h4>
        </div>

    </div>
  )
}

export default Navbar
