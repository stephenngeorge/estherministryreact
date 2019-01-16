import React, { Component } from 'react'

// import child components
import { ContactText, ContactLinks } from './ContactPageComponents'

export default class ContactPage extends Component {

  componentDidMount() {
    window.scrollTo(0, 0)
  }

  render() {
    return (
      <div className='contact-page'>
        <div className='content'>
          <ContactText />
          <ContactLinks />
        </div>
      </div>
    )
  }
}