/**
 * COVER IMAGE
 * 
 * CoverImage component displays an image from a given source
 * in a container div. It is full-width and uses object-fit
 * to ensure that the image always fills the container
 * 
 * @todo install and import object-fit polyfill
 * 
 * Additional classes can be passed via props as an array of 
 * string and used for styles/animations
 * An ID for the image can also be passed for similar purposes
 * 
 */

import React from 'react'
import PropTypes from 'prop-types'

import defaults from './defaults'

import './cover-image.scss'

const CoverImage = props => {
    // extract props
    const {
        additional_classes,
        alt_text,
        file_path,
        image_id
    } = props

    // warn about defaults
    if (alt_text === defaults.alt_text.value) console.warn(defaults.alt_text.warning)
    return (
        <div className={`
            cover-image cover-image__image-container ${additional_classes.join(' ')}
        `}>
            <img    src={ file_path }
                    alt={ alt_text }
                    id={ image_id }
            />
        </div>
    )
}

CoverImage.propTypes = {
    additional_classes: PropTypes.array,
    alt_text: PropTypes.string,
    file_path: PropTypes.string.isRequired,
    image_id: PropTypes.string
}

CoverImage.defaultProps = {
    additional_classes: defaults.additional_classes.value,
    alt_text: defaults.alt_text.value,
    image_id: defaults.image_id.value
}

export default CoverImage