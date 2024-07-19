import React from 'react'
import './skills.css'
import C from '../../Assets/css.png'
import Boot from '../../Assets/bootstrap.png'
import H from '../../Assets/html.png'
import R from '../../Assets/react.png'
import N from '../../Assets/node.png'
import E from '../../Assets/express.png'
import Py from '../../Assets/python.png'
import Ja from '../../Assets/java.png'
import Mongo from '../../Assets/mongo.png'
import JS from '../../Assets/js.png'

const Skills = () => {
  return (
    <div id='skills'>
        <div className="skills_desc">
            <h1 style={{fontSize:'5.5rem',color:'#291c3a'}}>My Skills</h1>
            <br />
            <p style={{fontSize:'2rem',color:'#331c52'}}>Technologies I've been wroking with</p>
            <br /><br />
            <div className="skills_boxes">
            <div className="skills_boxes1">
                <div className="skills_box">
                    <img src={C} alt="CSS"/>
                </div>
                <div className="skills_box">
                    <img src={Boot} alt="CSS"/>
                </div>
                <div className="skills_box">
                    <img src={H} alt="CSS"/>
                </div>
                <div className="skills_box">
                    <img src={JS} alt="CSS"/>
                </div>
                <div className="skills_box">
                    <img src={Mongo} alt="CSS"/>
                </div>
            </div>
            <div className="skills_boxes2">
            <div className="skills_box">
                    <img src={R} alt="CSS"/>
                </div>
                <div className="skills_box">
                    <img src={E} alt="CSS"/>
                </div>
                <div className="skills_box">
                    <img src={N} alt="CSS"/>
                </div>
                <div className="skills_box">
                    <img src={Py} alt="CSS"/>
                </div>
                <div className="skills_box">
                    <img src={Ja} alt="CSS"/>
                </div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Skills
