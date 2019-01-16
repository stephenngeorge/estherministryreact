import React, { Component} from 'react'

// import child components
import { Bibleverse, Description, FindOutMore, Review } from './AboutPageComponents'

export default class AboutPage extends Component {

  componentDidMount() {
    window.scrollTo(0, 0)
  }

  render() {
    return (
      <div className='page about-page'>
        <Description />
        <FindOutMore />
        <Bibleverse />
        <Review />
      </div>
    )
  }
}