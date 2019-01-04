import React from 'react';
import PropTypes from 'prop-types';

const BoardMember = (props) => (
  <div className='board-member'>
    <img src={ props.info.imgUrl } alt='board member profile pic' />
    <div>
      <p className='board-member_name'>{ props.info.name }</p>
      <p className='board-member_text'>{ props.info.text }</p>
    </div>
  </div>
);

BoardMember.propTypes = { info: PropTypes.object.isRequired }


export default BoardMember
