import React from 'react'

// import child components
import Event from './Event'

// import assets
import calendar_icon from '../../../assets/calendar_icon.png'

export default () => {
  // array of upcoming events, mapped to array of <Event /> components in return()
  const eventsList = [
    { type: 'GIFTING DAY', location: 'Newark Salvation Army, NG24 3GA', date: new Date('March 2, 2019 09:00:00') },
    { type: 'SHORT COURSE (SESSION ONE)', location: 'Tearfund (Staff Only)', date: new Date() },
    { type: 'WORSHIP & THE WORD SERVICE', location: 'St Giles\' Church, Ickenham', date: new Date('March 17, 2019 09:00:00') },
    { type: 'CLERGY WIVES RETREAT', location: 'Shipston-on-Stour, Warwickshire', date: new Date('March 26, 2019 09:00:00') },
    { type: 'GIFTING DAY', location: 'St John the Baptist, Huddersfield', date: new Date('June 8, 2019 09:00:00') }
  ]
  return (
    <section className='upcoming-events'>
      <div className='content'>
        <div className='upcoming-events__header'>
          <h3>Upcoming<br />Events</h3>
          <img src={ calendar_icon } alt='events-calendar' />
        </div>
        <div className='events-list'>
          {
            eventsList.map((event, i) => <Event {...event} key={i} />)
          }
        </div>
      </div>
    </section>
  )
}