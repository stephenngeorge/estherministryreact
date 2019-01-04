import React from 'react';

// import child components
import { Bibleverse, Description, FindOutMore, Review } from './AboutPageComponents'

const AboutPage = () => (
  <div className='page about-page'>
    <Description />
    <FindOutMore />
    <Bibleverse />
    <Review />
  </div>
);

export default AboutPage