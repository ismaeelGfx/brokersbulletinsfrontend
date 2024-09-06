import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';



import logo1 from '../img/logo.png'
const Footer = ({ darkMode }) => {
   
  
    return (
        <div>
         
  <footer className={darkMode ? 'dark-theme' : 'light-theme'}>
    <div class="contanir">
      <div class="main-footer">
        <div class="footer-logo">
        <img src={logo1} alt="" />
        </div>
        <div class="footre-list-1">
          <h3>Categories</h3>
            <ul>
              <li><a href="#"><h4>Residential Real Estate - Florida</h4></a></li>
              <li><a href="#"><h4>Commercial Real Estate - Florida</h4></a></li>
              <li><a href="#"><h4>Residential Real Estate - New York</h4></a></li>
            </ul>
            <ul>
              <li> <a href="#"><h4>Commercial Real Estate - New York</h4></a></li>
              <li><a href="#"><h4>Commercial Real Estate - Other</h4></a></li>
              <li><a href="#"><h4>Residential Real Estate - Other</h4></a></li>
            </ul>
        </div>
        {/* <div class="footre-list-2">
        <Link to="/inner">
        <button>Add my brand</button>
          </Link>
          <a href="#"><p>© 2024 Company Name</p></a>
        </div> */}
      </div>
    </div>
  </footer>
  <hr/>
    {/* <div className='footer_copyrigt'>
        <p>Design & Developed By <a href="https://brandrevam.com/" target='_blank'><img src='/logo.png' alt='logo' /></a>All Rights Reserved</p>
    </div> */}
        </div>
    );
}

export default Footer;
