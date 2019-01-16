import React from 'react'
import { Spring } from 'react-spring'

// import assets
import Esther_Logo_Green from '../../../assets/Esther_Logo_Green.jpg'

export default () => (
  <div className='hero'>
    <Spring from={ {opacity: 0, marginTop: -150} }
            to={ {opacity: 1, marginTop: 0} }
            config={ {delay: 600, duration: 1000} }
    >
      {
        props => (
          <div style={ props }>
            <img src={ Esther_Logo_Green } alt='logo' id='logo_main' />
          </div>
        )
      }
    </Spring>
  </div>
)