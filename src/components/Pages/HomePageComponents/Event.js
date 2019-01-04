import React from 'react';
import PropTypes from 'prop-types';
import ExtendedPropTypes from 'extended-proptypes';

const Event = (props) => {
  // construct date in correct format, rendered in '.event-date', line 13
  let dateString = `${props.date.getDate()}/${props.date.getMonth() + 1}/${props.date.getFullYear()}`;
  return (
    <div className='event'>
      <p className='event-type highlight'>{ props.type }</p>
      <div>
        <p className='event-location'>{ props.location }</p>
        <p className='event-date'>{ dateString }</p>
      </div>
    </div>
  );
}

Event.propTypes = {
  type: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  date: ExtendedPropTypes.date.isRequired
}


export default Event
