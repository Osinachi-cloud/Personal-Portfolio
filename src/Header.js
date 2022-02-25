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
                                            'Java Developer!', 
                                            1000,
                                            'React Developer',
                                            1000,
                                            'Microservices Dev',
                                            1000,
                                            'SQL Dev',
                                            1000,
                                            'Full Stack Dev',
                                            1000,
                                            'Your favorite Agile dev',
                                            2000

                                        ]}

                                    />
                                </p>
                        </div>
                        
                        <div className="intro">Ogbodo Uchenna <span></span></div>
                        <br/>
                        <div className="short__description">
                        Software Enginner with Proficiency in JAVA, Javascript
                        REACT, Spring, Node and SQL. I eagerly work towards being a great contributor to the world largest Tech ecosystems.
                        <br/> <br/>When you are tough on yourself , life is going to be infinitely easier on you!<br/> -Zig Ziglar

 

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
