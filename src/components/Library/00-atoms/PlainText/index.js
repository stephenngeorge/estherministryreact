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
        additional_classes,
        paragraph_id,
        text
    } = props

    return (
        <p  className={ additional_classes.join(' ') }
            id={ paragraph_id }
        >
            { text }
        </p>
    )
}

PlainText.propTypes = {
    additional_classes: PropTypes.array,
    paragraph_id: PropTypes.string,
    text: PropTypes.string.isRequired
}

PlainText.defaultProps = {
    additional_classes: defaults.additional_classes.value,
    paragraph_id: defaults.paragraph_id.value
}

export default PlainText