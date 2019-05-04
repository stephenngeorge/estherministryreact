import React, { Component } from 'react'
import { Spring } from 'react-spring'

// import child components
import { Talks, TalksInfo } from './TalksPageComponents'

export default class TalksPage extends Component {
    componentDidMount() {
        window.scrollTo(0, 0)
    }

    render() {
        return (
            <Spring from={ {opacity: 0} } to={ {opacity: 1} }>
            {
                props => (
                    <div style={ props }>
                        <div className='page talks-page' role='main'>
                            <TalksInfo />
                            <Talks />
                        </div>
                    </div>
                )
            }
            </Spring>
        )
    }
}