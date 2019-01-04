import React from 'react';

// import child components
import Event from './Event';

// import assets
import calendar_icon from '../../../assets/calendar_icon.png'

const Events = () => {
  // array of upcoming events, mapped to array of <Event /> components in return()
  const eventsList = [
    { type: 'GIFTING DAY', location: 'Tannery House, Bakewell', date: new Date(1500073200000) },
    { type: 'CLERGY SPOUSE DAY', location: 'St Saviour\'s, Sunbury', date: new Date(1504911600000) },
    { type: 'SHORT COURSE (SESSION FOUR)', location: 'Tearfund (Staff Only)', date: new Date(1505689200000) },
    { type: 'CLERGY SPOUSE DAY', location: 'Salisbury', date: new Date(1506726000000) },
    { type: 'GIFTING DAY', location: 'Graves End', date: new Date(1507330800000) },
    { type: 'GIFTING DAY', location: 'St Peter & St Paul\'s Church, Nottingham', date: new Date(1509753600000) }
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
  );
}


export default Events
