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

            I am Ogbodo Uchenna a Software Enginner. My Career path in sofware Engineering
            seemed to be a very long path, however The Decagon Institute system has being a
            high velocity moving vehicle getting me much more ahead in my career in no time. 
            I am skilled at HTML, CSS, JAVASCRIPT, REACT, NODE JS, and currently running my
            program in JAVA and AGILE LEADERSHIP at Decagon. I am really enthusiastic about the fantastic and great learning
            experience at Decagon and I am quite certain that I am going to provide global solutions after the Program. 
 
        
            
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
