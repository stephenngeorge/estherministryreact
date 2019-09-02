import React from 'react'

// import child components
import HeroLinks from './HeroLinks'
import HeroText from './HeroText'

export default () => (
  <div className='hero' role='banner'>
    <HeroLinks />
    <HeroText />
  </div>
)