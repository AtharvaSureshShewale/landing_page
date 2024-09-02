import React from 'react';
import './ContactMe.css';
import ContactInfoCard from './ContactInfoCard/ContactInfoCard';
import ContactForm from './ContactForm/ContactForm';

function ContactMe() {
  return (
    <section className="contact-container" id="contactme">
        <h5>Contact Us</h5>
        <div className="contact-content">
            <div className="contact-info">
              <div style={{flex:1}} className='contact1'>
                <ContactInfoCard 
                linkUrl="mailto:codestars@gmail.com"
                iconUrl="./assets/images/email.png" 
                text="codestars@gmail.com"
                />
                <ContactInfoCard 
                linkUrl="https://github.com/Codestars"
                iconUrl="./assets/images/github.png" 
                text="https://github.com/Codestars"
                />
              </div>
              <div style={{flex:1}} className="contact2">
              <ContactInfoCard 
                iconUrl="./assets/images/linkedin.png" 
                text="https://www.linkedin.com/in/codestars-3224122b5/"
                linkUrl="https://www.linkedin.com/in/codestars-3224122b5/"
                />
              <ContactInfoCard 
                iconUrl="./assets/images/instagram.png" 
                text="https://instagram.com/djsce_codestars"
                linkUrl="https://instagram.com/djsce_codestars"
                />
              </div>
            </div>
            <div style={{flex:1}}>
                <ContactForm/>
            </div>
        </div>
    </section>
  )
}

export default ContactMe
