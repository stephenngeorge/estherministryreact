import React, { Component} from 'react'
import { Spring } from 'react-spring'

// import child components
import { Bibleverse, Description, FindOutMore, Review } from './AboutPageComponents'

export default class AboutPage extends Component {

  componentDidMount() {
    window.scrollTo(0, 0)
  }

  render() {
    return (
      <Spring from={ {opacity: 0} } to={ {opacity: 1} }>
      {
        props => (
          <div style={ props }>
            <div className='page about-page'>
              <Description />
              <FindOutMore />
              <Bibleverse />
              <Review />
            </div>    
          </div>
        )
      }
      </Spring>
    )
  }
}