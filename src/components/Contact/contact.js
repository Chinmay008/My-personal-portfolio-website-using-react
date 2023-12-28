import React,{useRef} from 'react';
import './contact.css';
import Walmart from '../../assets/walmart.png'
import Adobe from '../../assets/adobe.png'
import Microsoft from '../../assets/microsoft.png'
import Facebook from '../../assets/facebook.png'
import FacebookIcon from '../../assets/facebook-icon.png'
import TwitterIcon from '../../assets/twitter.png'
import YouTubeIcon from '../../assets/youtube.png'
import InstagramIcon from '../../assets/instagram.png'
import emailjs from '@emailjs/browser';



const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_q2az1me', 'template_l2qypbr', form.current, 'qYThtbhm5QXC-D4cS')
            .then((result) => {
                console.log(result.text);
                e.target.reset();
                alert("Email Sent !")
            }, (error) => {
              console.log(error.text);
            });
        };
  return (
    <section id='contactPage'>
        <div id='MyDreamCompany'>
            <h1 className='contactPageTitle'>My Dream companies</h1>
            <p className='companyDesc'>My dream is to work in this above "MAANG" companies.I will be very happy if I get a chance to work in this above listed companies.</p>
            <div className='companyImgs'>
                <img src={Walmart}   alt='company' className='companyImg'></img>
                <img src={Adobe}     alt='company' className='companyImg'></img>
                <img src={Microsoft} alt='company' className='companyImg'></img>
                <img src={Facebook}  alt='company' className='companyImg'></img>
            </div>
        </div>
        <div id='contact'>
            <h1 className='contactPageTitle'>Contact Me</h1>
            <span className='contactDesc'>Please fill out the form below to discuss any work opprotunities.</span>
            <form className='contactForm' ref={form} onSubmit={sendEmail}>
                <input type='text' className='name' placeholder='Your Name' name="your_name"/>
                <input type ='email' className='email' placeholder='Your Email' name='your_email'/>
                <textarea className='msg' name='message'  rows="5" placeholder='Your Message'></textarea>
                <button type='submit' value="send" className='submitBtn'>Submit</button>
                <div className='links'>
                    <img src={FacebookIcon} alt='FacebookIcon' className='link'/>
                    <img src={TwitterIcon} alt='TwitterIcon' className='link'/>
                    <img src={YouTubeIcon} alt='YouTubeIcon' className='link'/>
                    <img src={InstagramIcon} alt='InstagranIcon' className='link'/>
                </div>
            </form>
        </div>
    </section>
  )
}

export default Contact
