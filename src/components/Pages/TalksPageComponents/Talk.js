import React from 'react'

export default ({ talk }) => (
    <iframe title={ talk.title }
            width="100%"
            height="166"
            scrolling="no"
            frameBorder="no"
            allow="autoplay"
            src={ talk.url }>
    </iframe>
)