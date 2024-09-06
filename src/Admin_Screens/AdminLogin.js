import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {  Link, useNavigate } from 'react-router-dom';

// import brand1 from '../img/Brand1.png'
// import brand2 from '../img/Brand2.png'
// import brand3 from '../img/Brand3.png'
// import brand4 from '../img/Brand4.png'
// import brand5 from '../img/Brand5.png'
// import brand6 from '../img/Brand6.png'
// import brand7 from '../img/Brand7.png'
// import brand8 from '../img/Brand8.png'
// import brand9 from '../img/Brand9.png'
// import brand10 from '../img/Brands10.png'
// import like from '../img/like.png'
// import  fav from './img/save.png'

// import card1 from './img/card.png'
// import card2 from './img/card2.png'
// import card3 from './img/card3.png'
// import card4 from './img/card4.png'
// import card5 from './img/card5.png'
// import card6 from './img/card6.png'
// import card7 from './img/card7.png'
// import save from './img/save.png'
// import Header from '../Header/header';
// import Footer from '../Footer/footer';
// import Card from '../Main-site/card';

import logo1 from '../img/logo.png'


import  facebook from '../img/facebook.png'
import  instagarm from '../img/instagarm.png'


import  google from '../img/google.png'
import { login } from '../features/user_authentication';
import { useDispatch, useSelector } from 'react-redux';
import { adminLogin } from '../features/AdminSignup';
import { ToastContainer, toast } from 'react-toastify';
import { baseurl } from '../baseurl';


const Admin_LOGIN = () => {

  const [dialogOpen, setDialogOpen] = useState(true);

  const handleOpenDialog = () => {
    setDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setDialogOpen(false);
    window.location.reload()
  };



  const navigate = useNavigate()
  const [credentials, setCredentials] = useState({  password: "",email:"" });
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.adminAuth.loading);
  const error = useSelector((state) => state.adminAuth.error);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name) {
      setCredentials(prevState => ({
        ...prevState,
        [name]: value
      }));
    }
  };
  

  // const handleSubmit = (e) => {
  //   e.preventDefault();


  //  const response = dispatch(adminLogin(credentials));
  //  const { arg } = response;

  //  console.log(arg.email,"Login")

  //  if(arg.email!="")
  //   {

  //       toast.success("Login Succesfully")
  //       setTimeout(() => {
  //            navigate('/main-dashborad')  
  //       }, 1000);
       

  //   }
  // };



  const handleSubmit = (e) => {
    e.preventDefault();
  
  
   const response = axios.post(`${baseurl}/admin-login`,credentials)
   .then((response) => {
    console.log('NORMAL LOGIN RESPONSE:', response.data.userRecord); // Logging the response data
  
    
  
    if(response.data.userRecord.id !=null || response.data.userRecord.id != '')
      {
        localStorage.setItem("admin",JSON.stringify(response.data.userRecord));
        toast.success("Login Sucessfully")

        upload_emails()
        setTimeout(() => {
            navigate('/main-dashboard')
        }, 1000);
      }
     
  })
  .catch((error) => {
    console.error('Error:', error);
    toast.error("Invalid Username or Password")
  });
  
   console.log(response.data,"NORMAL LOGIN RESPONSE")
  
  //  const { arg } = response;
  
  //  console.log(arg.email,"Login")
  
  //  if(arg.email!="")
  //   {
  
  //       toast.success("Login Succesfully",{
  //         position:'top-center'
  //       })
  //       setTimeout(() => {
  //            navigate('/')  
  //            window.location.reload()
  //       }, 2000);
       
  
  //   }
  };




  const upload_emails = (async)=>{

    try{
      axios.get(`${baseurl}/check_for_more_email_brand`)
      
    } 

    catch (error){
      console.log(error)
    }
    

  }




    return (


        <div className='my-dilog'>

            <ToastContainer/>
 
  <div class="main-login">

  
    <div class="close-btn "  onClick={handleCloseDialog}>
<a href="#">
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="21" viewBox="0 0 12 21" fill="none">
    <g clip-path="url(#clip0_19_32)">
      <path d="M-0.289988 0.342163C-0.289988 1.41929 0.774074 3.02772 1.8512 4.37776C3.23608 6.11975 4.89096 7.63963 6.78828 8.7995C8.2109 9.66904 9.93546 10.5037 11.3232 10.5037C9.93546 10.5037 8.20944 11.3384 6.78828 12.208C4.89096 13.3693 3.23608 14.8892 1.8512 16.6283C0.774074 17.9798 -0.289988 19.5911 -0.289988 20.6653" stroke="black" stroke-width="3"/>
    </g>
    <defs>
      <clipPath id="clip0_19_32">
        <rect width="20.9038" height="11.3229" fill="white" transform="matrix(0 1 -1 0 11.3232 0.0518188)"/>
      </clipPath>
    </defs>
  </svg>
  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="21" viewBox="0 0 12 21" fill="none">
    <g clip-path="url(#clip0_19_34)">
      <path d="M12.2875 20.6099C12.2776 19.5329 11.1987 17.9343 10.1092 16.5943C8.70828 14.8652 7.03943 13.3606 5.13149 12.2183C3.7009 11.3619 1.9687 10.5432 0.580979 10.556C1.9687 10.5432 3.68694 9.6926 5.10002 8.80998C6.98652 7.63118 8.62731 6.09609 9.99607 4.34429C11.0607 2.98291 12.1098 1.36182 12.0999 0.287645" stroke="black" stroke-width="3"/>
    </g>
    <defs>
      <clipPath id="clip0_19_34">
        <rect width="20.9038" height="11.3229" fill="white" transform="translate(0.677734 21.0075) rotate(-90.529)"/>
      </clipPath>
    </defs>
  </svg>
</a>
    </div>
    
    <div class="form-container">
    <div class="form-container-imger">
    <img src={logo1} alt="" />
    </div>
        <p class="title">Login</p>
        <form class="form" onSubmit={handleSubmit}>
            <div class="input-group">
                
                <input type="email"  id="username" placeholder="Your Email"
                
                value={credentials.email}
                onChange={handleChange}
                name='email'
                
                />
            </div>
            <div class="input-group">

                <input type="password" name="password" id="password" placeholder="Password"
                value={credentials.password}
                onChange={handleChange}
                
                
                
                />
                <div class="forgot">
                    <a rel="noopener noreferrer" href="#">Forgot your password?</a>
                </div>
            </div>
            <button class="sign">Login</button>
        </form>


        {/* <div class="social-message">
            <div class="line"></div>
            <p class="message">or</p>
            <div class="line"></div>
        </div> */}

{/* 
        <div class="social-icons">
            <button aria-label="Log in with Google" class="icon">
            <img src={google} alt="" />
            </button>
            <button aria-label="Log in with Twitter" class="icon">
            <img src={facebook} alt="" />
            </button>
            <button aria-label="Log in with GitHub" class="icon">
            <img src={instagarm} alt="" />
            </button>
        </div> */}


        <p class="signup">Not a member yet? 
        <Link to='/admin-signup' style={{ textDecoration: 'none' }}>
        <a rel="noopener noreferrer" href="#" class="">Sign up</a>
        </Link>
           
        </p>


    </div>
</div>
          








</div>






    )

}

export default Admin_LOGIN
























