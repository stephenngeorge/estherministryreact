import React from 'react'
import PropTypes from 'prop-types'

// import assets
import speechmarks_grey from '../../../assets/speechmarks_grey.png'

// conditional rendering based on active button prop (passed down from Courses.js)
const CourseInfo = (props) => {
  if (props.active === 'gifting-day') {
    return (
      <div className='course-info'>
        <h3 className='course-title'>GIFTING DAY</h3>
        <p className='course-synopsis'>
        Esther Ministry is delivered as either a short course
        (3 evening sessions) or a one-day course, including prayer
        and interactive sessions. This includes a gifting questionnaire,
        results and an action plan. Participants are guided through
        exercises to help them discover their gifts. Everyone is encouraged
        to leave the day with a specific plan of how these gifts will be put
        into action. As well as delivering this course in churches and schools,
        Esther Ministry is also delivered to groups of staff at Tearfund as
        part of their building confidence course.</p>
      <p className='course-quote highlight'>
        <img src={ speechmarks_grey } alt='speech marks' />Rowena&#39;s passion and personal journey is an inspiration, she clearly
        communicates and challenges, her personal views are backed up with
        scripture, she&#39;s unafraid to speak the message she believes God is
        putting on her heart for the audience. The use of spiritual gifts
        questionnaire is a great place for people to start thinking about
        their calling and personal direction</p>
        <p className='course-quotedBy'>- Julie Couchman-Boor, Tearfund Learning & Development Advisor</p>
      </div>
    )
  }
  else if (props.active === 'clergy-spouse') {
    return (
      <div className='course-info'>
        <h3 className='course-title'>CLERGY SPOUSE DAY</h3>
        <p className='course-synopsis'>
        Esther Ministry is delivered through a practical one day course,
        starting with worship and prayer and followed by interactive
        sessions including a gifting questionnaire with results and an
        action plan. As the wife of a vicar, I have experienced the huge
        pressure, privilege and lonliness that can be ministry life;
        with this in mind, I felt prompted to create an Esther day
        exclusively for partners of church leaders. I feel so passionately
        that if the other halves of church leaders are prepared, loved,
        supported and know what God is calling THEM to as well, then we
        will have stronger marriages, stronger parishes and stronger God-filled
        communities. Are you the spouse of a Church leader, Ordinand or Curate?
        Would you benefit from a day to discern your calling in all of this?
        Would you like support to prepare for ministry life or transition
        within ministry life? This one day course has been prepared exclusively
        for you, based on my journey and the epic fails, lonliness and joy I
        have faced so far. The course will help you discern who you are in Him,
        what your gifts are in this season and how you can operate within them.</p>
        <p className='course-quote highlight'>
        <img src={ speechmarks_grey } alt='speech marks' />Rowena&#39;s passion and personal journey is an inspiration, she clearly
        communicates and challenges, her personal views are backed up with
        scripture, she&#39;s unafraid to speak the message she believes God is
        putting on her heart for the audience. The use of spiritual gifts
        questionnaire is a great place for people to start thinking about
        their calling and personal direction</p>
        <p className='course-quotedBy'>- Julie Couchman-Boor, Tearfund Learning & Development Advisor</p>
      </div>
    );
  }
  else if (props.active === '') return null;
}

CourseInfo.propTypes = {
  active: PropTypes.string.isRequired
}


export default CourseInfo
