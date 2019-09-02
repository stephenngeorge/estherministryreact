import React, { Component } from 'react'
import { Link } from 'react-router-dom'

// import assets
import Esther_Logo_Green from '../../assets/Esther_Logo_Green.jpg'


export default class Navigation extends Component {

  toggleActive = () => {
    const navbar = document.querySelector('.navbar')
    const icon = document.querySelector('.icon')
    navbar.classList.toggle('active')
    icon.classList.toggle('icon-active')
  }

  // this function used to make sure menu is CLOSED when home page link is clicked
  removeActive = () => {
    const navbar = document.querySelector('.navbar')
    const icon = document.querySelector('.icon')
    navbar.classList.remove('active')
    icon.classList.remove('icon-active')
  }

  handleHomeClick = () => {
    this.removeActive()
    window.scrollTo({top: 0, behavior: 'smooth'})
  }

  render() {
    return (
      <div className='navigation' role='navigation'>
        <Link to='/' className='navbar-home' aria-label='home page link'>
          <img onClick={ this.handleHomeClick } id='navbar-logo' src={ Esther_Logo_Green } alt='navbar logo' />
          <p onClick={ this.handleHomeClick }>ESTHER MINISTRY</p>
        </Link>
        <ul className='navbar'>
          <li onClick={ this.toggleActive }>
            <Link to='/about' aria-label='about page link'>ABOUT</Link>
          </li>
          <li onClick={ this.toggleActive }>
            <Link to='/advisory-board' aria-label='advisory board page link'>ADVISORY BOARD</Link>
          </li>
          <li onClick={ this.toggleActive }>
            <Link to='/contact' aria-label='contact page link'>CONTACT</Link>
          </li>
          <li onClick={ this.toggleActive }>
            <Link to='/library' aria-label='library link'>LIBRARY</Link>
          </li>
        </ul>
        <div className='icon' onClick={ this.toggleActive } aria-label='toggle menu'>
          <div className='menu-icon'></div>
        </div>
      </div>
    )
  }
}
// render this at the end of navbar ul if login stuff is required & uncomment line 14:
// { resources }

// render this below ul if login stuff is required, & uncomment line 13
// { logInOut }

// UNCOMMENT THIS CODE IF LOGIN PAGE IS REQUIRED
//  const _logout = () => {
//    sessionStorage.removeItem('auth');
//  }

//  let logInOut = !!sessionStorage.getItem('auth') ? <a href='/' onClick={ _logout } id='logout-btn'>LOGOUT</a> : <Link to='/login'><img id='padlock-icon' src='../img/padlock_icon.png' /></Link>;
//  let resources = !!sessionStorage.getItem('auth') ? <li><Link to='/resources'>RESOURCES</Link></li> : null;