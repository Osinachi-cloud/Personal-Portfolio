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
        
        <h1 className="bio__title">I am a Software Developer with a passion to teach </h1>
        
        <p className="bio__description">
        <br/>
        My name is Ogbodo Uchenna. I mostly adressed by my other name, Osinachi. 2015, During my University days
         at university of Port-Harcourt, Nigeria, studing Chemical Engineering
        I gained experience with robotics Engineering as an Intern which inspired my passion for technology. 
        I then aspired to futher in software Engineering. 
         2019, I realized that people around me also developed interest in tech and that inspired me to teach people.
        I have taught about 10 people, from beginner level to junior level and I still aspire to mentor thousands more.
        
            
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
