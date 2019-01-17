import React from 'react'

import facebook_icon from '../../../assets/facebook-icon.png'
import instagram_icon from '../../../assets/instagram-icon.png'
import email_icon from '../../../assets/email-icon.png'

export default () => (
    <ul className='hero-links'>
        <li>
            <a  href='https://www.facebook.com/estherministryuk/'
                target='_blank'
                rel='noopener noreferrer'
            >
                <img src={ facebook_icon } alt='facebook-icon' />
            </a>
        </li>
        <li>
            <a  href='https://www.instagram.com/estherministry/'
                target='_blank'
                rel='noopener noreferrer'
            >
                <img src={ instagram_icon } alt='instagram-icon' />
            </a>
        </li>
        <li>
            <a  href='mailto:rowena@estherministry.org.uk?Subject=Website%20Enquiry'
                target='_blank'
                rel='noopener noreferrer'
                id='email-icon'
            >
                <img src={ email_icon } alt='email-icon' />
            </a>
        </li>
    </ul>
)