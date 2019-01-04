import React from 'react'

// import child components
import { ContactText, ContactLinks } from './ContactPageComponents'

export default () => (
  <div className='contact-page'>
    <div className='content'>
      <ContactText />
      <ContactLinks />
    </div>
  </div>
)