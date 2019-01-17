import React, { Component} from 'react'
import { Spring } from 'react-spring'

// import child components
import { Bibleverse, Courses, Review } from './AboutPageComponents'
import { FindOutMore } from '../Globals'

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
              <Bibleverse />
              <Courses />
              <FindOutMore />
              <Review />
            </div>    
          </div>
        )
      }
      </Spring>
    )
  }
}