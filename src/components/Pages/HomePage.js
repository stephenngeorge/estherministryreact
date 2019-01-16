import React, { Component } from 'react'

// import child components
import { Hero, Courses, Events, Testimonials } from './HomePageComponents'

export default class HomePage extends Component {

    componentDidMount() {
        window.scrollTo(0, 0)
    }

    render() {
        return (
            <div className='page home-page'>
                <Hero />
                <Courses />
                <Events />
                <Testimonials />
            </div>   
        )
    }
}