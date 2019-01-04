import React from 'react'

// import child components
import { Hero, Courses, Events, Testimonials } from './HomePageComponents'

const HomePage = () => (
    <div className='page home-page'>
        <Hero />
        <Courses />
        <Events />
        <Testimonials />
    </div>   
)

export default HomePage