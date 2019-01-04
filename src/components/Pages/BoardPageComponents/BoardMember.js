import React from 'react'
import PropTypes from 'prop-types'

const BoardMember = ({ info }) => {
  const { imgUrl, name, text } = info
  return (
    <div className='board-member'>
      <img src={ imgUrl } alt='board member profile pic' />
      <div>
        <p className='board-member_name'>{ name }</p>
        <p className='board-member_text'>{ text }</p>
      </div>
    </div>
  )
} 

BoardMember.propTypes = { info: PropTypes.object.isRequired }

export default BoardMember
