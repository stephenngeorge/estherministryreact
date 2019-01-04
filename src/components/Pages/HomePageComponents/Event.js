import React from 'react'
import PropTypes from 'prop-types'
import ExtendedPropTypes from 'extended-proptypes'

const Event = ({ date, type, location}) => {
  // construct date in correct format, rendered in '.event-date', line 13
  let dateString = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`
  return (
    <div className='event'>
      <p className='event-type highlight'>{ type }</p>
      <div>
        <p className='event-location'>{ location }</p>
        <p className='event-date'>{ dateString }</p>
      </div>
    </div>
  )
}

Event.propTypes = {
  type: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  date: ExtendedPropTypes.date.isRequired
}

export default Event
