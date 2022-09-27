import React from 'react';
import { FaHamburger } from 'react-icons/fa';




function Header() {
  return (
      <header id="main-header">
        <nav>
          <ul>
            <li><a href="#">Our Beers</a></li>
            <li><a href="#">Events & Stories</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </nav>
        <div id="header-nav-burger"><FaHamburger /></div>
      </header>
  )
}

export default Header