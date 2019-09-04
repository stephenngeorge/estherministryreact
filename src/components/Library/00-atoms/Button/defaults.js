const defaults = {
    additional_classes: {
        value: []
    },
    button_block: {
        value: false
    },
    button_color: {
        value: 'white'
    },
    button_element: {
        value: 'button'
    },
    button_id: {
        value: ''
    },
    button_link: {
        value: null,
        warning: 'You set the button element as "<a>" but did not provide a link for the href, please pass one as a string to the "button_link" prop'
    },
    button_onClick: {
        value: null,
        warning: 'You set the button element as "<button>" but did not provide a function to handle the click, please pass one to the "button_onClick" prop'
    },
    button_outline: {
        value: false
    },
    button_size: {
        value: 'reg',
        warning: 'button_size: value out of range - button size must be one of "small", "reg", "large"',
        range: ["small", "reg", "large"]
    }
}

export default defaults