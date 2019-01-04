import React from 'react'
import { Link } from 'react-router-dom'

// import assets
import Esther_Logo_Green from '../../assets/Esther_Logo_Green.jpg'

const Navigation = () => {
// UNCOMMENT THIS CODE IF LOGIN PAGE IS REQUIRED
//  const _logout = () => {
//    sessionStorage.removeItem('auth');
//  }

//  let logInOut = !!sessionStorage.getItem('auth') ? <a href='/' onClick={ _logout } id='logout-btn'>LOGOUT</a> : <Link to='/login'><img id='padlock-icon' src='../img/padlock_icon.png' /></Link>;
//  let resources = !!sessionStorage.getItem('auth') ? <li><Link to='/resources'>RESOURCES</Link></li> : null;
  return (
    <div className='navigation'>
      <Link to='/'><img id='navbar-logo' src={ Esther_Logo_Green } alt='navbar logo' /></Link>
      <ul className='navbar'>
        <li><Link to='/about'>ABOUT</Link></li>
        <li><Link to='/advisory-board'>ADVISORY BOARD</Link></li>
        <li><Link to='/contact'>CONTACT</Link></li>     
      </ul>
    </div>
  );
}


export default Navigation

// render this at the end of navbar ul if login stuff is required & uncomment line 14:
// { resources }

// render this below ul if login stuff is required, & uncomment line 13
// { logInOut }