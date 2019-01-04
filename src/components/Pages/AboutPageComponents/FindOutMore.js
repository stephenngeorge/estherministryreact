import React from 'react';
import { Link } from 'react-router-dom';

const FindOutMore = () => (
  <div className='find-out-more'>
    <div className='content'>
      <p>Find out more, enquire<br />about booking a course:</p>
      <Link to='/contact'>GET IN TOUCH</Link>
    </div>
  </div>
);


export default FindOutMore
