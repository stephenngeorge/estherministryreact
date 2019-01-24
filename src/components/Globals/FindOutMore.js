import React from 'react'
import { Link } from 'react-router-dom'

export default () => (
  <div className='find-out-more' role='complementary'>
    <div className='content'>
      <p>Find out more, enquire<br />about booking a course:</p>
      <Link to='/contact' aria-label='link to contact page'>GET IN TOUCH</Link>
    </div>
  </div>
)