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
        additionalClasses,
        headingId,
        headingLevel,
        headingText,
        paragraphId,
        paragraphText
    } = props

    return (
        <section className={`call-to-action ${additionalClasses.join(' ')}`}>
            <div className="call-to-action__text-content">
                {
                    headingText !== defaults.headingText.value &&
                    <Title  headingId={ headingId }
                            headingLevel={ headingLevel }
                            headingText={ headingText }
                    />
                }
                <PlainText  paragraphId={ paragraphId }
                            text={ paragraphText }
                />
            </div>

            <div className="call-to-action__button-container">
                <Button additionalClasses={['font-weight--light']} buttonText="GET IN TOUCH" />
            </div>
        </section>
    )
}

CallToAction.propTypes = {
    additionalClasses: PropTypes.array,
    headingId: PropTypes.string,
    headingLevel: PropTypes.number,
    headingText: PropTypes.string,
    paragraphId: PropTypes.string,
    paragraphText: PropTypes.string.isRequired
}

CallToAction.defaultProps = {
    additionalClasses: defaults.additionalClasses.value,
    headingId: defaults.headingId.value,
    headingLevel: defaults.headingLevel.value,
    headingText: defaults.headingText.value,
    paragraphId: defaults.paragraphId.value
}

export default CallToAction