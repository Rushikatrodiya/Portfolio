import React, { useState } from 'react';
import './Navbar.css';
import logo from '../../assets/icon.png';
import { Link } from 'react-router-dom';

function Navbar() {
  const [menu, setMenu] = useState('home');
  return (
    <div className='navbar'>
      <div className='div1'>Portfolio</div>
      <ul className='nav-menu'>
        <li>
          <Link className='anchor-link' to='/home'>
            <p onClick={() => setMenu('home')}>Home</p>
          </Link>
        </li>
        <li>
          <Link className='anchor-link' to='/about'>
            <p onClick={() => setMenu('about')}>About Me</p>
          </Link>
        </li>
        <li>
          <Link className='anchor-link' to='/services'>
            <p onClick={() => setMenu('services')}>Services</p>
          </Link>
        </li>
        <li>
          <Link className='anchor-link' to='/mywork'>
            <p onClick={() => setMenu('work')}>Portfolio</p>
          </Link>
        </li>
        <li>
          <Link className='anchor-link' to='/contact'>
            <p onClick={() => setMenu('contact')}>Contact</p>
          </Link>
        </li>
      </ul>
      <div className='nav-connect'>
        <Link className='anchor-link' to='/contact'>Connect Me</Link>
      </div>
    </div>
  );
}

export default Navbar;
