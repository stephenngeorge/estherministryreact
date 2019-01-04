import React from 'react'
import PropTypes from 'prop-types'

const Quote = ({ text }) => (
  <div className='quote'>
    <p>{ text }</p>
  </div>
)

Quote.propTypes = { text: PropTypes.string.isRequired }


export default Quote
