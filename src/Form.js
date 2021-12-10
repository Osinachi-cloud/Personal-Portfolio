import React from 'react'
import './Form.css'
// import MailOutlineIcon from '@mui/icons-material/MailOutline';
import emailjs from 'emailjs-com';
// import { SMTPClient } from 'emailjs';
function Form() {


    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_u53xyaq', 'template_okjh7l1', e.target, 'user_DUt5kVEEmAg9JmO94t1aP')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset()
          alert('email sent sucessfully')
      };
    
    return (
        


            


            <div className="contact-section" id="contact"
             style={{
                //   backgroundImage: "url(/andrew.jpg)",
                backgroundImage: "url(/nasa.jpg)",
                  backgroundPosition:'1300px', 
                  backgroundSize:'cover' ,
                  display:'flex'}}>

                  <h2>Contact</h2>



                 <div className="contact-information">
                        <div className="contact-address">
                            <div className="add">
                                <span>Get in Touch</span>
                                {/* <MailOutlineIcon/> */}
                                <p>just a click away!</p>
                            </div>
                          

                        </div>
            
                
                <div className="g-form">

                    <form onSubmit={sendEmail}>

                            <h1>Contact Info</h1>
                            <label htmlFor="">Name</label>
                            <input type="text"  placeholder="Name" id="name" name="name"/>
                            <label htmlFor="">Email</label>
                            <input type="text"  placeholder="Email" id="email" name="email"/>
                        

                            <label htmlFor="">Message</label>
                            <textarea  id="message" cols="30" placeholder="Message" rows="10" name="message"></textarea>
                            <input className="submit" type="submit" value="submit"/>


                    </form>

                </div>

            </div>
            </div>
            
        
    )
}

export default Form
