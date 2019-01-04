import React, { Component } from 'react';

// import child components
import CourseInfo from './CourseInfo';

export default class Courses extends Component {

  constructor() {
    super();
    this.state = {
      // set initial state
      // gifting day button set as active
      // this value is passed to <CourseInfo /> component
      activeBtn: 'gifting-day'
    }
    // bind functions for this scope
    this._toggleActive = this._toggleActive.bind(this);
  }

  // function accepts event, sets active button
  _toggleActive(e) {
    // check if the other button (which will be either previous or next sibling) is active?
    if ((e.target.nextSibling !== null && e.target.nextSibling.classList.contains('active')) ||
        (e.target.previousSibling !== null && e.target.previousSibling.classList.contains('active'))) {
      // if one button is already active, remove that class
      // *** THIS CODE BLOCK ENSURES THAT YOU CAN'T HAVE BOTH BUTTONS ACTIVE AT THE SAME TIME
      if (e.target.nextSibling !== null) e.target.nextSibling.classList.remove('active');
      if (e.target.previousSibling !== null) e.target.previousSibling.classList.remove('active');
    }
    e.target.classList.toggle('active');
    // if the button clicked on was not already active, set it to active,
    // otherwise, set active button to empty string
    if (e.target.id !== this.state.activeBtn) this.setState({ activeBtn: e.target.id });
    else this.setState({ activeBtn: '' });
  }

  render() {
    return (
      <section className='courses'>
        <div className='content'>
          <div className='courses-btns'>
            <button id='gifting-day' className='active' onClick={ this._toggleActive }>GIFTING DAY</button>
            <button id='clergy-spouse' onClick={ this._toggleActive }>CLERGY SPOUSE</button>
          </div>
          <CourseInfo active={ this.state.activeBtn } />
        </div>
      </section>
    );
  }

}
