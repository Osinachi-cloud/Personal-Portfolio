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
        
        <h1 className="bio__title">I am a Software Developer with a passion to teach</h1>
        
        <p className="bio__description">
        <br/>
        My name is Ogbodo Uchenna. I am mostly adressed by my other name, Osinachi. 2015, During my University days
         at university of Port-Harcourt, Nigeria, studing Chemical Engineering,
        I gained experience with robotics Engineering as an Intern which ignited my passion for software technology; 
        I then desided to go futher into software Engineering. 
         2019, I realized that people around me also developed interest in tech and that inspired me to teach them.
        I have taught several, from beginner level to junior level and I still aspire to mentor thousands more.
        <br/> as for my hobies, I like playing the piano and the bass. I also like critical analysis, breaking down big moulds
         into dissolvable particles as my problem solving principle. I just find myself doing it with software the most.
        
            
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
