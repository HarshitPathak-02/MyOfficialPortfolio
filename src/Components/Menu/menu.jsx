import React from 'react'
import './menu.css'
import { AiOutlineClose } from 'react-icons/ai'


const Menu = () => {
  return (
    <div className='menu_container'>
      <div id='skills_head'>
        <a href="#skills"><h2>Skills</h2></a>
      </div>
      <div id='projects_head'>
        <a href="#projects"><h2>Projects</h2></a>
      </div>
      <div id='contact_head'>
        <a href="#footers"><h2>Contact</h2></a>
      </div>
    </div>
  )
}


export default Menu
