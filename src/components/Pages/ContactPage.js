import React from 'react';

// import child components
import { ContactText, ContactLinks } from './ContactPageComponents'

const ContactPage = () => (
  <div className='contact-page'>
    <div className='content'>
      <ContactText />
      <ContactLinks />
    </div>
  </div>
);

export default ContactPage
