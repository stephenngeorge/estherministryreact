/**
 * CALL TO ACTION
 * 
 * CallToAction components are full-width blocks 
 * that contain a title, a body of text and a button
 * 
 * Additional classes can be passed via props as an array 
 * of strings and used for styling and/or animations
 * 
 * @todo setup props to be passed to BUTTON component
 */

import React from 'react'
import PropTypes from 'prop-types'

import defaults from './defaults'

import './call-to-action.scss'

import { Button, PlainText, Title } from '../../00-atoms'

const CallToAction = props => {
    const {
        additionalClasses,
        buttonColor,
        buttonElement,
        buttonLink,
        buttonOnClick,
        buttonText,
        headingId,
        headingLevel,
        headingText,
        paragraphId,
        paragraphText
    } = props

    if (buttonElement !== 'a') console.warn(defaults.buttonElement.warning)

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
                <Button buttonColor={ buttonColor }
                        buttonText={ buttonText }
                        buttonElement={ buttonElement }
                        buttonLink={ buttonLink }
                        buttonOnClick={ buttonOnClick }
                />
            </div>
        </section>
    )
}

/**
 * Button props:
 *      - buttonBlock: left to Button default
 *      - buttonOutline: left to Button default
 *      - buttonSize: passed down as 'large' by force
 */
CallToAction.propTypes = {
    additionalClasses: PropTypes.array,
    buttonColor: PropTypes.string,
    buttonElement: PropTypes.string,
    buttonLink: PropTypes.string,
    buttonOnClick: PropTypes.func,
    buttonText: PropTypes.string.isRequired,
    headingId: PropTypes.string,
    headingLevel: PropTypes.number,
    headingText: PropTypes.string,
    paragraphId: PropTypes.string,
    paragraphText: PropTypes.string.isRequired
}

CallToAction.defaultProps = {
    additionalClasses: defaults.additionalClasses.value,
    buttonColor: defaults.buttonColor.value,
    buttonElement: defaults.buttonElement.value,
    headingId: defaults.headingId.value,
    headingLevel: defaults.headingLevel.value,
    headingText: defaults.headingText.value,
    paragraphId: defaults.paragraphId.value
}

export default CallToAction