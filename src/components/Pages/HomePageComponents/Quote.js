import React from 'react';
import PropTypes from 'prop-types';

const Quote = props => (
  <div className='quote'>
    <p>{ props.text }</p>
  </div>
);

Quote.propTypes = {
  text: PropTypes.string.isRequired
}


export default Quote
