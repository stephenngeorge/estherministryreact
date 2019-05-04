import React from 'react'

// import child components
import Talk from './Talk'
import Data from './TalksData'

export default () => (
    <div className='talks-player'>
        {
            Data.map(talk => <Talk key={ talk.url } talk={ talk } />)
        }
    </div>
)