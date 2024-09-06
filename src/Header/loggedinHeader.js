import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";


// import About from '/about';

import logo1 from "../img/logo.png";
import { baseurl } from "../baseurl";
import LOGIN from "../Login/login";
import Singup from "../Login/singup";
const LoggedinHeader = ({ onOpenDialog, onToggleTheme }) => {

  const [darkMode, setDarkMode] = useState(false); // State to track the current theme
  const [darkModeValue, setdarkModeValue] = useState(false); // State to track the current theme
    const toggleTheme = () => {
      
      // setDarkMode(!darkMode); // Toggle the theme
      const toggle = document.querySelector('.input');
      if (toggle.checked) {
        setDarkMode(true);
        const darkModeValue = true;
        onToggleTheme(darkModeValue);
      } else {
        setDarkMode(false);
        const darkModeValue = false;
        onToggleTheme(darkModeValue);
      }

      // const darkModeValue = toggle.checked;
      
    };

  const [dialogOpen, setDialogOpen] = useState(false);

  const handleOpenDialog = () => {
    setDialogOpen(true);
    console.log("TT");
  };

  const handleCloseDialog = () => {
    setDialogOpen(false);
  };

  const [dialogOpen1, setDialogOpen1] = useState(false);

  const handleOpenDialog1 = () => {
    setDialogOpen1(true);
  };

  const handleCloseDialog1 = () => {
    setDialogOpen1(false);
  };

  // const [showMenu, setShowMenu] = useState(false);
  // const [isMobile, setIsMobile] = useState(false);

  // const [data,setData] = useState ({

  //   sub:null,
  //   user_name:null  ,
  //   email:null ,
  //   email_verified:null ,
  //   picture:null ,

  // })

  // const [g_obj,setobj]= useState('')

  // useEffect(() => {
  //     const handleResize = () => {
  //         setIsMobile(window.innerWidth <= 768);
  //     };

  //     window.addEventListener('resize', handleResize);

  //     handleResize();

  //     return () => window.removeEventListener('resize', handleResize);
  // }, []);

  // const toggleMenu = () => {
  //     setShowMenu(!showMenu);
  // };

  // const [googleLoaded, setGoogleLoaded] = useState(false);

  // function handleCallbackResponse(response) {
  //   console.log("Encoded JWT ID Token: " + response.credential);
  //   var userobj = jwtDecode(response.credential);
  //   console.log(userobj,"TS");
  //   setobj(userobj)

  //   setData({...data, sub:g_obj.sub })
  //   setData({...data, email:g_obj.email })
  //   setData({...data, email_verified:g_obj.email_verified })
  //   setData({...data, picture:g_obj.picture })
  //   setData({...data, user_name:g_obj.name })

  //   if(userobj){
  //     console.log("true")

  //   }

  //   else{
  //     console.log('false')
  //     console.log(g_obj)
  //   }

  // }

  // useEffect(() => {

  //   if (typeof google !== 'undefined' && google.accounts) {
  //     google.accounts.id.initialize({
  //       client_id: "896318742541-ahqm1k22nr85kfdn9u5n3gp2c5tresnr.apps.googleusercontent.com",
  //       callback: handleCallbackResponse
  //     });
  //     setGoogleLoaded(true);
  //   }
  // }, []);

  // const handleCustomSignIn = () => {
  //   if (googleLoaded) {
  //     google.accounts.id.prompt();
  //   } else {
  //     console.error('Google API not loaded');
  //   }
  // };

  // const Stored_userID = g_obj.sub;

  // const demo = async () => {
  //   try {

  //     const response = await axios.post(`${baseurl}/createuser`, g_obj);

  //     const Local_UserID = JSON.stringify(Stored_userID);
  //     localStorage.setItem('userid', Local_UserID);

  //     console.log(Local_UserID,"localstorage")

  //       window.location.href="/dashboard"

  //   } catch (error) {

  //     console.error('Error:', error.message);

  //     alert('Please Login First!');
  //   }
  // };

  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div>
      <header  className={darkMode ? 'dark-theme' : 'light-theme'}>
        <div class="contanir">
          <nav class="main-header">
            <div class="header-logo">
              <Link to="/">
                <img src={logo1} alt="" />
              </Link>
            </div>
            <ul className="header-list">
              <Link to="/about">
                <li>About us HEADER</li>
              </Link>
              <Link to="/fave">
                <li>Favourite</li>
              </Link>
              <Link to="/save">
                <li>Saved</li>
              </Link>
            </ul>
            <div class="header-btn-box">
              <label class="switch" onClick={toggleTheme}>
              <span class="sun">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    viewBox="0 0 30 30"
                    fill="none"
                  >
                    <g clip-path="url(#clip0_62_8)">
                      <path
                        opacity="0.2"
                        d="M21.5625 15C21.5625 16.2979 21.1776 17.5667 20.4565 18.6459C19.7354 19.7251 18.7105 20.5663 17.5114 21.063C16.3122 21.5597 14.9927 21.6896 13.7197 21.4364C12.4467 21.1832 11.2774 20.5582 10.3596 19.6404C9.44183 18.7226 8.81682 17.5533 8.5636 16.2803C8.31038 15.0073 8.44034 13.6878 8.93704 12.4886C9.43374 11.2895 10.2749 10.2646 11.3541 9.54348C12.4333 8.82238 13.7021 8.4375 15 8.4375C16.7405 8.4375 18.4097 9.1289 19.6404 10.3596C20.8711 11.5903 21.5625 13.2595 21.5625 15Z"
                        fill="#0E87CC"
                      />
                      <path
                        d="M14.0625 4.6875V1.875C14.0625 1.62636 14.1613 1.3879 14.3371 1.21209C14.5129 1.03627 14.7514 0.9375 15 0.9375C15.2486 0.9375 15.4871 1.03627 15.6629 1.21209C15.8387 1.3879 15.9375 1.62636 15.9375 1.875V4.6875C15.9375 4.93614 15.8387 5.1746 15.6629 5.35041C15.4871 5.52623 15.2486 5.625 15 5.625C14.7514 5.625 14.5129 5.52623 14.3371 5.35041C14.1613 5.1746 14.0625 4.93614 14.0625 4.6875ZM22.5 15C22.5 16.4834 22.0601 17.9334 21.236 19.1668C20.4119 20.4001 19.2406 21.3614 17.8701 21.9291C16.4997 22.4968 14.9917 22.6453 13.5368 22.3559C12.082 22.0665 10.7456 21.3522 9.6967 20.3033C8.6478 19.2544 7.9335 17.918 7.64411 16.4632C7.35472 15.0083 7.50325 13.5003 8.0709 12.1299C8.63856 10.7594 9.59985 9.58809 10.8332 8.76398C12.0666 7.93987 13.5166 7.5 15 7.5C16.9885 7.50217 18.8949 8.29305 20.3009 9.6991C21.707 11.1052 22.4978 13.0115 22.5 15ZM20.625 15C20.625 13.8875 20.2951 12.7999 19.677 11.8749C19.0589 10.9499 18.1804 10.2289 17.1526 9.80318C16.1248 9.37743 14.9938 9.26604 13.9026 9.48308C12.8115 9.70012 11.8092 10.2359 11.0225 11.0225C10.2359 11.8092 9.70012 12.8115 9.48308 13.9026C9.26604 14.9938 9.37743 16.1248 9.80318 17.1526C10.2289 18.1804 10.9499 19.0589 11.8749 19.677C12.7999 20.2951 13.8875 20.625 15 20.625C16.4914 20.6234 17.9212 20.0303 18.9758 18.9758C20.0303 17.9212 20.6234 16.4914 20.625 15ZM6.83672 8.16328C7.01263 8.33919 7.25122 8.43802 7.5 8.43802C7.74878 8.43802 7.98737 8.33919 8.16328 8.16328C8.33919 7.98737 8.43802 7.74878 8.43802 7.5C8.43802 7.25122 8.33919 7.01263 8.16328 6.83672L6.28828 4.96172C6.11237 4.78581 5.87378 4.68698 5.625 4.68698C5.37622 4.68698 5.13763 4.78581 4.96172 4.96172C4.78581 5.13763 4.68698 5.37622 4.68698 5.625C4.68698 5.87378 4.78581 6.11237 4.96172 6.28828L6.83672 8.16328ZM6.83672 21.8367L4.96172 23.7117C4.78581 23.8876 4.68698 24.1262 4.68698 24.375C4.68698 24.6238 4.78581 24.8624 4.96172 25.0383C5.13763 25.2142 5.37622 25.313 5.625 25.313C5.87378 25.313 6.11237 25.2142 6.28828 25.0383L8.16328 23.1633C8.25038 23.0762 8.31948 22.9728 8.36662 22.859C8.41376 22.7452 8.43802 22.6232 8.43802 22.5C8.43802 22.3768 8.41376 22.2548 8.36662 22.141C8.31948 22.0272 8.25038 21.9238 8.16328 21.8367C8.07618 21.7496 7.97277 21.6805 7.85897 21.6334C7.74516 21.5862 7.62318 21.562 7.5 21.562C7.37682 21.562 7.25484 21.5862 7.14103 21.6334C7.02723 21.6805 6.92382 21.7496 6.83672 21.8367ZM22.5 8.4375C22.6231 8.4376 22.7451 8.41343 22.8589 8.36638C22.9727 8.31933 23.0762 8.25031 23.1633 8.16328L25.0383 6.28828C25.2142 6.11237 25.313 5.87378 25.313 5.625C25.313 5.37622 25.2142 5.13763 25.0383 4.96172C24.8624 4.78581 24.6238 4.68698 24.375 4.68698C24.1262 4.68698 23.8876 4.78581 23.7117 4.96172L21.8367 6.83672C21.7055 6.96783 21.6161 7.13495 21.5798 7.3169C21.5436 7.49885 21.5621 7.68747 21.6332 7.85887C21.7042 8.03026 21.8245 8.17673 21.9788 8.27974C22.1331 8.38274 22.3145 8.43765 22.5 8.4375ZM23.1633 21.8367C22.9874 21.6608 22.7488 21.562 22.5 21.562C22.2512 21.562 22.0126 21.6608 21.8367 21.8367C21.6608 22.0126 21.562 22.2512 21.562 22.5C21.562 22.7488 21.6608 22.9874 21.8367 23.1633L23.7117 25.0383C23.7988 25.1254 23.9022 25.1945 24.016 25.2416C24.1298 25.2888 24.2518 25.313 24.375 25.313C24.4982 25.313 24.6202 25.2888 24.734 25.2416C24.8478 25.1945 24.9512 25.1254 25.0383 25.0383C25.1254 24.9512 25.1945 24.8478 25.2416 24.734C25.2888 24.6202 25.313 24.4982 25.313 24.375C25.313 24.2518 25.2888 24.1298 25.2416 24.016C25.1945 23.9022 25.1254 23.7988 25.0383 23.7117L23.1633 21.8367ZM5.625 15C5.625 14.7514 5.52623 14.5129 5.35041 14.3371C5.1746 14.1613 4.93614 14.0625 4.6875 14.0625H1.875C1.62636 14.0625 1.3879 14.1613 1.21209 14.3371C1.03627 14.5129 0.9375 14.7514 0.9375 15C0.9375 15.2486 1.03627 15.4871 1.21209 15.6629C1.3879 15.8387 1.62636 15.9375 1.875 15.9375H4.6875C4.93614 15.9375 5.1746 15.8387 5.35041 15.6629C5.52623 15.4871 5.625 15.2486 5.625 15ZM15 24.375C14.7514 24.375 14.5129 24.4738 14.3371 24.6496C14.1613 24.8254 14.0625 25.0639 14.0625 25.3125V28.125C14.0625 28.3736 14.1613 28.6121 14.3371 28.7879C14.5129 28.9637 14.7514 29.0625 15 29.0625C15.2486 29.0625 15.4871 28.9637 15.6629 28.7879C15.8387 28.6121 15.9375 28.3736 15.9375 28.125V25.3125C15.9375 25.0639 15.8387 24.8254 15.6629 24.6496C15.4871 24.4738 15.2486 24.375 15 24.375ZM28.125 14.0625H25.3125C25.0639 14.0625 24.8254 14.1613 24.6496 14.3371C24.4738 14.5129 24.375 14.7514 24.375 15C24.375 15.2486 24.4738 15.4871 24.6496 15.6629C24.8254 15.8387 25.0639 15.9375 25.3125 15.9375H28.125C28.3736 15.9375 28.6121 15.8387 28.7879 15.6629C28.9637 15.4871 29.0625 15.2486 29.0625 15C29.0625 14.7514 28.9637 14.5129 28.7879 14.3371C28.6121 14.1613 28.3736 14.0625 28.125 14.0625Z"
                        fill="#0E87CC"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_62_8">
                        <rect width="30" height="30" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </span>
                <span class="moon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    viewBox="0 0 30 30"
                    fill="none"
                  >
                    <path
                      opacity="0.2"
                      d="M26.7056 17.3309C26.1402 19.1897 25.1031 20.8704 23.6953 22.2094C22.2874 23.5483 20.5568 24.4998 18.672 24.9712C16.7871 25.4426 14.8123 25.4178 12.9399 24.8993C11.0675 24.3808 9.36126 23.3862 7.98743 22.0123C6.6136 20.6385 5.61898 18.9323 5.10045 17.0599C4.58191 15.1874 4.55714 13.2126 5.02854 11.3278C5.49994 9.44296 6.45145 7.71233 7.79038 6.30447C9.12932 4.89661 10.81 3.8595 12.6689 3.29416C12.0795 5.24424 12.0302 7.31767 12.5262 9.29355C13.0222 11.2694 14.045 13.0738 15.4855 14.5143C16.926 15.9548 18.7303 16.9775 20.7062 17.4735C22.6821 17.9695 24.7555 17.9202 26.7056 17.3309Z"
                      fill="#3B82F6"
                    />
                    <path
                      d="M27.3677 16.6676C27.2475 16.5471 27.0967 16.4616 26.9315 16.4203C26.7663 16.379 26.593 16.3835 26.4302 16.4332C24.6426 16.9736 22.7419 17.0189 20.9305 16.5643C19.1192 16.1097 17.4651 15.1722 16.1446 13.8516C14.8241 12.5311 13.8865 10.877 13.4319 9.0657C12.9773 7.25437 13.0226 5.35363 13.563 3.56602C13.6132 3.40313 13.618 3.22965 13.5769 3.06424C13.5359 2.89882 13.4505 2.74773 13.33 2.62722C13.2094 2.5067 13.0584 2.42132 12.8929 2.38025C12.7275 2.33919 12.554 2.34399 12.3912 2.39414C9.9197 3.15123 7.74999 4.66851 6.19076 6.73008C4.82719 8.54046 3.99544 10.6952 3.78896 12.9522C3.58249 15.2093 4.00948 17.4792 5.02195 19.5069C6.03442 21.5346 7.59226 23.2399 9.52045 24.4311C11.4486 25.6222 13.6708 26.2521 15.9372 26.25C18.5814 26.2582 21.1552 25.3986 23.2638 23.8031C25.3254 22.2439 26.8427 20.0742 27.5998 17.6027C27.6493 17.4405 27.6539 17.2678 27.6131 17.1031C27.5722 16.9384 27.4874 16.7879 27.3677 16.6676ZM22.1365 22.3055C20.1508 23.8011 17.6917 24.5291 15.2118 24.3554C12.7319 24.1818 10.3983 23.1182 8.64038 21.3605C6.88249 19.6027 5.81871 17.2691 5.64487 14.7893C5.47103 12.3094 6.19882 9.85027 7.69428 7.86446C8.66858 6.57781 9.92819 5.53483 11.374 4.81758C11.2916 5.39558 11.2501 5.97867 11.2497 6.5625C11.2532 9.79378 12.5383 12.8917 14.8232 15.1766C17.108 17.4615 20.206 18.7466 23.4373 18.75C24.0223 18.7498 24.6065 18.7083 25.1857 18.6258C24.4678 20.0718 23.424 21.3314 22.1365 22.3055Z"
                      fill="#3B82F6"
                    />
                  </svg>
                </span>
                  <input type="checkbox" class="input" />
                  <span class="slider"></span>
              </label>
              <h2>{user.username ? user.username : "Name"}</h2>
            </div>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default LoggedinHeader;
