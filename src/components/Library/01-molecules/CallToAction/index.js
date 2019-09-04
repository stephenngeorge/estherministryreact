/**
 * CALL TO ACTION
 * 
 * CallToAction components are full-width blocks 
 * that contain a title, a body of text and a button
 * 
 * Additional classes can be passed via props as an array 
 * of strings and used for styling and/or animations
 * 
 */

import React from 'react'
import PropTypes from 'prop-types'

import defaults from './defaults'

import './call-to-action.scss'

import { Button, PlainText, Title } from '../../00-atoms'

const CallToAction = props => {
    const {
        additional_classes,
        heading_id,
        heading_level,
        heading_text,
        paragraph_id,
        paragraph_text
    } = props

    return (
        <section className={`call-to-action ${additional_classes.join(' ')}`}>
            <div className="call-to-action__text-content">
                {
                    heading_text !== defaults.heading_text.value &&
                    <Title  heading_id={ heading_id }
                            heading_level={ heading_level }
                            heading_text={ heading_text }
                    />
                }
                <PlainText  paragraph_id={ paragraph_id }
                            text={ paragraph_text }
                />
            </div>

            <div className="call-to-action__button-container">
                <Button button_text="GET IN TOUCH" />
            </div>
        </section>
    )
}

CallToAction.propTypes = {
    additional_classes: PropTypes.array,
    heading_id: PropTypes.string,
    heading_level: PropTypes.number,
    heading_text: PropTypes.string,
    paragraph_id: PropTypes.string,
    paragraph_text: PropTypes.string.isRequired
}

CallToAction.defaultProps = {
    additional_classes: defaults.additional_classes.value,
    heading_id: defaults.heading_id.value,
    heading_level: defaults.heading_level.value,
    heading_text: defaults.heading_text.value,
    paragraph_id: defaults.paragraph_id.value
}

export default CallToAction