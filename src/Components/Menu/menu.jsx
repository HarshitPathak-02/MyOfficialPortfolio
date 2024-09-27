import React from 'react'
import './menu.css'
import { AiOutlineClose } from 'react-icons/ai'

const menu = () => {
  return (
    <div className='menu_container'>
      {/* <div className="close">
        <h4 style={{color:'white'}} className='close_h4'><AiOutlineClose id='close'/></h4>
      </div> */}
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

export default menu
