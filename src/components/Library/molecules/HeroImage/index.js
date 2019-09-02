/**
 * HERO IMAGE
 * 
 * HeroImage component displays a full-width image 
 * with configurable height and alt text
 * "Hero" images are designed to be used at the top of 
 * a page, but this component could theoretically be used 
 * in-page as well
 * 
 * Additional classes can be passed via props as an array 
 * of strings and used for styling and/or animations
 * 
 */

import React from 'react'
import PropTypes from 'prop-types'

import defaults from './defaults'

import './hero-image.scss'

import { CoverImage } from '../../atoms'

const HeroImage = props => {
    // extract props
    const {
        additional_classes,
        alt_text,
        div_height,
        image_url
    } = props

    const classes = additional_classes.join(' ')
    // warn about defaults
    if (div_height === defaults.div_height.value) console.warn(defaults.div_height.warning)

    const divStyles = {
        height: `${ div_height.toString() }vh`
    }

    return (
        <div className={`hero-image ${classes}`} style={ divStyles }>
            <CoverImage alt_text={ alt_text }
                        file_path={ image_url }
            />
        </div>
    )
}

HeroImage.propTypes = {
    additional_classes: PropTypes.array,
    alt_text: PropTypes.string,
    div_height: PropTypes.number,
    image_url: PropTypes.string.isRequired
}
// define default prop values
HeroImage.defaultProps = {
    additional_classes: defaults.additional_classes.value,
    div_height: defaults.div_height.value
}

export default HeroImage