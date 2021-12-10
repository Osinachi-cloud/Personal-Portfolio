import React from 'react'
import  jsPDF  from "jspdf";
import { Button } from 'reactstrap';
import './Header.css'
import Typical from 'react-typical';
import logo from './osinachi.png';




function Header() {

    const pdfGenerate = ()=>{
        var doc = new jsPDF('landscape','px','a4','false');
        doc.addImage(logo, 'PNG', 65,20,500,400)
        doc.addPage()
        doc.text(120,410,'Name')
        doc.save('osinachi.png')
    }



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
                            <Button onClick={pdfGenerate} className="get__resume">Get resume</Button>
                            <button  className="hire__me"><a href="#contact">Hire Me</a></button>
                            {/* <Button onClick={pdfGenerate}>download PDF</Button> */}
                        </div>




                </div>
                
            </div>

           
           
            
         
          

            
        </div>
    )
}

export default Header
