import React, { useEffect, useState } from 'react';
import axios from 'axios';



import  facebook from '../img/facebook.png'
import  instagarm from '../img/instagarm.png'
import  google from '../img/google.png'
import { useDispatch, useSelector } from 'react-redux';
import { signup } from '../features/user_authentication';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



 



const Singup = () => {

  const [dialogOpen, setDialogOpen1] = useState(true);

  const handleOpenDialog1 = () => {
    setDialogOpen1(true);
  };

  const handleCloseDialog1 = () => {
    setDialogOpen1(false);
    window.location.reload()
  };


  const [credentials, setCredentials] = useState({ username: "", password: "",email:"" });
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.auth.loading);
  const error = useSelector((state) => state.auth.error);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name) {
      setCredentials(prevState => ({
        ...prevState,
        [name]: value
      }));
    }
  };
  



  const handleSubmit = (e) => {
    e.preventDefault();
    // dispatch(signup(credentials));

    if(credentials.username!="")
      {

        const response =  dispatch(signup(credentials));
        
    const { arg } = response;

    console.log(arg.email,"Login")
 
    if(arg.email!="")
     {
 
         toast.success("Sign Up Successfully, Now you can Login!",{
          position:'top-center'
         })
        //  setTimeout(() => {
        //       navigate('/main-dashborad')  
        //  }, 1000);
        
 
     }
      }
      else
      {
        toast.error('Please Try Again Later',{
          position:'top-center'
        })
      }


  };







    return (



      
        <div>
   
   {dialogOpen &&

<div class="main-login">
<ToastContainer />


  
    <div class="close-btn "  onClick={handleCloseDialog1}>
{/* <a href="#"> */}
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
{/* </a> */}
    </div>
    
    <div class="form-container">
        <p class="title">Sign Up</p>
        <form class="form" onSubmit={handleSubmit}>
        <div class="input-group">
                
                <input type="text"  placeholder="Your Name"
                    name='username'
                    value={credentials.username}
                    onChange={handleChange}
                    required

                />
            </div>
            <div class="input-group">
                
                <input type="email"  id="username" placeholder="Your Email"
                value={credentials.email}
                onChange={handleChange}
                name='email'
                required
                
                
                />
            </div>
            <div class="input-group">

                <input type="password" name="password" id="password" placeholder="Password"
                value={credentials.password}
                onChange={handleChange}
                required
                
                />
                <div class="forgots">
                <label class="container">
                  
                <input type="checkbox"/>
  <span class="checkmark"></span>
                  I am agree all terms of service and privacy policy

</label>
                </div>
            </div>
            <button class="sign">Sign Up</button>
         
        </form>


        {/* <div class="social-message">
            <div class="line"></div>
            <p class="message">or</p>
            <div class="line"></div>
        </div> */}


        {/* <div class="social-icons">
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

        {/* <button class="sign">Sign Up</button> */}


    </div>
</div>

   } 



</div>






    )

}

export default Singup
























