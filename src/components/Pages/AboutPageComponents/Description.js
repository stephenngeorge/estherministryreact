import React from 'react'
import { Spring } from 'react-spring'

// import assets
import speechmarks_grey from '../../../assets/speechmarks_grey.png'

export default () => (
  <section className='description'>
    <Spring from={ {opacity: 0, marginTop: -150} }
            to={ {opacity: 1, marginTop: 0} }
            config={ {delay: 400, duration: 1000} }
    >
      {
        props => (
          <div style={ props }>
            <div className='content description-content'>
              <h3>That <span className='highlight'>Esther Moment</span></h3>
              <p>
                <img src={ speechmarks_grey } alt='speechmarks' />
                  Esther Ministry was founded to equip, empower and release people
                  into their calling, so that everyone can have their 'Esther' moment.
                  Esther was a beautiful queen who stepped out in faith, trusting in
                  God and because of her bravery the lives of thousands of people were
                  saved. Following the call that God has on your life is not just about
                  serving others it is also about living as the person God intended you
                  to be. I genuinely believed that I didn’t have any gifts. Esther
                  didn’t believe in herself either and it took someone else to prompt
                  her to discover her calling. So Esther Ministry was founded to provide
                  a practical way to discover your true gifts and skills and put them
                  into action for God.</p>
            </div>      
          </div>
        )
      }
    </Spring>
  </section>
)