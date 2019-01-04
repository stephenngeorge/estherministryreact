import React from 'react';

// import child components
import Quote from './Quote';

const Testimonials = () => {
  // array of quotes mapped to array of <Quote /> components in return()
  const quotesList = [
    '"This has given me a fresh boldness to speak to everyone I know about Jesus"',
    '"This course has helped me realise that what I am doing now is part of where I am going to...that God has not forgotten me"',
    '"I\'m going to come back to church"',
    '"I will put my gifts in to action"',
    '"Great balance of discussion and personal reflection"',
    '"Thank you for showing me however rubbish we feel, we are good enough"'
  ]
  return (
    <section className='testimonials'>
      <div className='content'>
        <h3>What People are saying</h3>
        <div className='quotes-list'>
          {
            quotesList.map((quote, i) => <Quote text={ quote } key={i} />)
          }
        </div>
      </div>
    </section>
  );
}


export default Testimonials
