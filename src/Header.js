import React from 'react'
// import  jsPDF  from "jspdf";
import './Header.css'
import Typical from 'react-typical';




function Header() {




    return (
        <div className="header" >
       

            <div className="profile__picture">
                <img src="/osinachi.png" alt="my-profile-pix"/>
            </div>
            <br/>


            <div className="summary__container">

                <div className="title__box">

                        <div className="title">
                                <p>
                                    {/* I am a {' '} */}

                                        <Typical
                                        loop={Infinity}
                                        wrapper="span"
                                        steps={[
                                            'Software Dev', 
                                            1000, 
                                            'Web Developer!', 
                                            1000,
                                            'MERN Stack',
                                            1000,
                                            'Cross Platform Dev',
                                            1000,
                                            'React_Native',
                                            1000,
                                            'Frontend Dev',
                                            1000,
                                            'Your favorite dev',
                                            2000

                                        ]}

                                    />
                                </p>
                        </div>
                        
                        <div className="intro">Ogbodo Uchenna <span></span></div>
                        <br/>
                        <div className="short__description">
                        I am a Software Developer with three years 
                        tangible experience in web development
                        technology, Agile Leadership, enthusiastic about 
                        intelligence and Robotics.

                        </div>

                        <div className="buttons">
                            <button  className="get__resume"><a href="ogbodo-uchenna.pdf" target="_blank">View Resume</a></button>
                            <button  className="hire__me"><a href="#contact">Hire Me</a></button>
                            
                        </div>




                </div>
                
            </div>

           
           
            
         
          

            
        </div>
    )
}

export default Header
