import React, { Component } from 'react'
import { Spring } from 'react-spring'

// import child components
import { Hero, Description, Events, Testimonials } from './HomePageComponents'
import { FindOutMore } from '../Globals'

export default class HomePage extends Component {

    componentDidMount() {
        window.scrollTo(0, 0)
    }

    render() {
        return (
            <Spring from={ {opacity: 0} } to={ {opacity: 1} }>
                {
                    props => (
                        <div style={ props }>
                            <div className='page home-page'>
                                <Hero />
                                <FindOutMore />
                                <Description />
                                <Events />
                                <Testimonials />
                            </div>            
                        </div>
                    )
                }
            </Spring>
        )
    }
}