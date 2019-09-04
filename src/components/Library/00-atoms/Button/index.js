/**
 * BUTTON
 * 
 * Button components can be many different 
 * elements but all will contain some text 
 * and have either a url to redirect to, or 
 * a click handler function
 * 
 * Additional classes can be passed as a array 
 * of string and used for styling/animation 
 * purposes. A button id can be passed for 
 * similar reasons.
 * 
 */

import React from 'react'
import PropTypes from 'prop-types'

import defaults from './defaults'

import './button.scss'

const Button = props => {
    const {
        additional_classes,
        button_block,
        button_color,
        button_element,
        button_id,
        button_link,
        button_onClick,
        button_outline,
        button_size,
        button_text
    } = props

    // warn about invalid props values
    if (defaults.button_size.range.indexOf(button_size.toLowerCase().trim()) < 0) {
        console.warn(defaults.button_size.warning)
    }
    // set button classes based on props
    const button_classes = {
        base_classes: `button ${additional_classes.join(' ')} `,
        button_color: `button--color-${button_color} `,
        button_size: `button--size-${button_size} `
    }
    if (!!button_block) button_classes.button_block = 'button--block '
    if (!!button_outline) button_classes.button_outline = `button-outline--color-${button_color}`
    // manipulate button_classes object into one string
    // that can be set as button.className
    let classes = ''
    Object.keys(button_classes).forEach(key => {
        classes += button_classes[key]
    })
    
    // define attributes, warn about incorrect props patterns
    let link, handleClick
    if (button_element === 'a') {
        if (button_link === null) console.warn(defaults.button_link.warning)
        link = button_link   
    }
    if (button_element === 'button') {
        if (button_onClick === null) console.warn(defaults.button_onClick.warning)
        handleClick = button_onClick
    }
    // either href or onClick will be null, so react will not 
    // set that attribute
    const attribs = {
        id: button_id.length > 0 ? button_id : null,
        href: link,
        onClick: handleClick
    }

    const HTMLTag = button_element.trim()
    return (
        <HTMLTag {...attribs} className={classes}>
            { button_text }
        </HTMLTag>
    )
}

Button.propTypes = {
    additional_classes: PropTypes.array,
    button_block: PropTypes.bool,
    button_color: PropTypes.string,
    button_element: PropTypes.string,
    button_id: PropTypes.string,
    button_link: PropTypes.string,
    button_onClick: PropTypes.func,
    button_outline: PropTypes.bool,
    button_size: PropTypes.string,
    button_text: PropTypes.string.isRequired
}

Button.defaultProps = {
    additional_classes: defaults.additional_classes.value,
    button_block: defaults.button_block.value,
    button_color: defaults.button_color.value,
    button_element: defaults.button_element.value,
    button_id: defaults.button_id.value,
    button_link: defaults.button_link.value,
    button_onClick: defaults.button_onClick.value,
    button_outline: defaults.button_outline.value,
    button_size: defaults.button_size.value
}

export default Button