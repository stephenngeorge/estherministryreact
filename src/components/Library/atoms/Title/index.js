/**
 * TITLE
 * 
 * Title component displays a text heading using 
 * any level of <h> tag as specified in props, or 
 * defaulting to <h1> if no number is provided
 * 
 * Additional classes can be passed as an array 
 * of strings for styles/animations
 * An ID for the heading can also be passed for 
 * similar purposes
 * 
 */

import React from 'react'
import PropTypes from 'prop-types'

import defaults from './defaults'

const Title = props => {
    // extract props
    const {
        additional_classes,
        heading_id,
        heading_level,
        heading_text
    } = props

    const TitleTag = `h${ heading_level }`
    return (
        <TitleTag   className={ additional_classes.join(' ') }
                    id={ heading_id }>
            { heading_text }
        </TitleTag>
    )
}

Title.propTypes = {
    additional_classes: PropTypes.array,
    heading_id: PropTypes.string,
    heading_level: PropTypes.number,
    heading_text: PropTypes.string.isRequired
}

Title.defaultProps = {
    additional_classes: defaults.additional_classes.value,
    heading_id: defaults.heading_id.value,
    heading_level: defaults.heading_level.value
}

export default Title