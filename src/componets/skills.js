import React from "react";
import './skills.css'
export default function Skills() {
  return (
    <div>
      <p className="S-Heading">SKILLS</p>
      <div className="skills-items">
        <ul>
        <a href="#"><li className="skills-list">C++</li></a>
     
          <a href="#"><li className="skills-list">DSA</li></a>
        
        </ul>
      </div>
      <div  className="skills-items">
        <ul>
          <a href="#"  ><li className="skills-list">HTML</li></a>
          <a href="#"><li className="skills-list">JavaScript</li></a>
          <a href="#"><li className="skills-list">CSS</li></a>
          <a href="#"><li className="skills-list">MongoDB</li></a>
          <a href="#"><li className="skills-list">React</li></a>
        
        </ul>
      </div>
    </div>
  );
}
