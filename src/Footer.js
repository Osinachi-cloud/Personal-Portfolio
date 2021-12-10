import React from 'react'
import './Footer.css'
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import YouTubeIcon from '@material-ui/icons/YouTube';


function Nav() {
    return (
      
        <div id="socials">
        <div id="calculator">
           



            <div id="keyboard">
              
                <button className="operator" id="clear">
                    <a href="https://web.facebook.com/uchenna.osinachi.9">
                                <FacebookOutlinedIcon style={{color:"#3b5998"}}/>
                    </a> 

                </button>
            


                <button className="operator" id="backspace">
                    <a href="https://www.linkedin.com/in/uchenna-ogbodo-48323b1b4/">
                                <LinkedInIcon style={{color:"#0077b5"}}/>
                    </a> 
                </button>
                <button className="operator" id="%">
                    <a href="https://github.com/Osinachi-cloud">
                                <GitHubIcon style={{color:"black"}}/>
                    </a> 

                </button>
                <button className="operator" id="/">
                    <a href="https://www.youtube.com/channel/UCGav2-7WtEQdwH-lwabIbUA">
                            <YouTubeIcon style={{color:"red"}} />
                    </a> 

                </button>
            </div>


        </div>
        <div className="copy-right">
                <p>CopyRight-@Osinachi</p>

        </div>
    </div>
    

    )
}

export default Nav

