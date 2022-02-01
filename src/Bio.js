import React from 'react'
import './Bio.css'
// import Skills from './Skills'
// import Skill from './Skill'

import Shortbio from './Shortbio';
import Skill from './Skill';


function Bio() {
    return (
     


        <div className="bio" id="about">
            <div className="first-col">
                 <Shortbio/>
            </div>
{/*             
            <div className="second-col">
                 <Skill/>
            </div> */}
            
            
            <div className="second-col">
                 <Skill/>
            </div>
                    {/* <Skills/> */}
        </div>

  

            
        
    )
}

export default Bio
