import React from 'react'
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import YouTubeIcon from '@material-ui/icons/YouTube';
import { Link } from 'react-router-dom';
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

            I am a Software Enginner currently at Decagon with Knowledge in JAVASCRIPT,
             REACT, NODE JS, and JAVA and AGILE. I am really enthusiastic about learning new technologies
            and I am quite futuristic about providing global solutions anywhere anytime. 
 
        
            
        </p>
    
            <div className="socialIcon__box">

            
                    <Link to="/https://web.facebook.com/uchenna.osinachi.9">
                            <FacebookIcon/>
                    </Link> 
                    <Link to="https://www.linkedin.com/in/uchenna-ogbodo-48323b1b4/">
                            <LinkedInIcon/>
                    </Link> 
                    <Link to="https://github.com/Osinachi-cloud">
                            <GitHubIcon/>
                    </Link> 
                    <Link to="https://www.youtube.com/channel/UCGav2-7WtEQdwH-lwabIbUA">
                            <YouTubeIcon/>
                    </Link> 
            

            </div>




</div>
    )
}

export default Shortbio
