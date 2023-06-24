import React from 'react';
import ContactCenter from "../contact/ContactCenter";
import LandingFooter from '../LandingFooter';
import ContactForm from '../contact/ContactForm';
import Footer from '../Footer';

function ContactPage() {
  return (
    <div className='ContactPage'>
      <div className="landing">
        <ContactCenter></ContactCenter>
        <LandingFooter></LandingFooter>
        <video className='bg' src="/contact.mp4" muted autoPlay loop></video>
        <div className="overlay"></div>
      </div>
      <div className="about">
        <div className="block">
          <ContactForm></ContactForm>
        </div>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default ContactPage