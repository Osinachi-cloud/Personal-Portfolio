import React from 'react'
import './Bio.css'
import Skills from './Skills'
// import Skill from './Skill'

import Shortbio from './Shortbio';
import Skill from './Skill';


function Bio() {
    return (
     


        <div className="bio" id="about">
                   <Shortbio/>
                    {/* <Skills/> */}
                    <Skill/>
        </div>

  

            
        
    )
}

export default Bio
