import React from 'react';
import './Programs.css';
import {ProgramsData} from "../../data/ProgramsData";
import RightArrow from "../../assets/rightArrow.png";
// const {ProgramsData} = require('../../data/ProgramsData')
const Programs = () => {
  return (
    <div className='programs' id='programs'>
         {/* Header-Programs */}
         <div className="programs-header">
           <span className='stroke-text'>Explore our</span>
           <span >Programs</span>
           <span className='stroke-text'>to shape you</span>
         </div>
         <div className="program-categories">
           {
            ProgramsData.map((program)=>(
              <div className='category'>
                  {program.image}
                  <span>{program.heading}</span>
                  <span>{program.details}</span>
                  <div className='join-now'><span>Join Now</span><img src={RightArrow} alt="rightArrow" /></div>
              </div>
            ))
           }
         </div>
    </div>
  )
}

export default Programs