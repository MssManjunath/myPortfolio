import React,{useState,useEffect,useRef} from "react"
import mainLogo from "../assests/main_logo.png"
import emailjs from 'emailjs-com'
import phone from "../assests/phone-1.jpg"
export default function Contact(){
    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_zil5oso', 'template_zdpsdcf', form.current, 'i-P7o958HGHVlVjeV')

    
      .then((result) => {
          console.log(result.text);
          e.target.reset()
      }, (error) => {
          console.log(error.text);
      });
    };
    return (
          <div className="contactMe">
            {/* <div className="contact-info">
              <div className="contact-info-title">
                My Contact Information
              </div>
              <div>

              </div>
            </div>
            <div >
            <div className="contactMe-title">
                <h1>Contact Me</h1>
            </div>
        <form onSubmit={sendEmail} className="contact-form">
        <div className="txt_field">
          <input type="text" required />
          <span></span>
          <label>Email</label>
        </div>
        <div className="txt_field">
          <input type="password" required />
          <span></span>
          <label>Password</label>
        </div>
        <div className="txt_field">
          <textarea required />
          <span></span>
          <label>Message</label>
        </div>
        
        <div className='btn-layout-2'>
        <button type='submit' className='btn-primary-1'>Send Message</button>
        </div>
      </form>  
      </div> 
      <div className="phone-image">
        <img src = {phone} />
      </div> */}
        </div>
    )
}
