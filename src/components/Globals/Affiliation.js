import React from 'react'

// import assets
import ijm_logo from '../../assets/ijm_logo.jpg'

export default () => (
  <div className='affiliation' role='contentinfo'>
    <a href='https://www.ijm.org/' target="_blank" rel="noopener noreferrer" aria-label='link to International Justice Mission homepage'>
      <img src={ ijm_logo } alt='ijm-logo' />
    </a>
    <p>Esther Ministry is proud to support<br />
      <a  href='https://www.ijm.org/'
          target="_blank" rel="noopener noreferrer"
          aria-label='link to International Justice Mission homepage'>
            'International Justice Mission'
      </a>
    </p>
  </div>
)