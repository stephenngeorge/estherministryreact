/**
 * HERO TEXT
 * 
 * HeroText component displays a heading with supporting 
 * text. Comprises <Title /> and <PlainText /> components 
 * which can be found in the 'atoms' directory
 * 
 * Additional classes can be passed as an array of string 
 * and used for styling/animation purposes
 * 
*/

import React from 'react'
import PropTypes from 'prop-types'

import defaults from './defaults'

import { Title, PlainText } from '../../00-atoms'

const HeroText = props => {
    const {
        additional_classes,
        body_text,
        heading_text
    } = props

    return (
        <div className={`hero-text ${additional_classes.join(' ')}`}>
            <Title heading_level={ 1 } heading_text={ heading_text } />
            <PlainText text={ body_text } />
        </div>
    )
}

HeroText.propTypes = {
    additional_classes: PropTypes.array,
    body_text: PropTypes.string.isRequired,
    heading_text: PropTypes.string
}

HeroText.defaultProps = {
    additional_classes: defaults.additional_classes.value,
    heading_text: defaults.heading_text.value
}

export default HeroText