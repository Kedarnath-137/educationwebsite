
import React from "react";
import './Contact.css'

import msg_icon from '../../assets/msg-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import white_arrow from '../../assets/white-arrow.png'


function Contact () {

    const [result, setResult] = React.useState("");   // w3forms react

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "e5f12444-424a-4c67-93d5-96b27cfb130f");
  
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      }).then((res) => res.json());
  
    //   const data = await response.json();
  
      if (res.success) {
        console.log('success', res);
        setResult(res.message);
        event.target.reset();
      } else {
        console.log("Error", res);
        setResult(res.message);
      }
    };



    return(
        <div className="contact">
          <div className="contact-col">
            <h3>Send us a message <img src={msg_icon}></img></h3>
            <p>Feel free to reach out through contact form or find our contact information 
                below. your feedback, questions, and suggestions are important to us we strive to provide exceptional service 
                to our university community.</p>    
            <ul>
                <li><img src={mail_icon}></img>Contact@Nani.com</li>
                <li><img src={phone_icon}></img>+91 733-58-369</li>
                <li><img src={location_icon}></img>77 Kedarnath A, Cambridge <br></br> MA 02139, United 
                States</li>
            </ul>
        </div>  
        <div className="contact-col">
            <form onSubmit={onSubmit}>
                <label>Enter Your name</label>
                <input type="text" name="name" placeholder="Enter your name" required></input>
                <label>Phone Number</label>
                <input type="tel" name="phone" placeholder="Enter Your mobile number" required></input>
                <label>Write your messages here</label>
                <textarea name="message"  rows='6' placeholder="enter your message" required></textarea>
                <button type="submit" className="btn dark-btn">Submit now <img src={white_arrow}></img></button>
            </form>
            <span>{result}</span>
        </div>
        </div>
    )
}

export default Contact;

