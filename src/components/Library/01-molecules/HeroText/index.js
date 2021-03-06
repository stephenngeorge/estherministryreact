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

import './hero-text.scss'

import defaults from './defaults'

import { Title, PlainText } from '../../00-atoms'

const HeroText = props => {
    const {
        additionalClasses,
        bodyText,
        headingText,
        variation
    } = props

    if (defaults.variation.range.indexOf(variation) < 0) console.warn(defaults.variation.warning)
    return (
        <div className={`hero-textBlock ${additionalClasses.join(' ')}`}>
            <div class="content">
                <Title  headingLevel={ 1 }
                        headingText={ headingText }
                        additionalClasses={['text--site-title', 'font-weight--light']}
                />
                <PlainText text={ bodyText } />
            </div>
        </div>
    )
}

HeroText.propTypes = {
    additionalClasses: PropTypes.array,
    bodyText: PropTypes.string.isRequired,
    headingText: PropTypes.string,
    variation: PropTypes.string
}

HeroText.defaultProps = {
    additionalClasses: defaults.additionalClasses.value,
    headingText: defaults.headingText.value,
    variation: defaults.variation.value
}

export default HeroText