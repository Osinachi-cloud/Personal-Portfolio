import React from 'react'
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import YouTubeIcon from '@material-ui/icons/YouTube';
import './Shortbio.css'

function Shortbio() {
    return (
        <div className="short__bio ">
        <div className="divider__topic">
            <span className="about"> About  Me</span>
        </div>
        
        <h1 className="bio__title">I am a full stack MERN Developer  </h1>
        
        <p className="bio__description">
        <br/>

            I am a Software Enginner currently at Decagon with Knowledge in JAVA, Javascript
             REACT, and Spring, SQL. <br/> I Passionately look forward to working in an environment that massively promotes career Growth in TECH.
 
        
            
        </p>
    
            <div className="socialIcon__box">

            
                    <a href="https://web.facebook.com/uchenna.osinachi.9">
                            <FacebookIcon/> 
                    </a> 
                    <a href="https://www.linkedin.com/in/uchenna-ogbodo-48323b1b4/">
                            <LinkedInIcon/>
                    </a> 
                    <a href="https://github.com/Osinachi-cloud">
                            <GitHubIcon/>
                    </a> 
                    <a href="https://www.youtube.com/channel/UCGav2-7WtEQdwH-lwabIbUA">
                            <YouTubeIcon/>
                    </a> 
            

            </div>




</div>
    )
}

export default Shortbio
