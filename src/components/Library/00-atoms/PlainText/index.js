/**
 * PLAIN TEXT
 * 
 * PlainText component displays a simple paragraph 
 * of text
 * 
 * Additional classes (e.g. .text--lead) can be 
 * passed as an array of strings for styles/animations
 * An ID for the <p> tag can also be provided for 
 * similar purposes
 * 
 */

import React from 'react'
import PropTypes from 'prop-types'

import defaults from './defaults'

const PlainText = props => {
    const {
        additionalClasses,
        paragraphId,
        text
    } = props

    return (
        <p  className={ additionalClasses.join(' ') }
            id={ paragraphId }
        >
            { text }
        </p>
    )
}

PlainText.propTypes = {
    additionalClasses: PropTypes.array,
    paragraphId: PropTypes.string,
    text: PropTypes.string.isRequired
}

PlainText.defaultProps = {
    additionalClasses: defaults.additionalClasses.value,
    paragraphId: defaults.paragraphId.value
}

export default PlainText