import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-name'>
            Nicholas Costanza
          </Link>
          <ul className='nav-menu active nav-menu'>
            <li className='nav-item'>
              <Link to='/about' className='nav-links'>
                About
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/contact' className='nav-links'>Contact</Link>
            </li>
            <li className='nav-item'><a href='./assets/Nicholas_Costanza_-_Web_Developer.pdf' target='#blank' className='nav-links'>Resume</a>
            </li>
            <li className='nav-item'><a href='#projects' className='nav-links'>Projects</a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;