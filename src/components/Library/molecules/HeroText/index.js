/**
 * HERO TEXT
 * 
 * HeroText component displays a heading with supporting 
 * text. Comprises <Title /> and <PlainText /> components 
 * which can be found in the 'atoms' directory
 * 
*/

import React from 'react'
import PropTypes from 'prop-types'

import defaults from './defaults'

import { Title, PlainText } from '../../atoms'

const HeroText = props => {
    // extract props
    const {
        heading_text,
        body_text
    } = props

    return (
        <div className='hero-text'>
            <Title heading_level={ 1 } heading_text={ heading_text } />
            <PlainText text={ body_text } />
        </div>
    )
}

HeroText.propTypes = {
    body_text: PropTypes.string.isRequired,
    heading_text: PropTypes.string
}
// set default props
HeroText.defaultProps = {
    heading_text: defaults.heading_text.value
}

export default HeroText