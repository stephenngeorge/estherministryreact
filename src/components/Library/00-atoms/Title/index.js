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
    const {
        additionalClasses,
        headingId,
        headingLevel,
        headingText
    } = props

    if (defaults.headingLevel.range.indexOf(headingLevel) < 0) console.warn(defaults.headingLevel.warning)
    const TitleTag = `h${ headingLevel }`
    return (
        <TitleTag   className={`title ${additionalClasses.join(' ')}`}
                    id={ headingId }>
            { headingText }
        </TitleTag>
    )
}

Title.propTypes = {
    additionalClasses: PropTypes.array,
    headingId: PropTypes.string,
    headingLevel: PropTypes.number,
    headingText: PropTypes.string.isRequired
}

Title.defaultProps = {
    additionalClasses: defaults.additionalClasses.value,
    headingId: defaults.headingId.value,
    headingLevel: defaults.headingLevel.value
}

export default Title