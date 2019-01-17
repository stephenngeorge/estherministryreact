import React from 'react'

// import assets
import ijm_logo from '../../assets/ijm_logo.jpg'

export default () => (
  <div className='affiliation'>
    <a href='https://www.ijm.org/' target="_blank" rel="noopener noreferrer">
      <img src={ ijm_logo } alt='ijm-logo' />
    </a>
    <p>Esther Ministry is proud to support<br /><a href='https://www.ijm.org/' target="_blank" rel="noopener noreferrer">'International Justice Mission'</a></p>
  </div>
)