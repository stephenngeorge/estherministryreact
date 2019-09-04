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
        additionalClasses,
        bodyText,
        headingText
    } = props

    return (
        <div className={`hero-text ${additionalClasses.join(' ')}`}>
            <Title headingLevel={ 1 } headingText={ headingText } />
            <PlainText text={ bodyText } />
        </div>
    )
}

HeroText.propTypes = {
    additionalClasses: PropTypes.array,
    bodyText: PropTypes.string.isRequired,
    headingText: PropTypes.string
}

HeroText.defaultProps = {
    additionalClasses: defaults.additionalClasses.value,
    headingText: defaults.headingText.value
}

export default HeroText