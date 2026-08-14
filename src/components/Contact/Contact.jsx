import React from 'react';
import  './Contact.css';
import message_icon from '../../assets/msg-icon.png';
import mail_icon from '../../assets/mail-icon.png';
import phone_icon from '../../assets/phone-icon.png';
import location_icon from '../../assets/location-icon.png';
import white_arrow from '../../assets/white-arrow.png'


const Contact = () => {
  return (
    <div className='contact'>
      <div className="contact-col">
        <h3>Send us a message<img src={message_icon}/></h3>
        <p>
            Feel free to reach out through contact fromor find our contact infomation below. Your feedback, questions and suggestions are important to us as we strive to provide exceptional services to our university community

        </p>
        <ul>
            <li> <img src={mail_icon}/>contact@deltalogics.dev</li>
            <li><img src={phone_icon}/>+254742091562</li>
            <li><img src={location_icon}/>Nairobi, kenya <br/>Monrovia Street</li>
        </ul>
      </div>
      <div className="contact-col">
        <form>
            <label htmlFor="name">Your name</label>
            <input type="text" name='name' id='name' placeholder='James' required />
            <label htmlFor="tel">Phone Number</label>
            <input type="tel" name="phone" id="tel" placeholder='0742091562' required />
            <label htmlFor="message">Message</label>
            <textarea name="message" id="message" placeholder='write your message'  required></textarea>
            <button onClick={} className='btn dark-btn'>Submit<img src={white_arrow}</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
