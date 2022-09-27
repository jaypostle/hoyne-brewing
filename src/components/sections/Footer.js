import React from 'react';
import NewsletterSignUp from '../atoms/NewsletterSignUp';

import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <>
    <section className='beerArtWrapper'>
      <div className="beerArtBanner">
    </div>
    </section>
    <footer className='Footer'>
      <nav className='footer-nav-menu'>
        <h3>Hoyne Brewing Co.</h3>
        <div className="footer-nav__columns">
          <ul>
            <li><a href="#">Our Beers</a></li>
            <li><a href="#">Our Brewery</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">Events & Stories</a></li>
            <li><a href="#">Community</a></li>
          </ul>
          <ul>
            <li><a href="#">Shop</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms of Service</a></li>
          </ul>
        </div>
      </nav>
      <nav className='footer-nav-social'>
        <ul>
          <li><a href="#"><FaFacebook /></a></li>
          <li><a href="#"><FaInstagram /></a></li>
          <li><a href="#"><FaTwitter /></a></li>
        </ul>
      </nav>
      <div>
        <NewsletterSignUp></NewsletterSignUp>
      </div>
      <div className='copyright-text'>
        <p>©Hoyne Brewing Co. 2022 Site by Gearbox & Sometimes</p>
      </div>
    </footer>
    </>
  )
}

export default Footer