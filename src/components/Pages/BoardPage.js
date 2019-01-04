import React from 'react'

// import child components
import { BoardMember } from './BoardPageComponents'

// import data
import boardMembers from './BoardPageData'

export default () => (
  <div className='page advisory-board-page'>
    <div className='content'>
      <h2>Advisory Board</h2>
      {
        boardMembers.map((member, i) => <BoardMember info={ member } key={i} />)
      }
    </div>
  </div>
)