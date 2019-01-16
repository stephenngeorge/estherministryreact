import React, { Component } from 'react'
import { Spring } from 'react-spring'

// import child components
import { ContactText, ContactLinks } from './ContactPageComponents'

export default class ContactPage extends Component {

  componentDidMount() {
    window.scrollTo(0, 0)
  }

  render() {
    return (
      <Spring from={ {opacity: 0} } to={ {opacity: 1} }>
        {
          props => (
            <div style={ props }>
              <div className='contact-page'>
                <div className='content'>
                  <ContactText />
                  <ContactLinks />
                </div>
              </div>      
            </div>
          )
        }
      </Spring>
    )
  }
}