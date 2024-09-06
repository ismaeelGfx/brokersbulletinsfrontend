import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {  useNavigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';

import { LoginSocialFacebook } from "reactjs-social-login";
import { FacebookLoginButton } from "react-social-login-buttons";


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

 


// import  facebook from '../img/facebook.png'
// import  instagarm from '../img/instagarm.png'
// import  google from '../img/google.png'
import { login } from '../features/user_authentication';
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import { GoogleLogin } from '@react-oauth/google';
import { baseurl } from '../baseurl';


const LOGIN = () => {

  const [dialogOpen, setDialogOpen] = useState(true);
  const [fb_data,setfb_data]=useState({

name:null,
email:null,
User_Id:null

  })

  const handleOpenDialog = () => {
    setDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setDialogOpen(false);
    window.location.reload()
  };


  const [data,setData] = useState ({

    user_id:null,
    name:null  ,
    email:null ,
    email_verified:null ,
    picture:null ,

  })
  const [g_obj,setobj]= useState('')

  function handleCallbackResponse(response) {
    console.log("Encoded JWT ID Token: " + response.credential);
    var userobj = jwtDecode(response.credential);
    console.log(userobj,"TS");
    setobj(userobj)



    setData({...data, sub:g_obj.sub })
    setData({...data, email:g_obj.email })
    setData({...data, email_verified:g_obj.email_verified })
    setData({...data, picture:g_obj.picture })
    setData({...data, user_name:g_obj.name })


    if(userobj){
      console.log("true")

      

   



    }

    else{
      console.log('false')
      console.log(g_obj)
    }


    


  }




  const [credentials, setCredentials] = useState({  password: "",email:"" });
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
  

const [name,setname]=useState('')
const [email,setemail]=useState('')
const [user__id,setid]=useState('')



  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   dispatch(login(credentials));
  // };

const navigate = useNavigate()
  // const handleSubmit = (e) => {
  //   e.preventDefault();


  //  const response = dispatch(login(credentials));
  //  const { arg } = response;

  //  console.log(arg.email,"Login")

  //  if(arg.email.toLowerCase().includes('@'))
  //   {

  //       toast.success("Login Succesfully",{
  //         position:'top-center'
  //       })
  //       // setTimeout(() => {
  //       //     window.location.reload() 
  //       // }, 1000);
       

  //   }
  // };


//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const response = dispatch(login(credentials));
//     response.then((data) => {
//         const { arg } = data;
//         console.log("Response:", data.meta.arg.email); // Log the entire response object
//         console.log("Email:", arg.email); // Log the email from the response
        
//         if (data.meta.arg.email!='') {
//             toast.success("Login Successfully", {
//                 position: 'top-center'
//             });
//         } else {
//             toast.error("Email not found", {
//                 position: 'top-center'
//             });
//         }
//     }).catch((error) => {
//         console.error("Error:", error);
//         toast.error("Login Failed", {
//             position: 'top-center'
//         });
//     });
// };


const [googleLoaded, setGoogleLoaded] = useState(false);
// const handleSubmit = (e) => {
//   e.preventDefault();


//  const response = dispatch(login(credentials));

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
// };




const handleSubmit = (e) => {
  e.preventDefault();


 const response = axios.post(`${baseurl}/login`,credentials)
 .then((response) => {
  console.log('NORMAL LOGIN RESPONSE:', response.data.userRecord); // Logging the response data

  

  if(response.data.userRecord.id !=null || response.data.userRecord.id != '')
    {
      localStorage.setItem("user",JSON.stringify(response.data.userRecord));
      toast.success("Login Sucessfully")
      setTimeout(() => {
          window.location.reload()
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

useEffect(() => {
  /* global google */
  if (typeof google !== 'undefined' && google.accounts) {
    google.accounts.id.initialize({
      client_id: "908977573799-5d32tvsej91ipptrunk5orilqn3l02qk.apps.googleusercontent.com",
      callback: handleCallbackResponse
    });
    setGoogleLoaded(true);
  }
}, []);



const [profile, setProfile] = useState(null);
const [show,setshow]=useState(false)



// const Social_Login =()=>{

  


//   setid(g_obj.sub)
//   setname(g_obj.name)
//   setemail(g_obj.email)

//   console.log(user__id,name,email,"CONSOLE GOOGLE DATA")

// }



const Google_Login = async () => {
  try {
    

    // Make a POST request using axios
    const response = await axios.post(`${baseurl}/google-signup`, g_obj);

    console.log("Google Login", response.data.user)

    // const Local_UserID = JSON.stringify(Stored_userID);
    // localStorage.setItem('userid', Local_UserID);
    localStorage.setItem("user",JSON.stringify(response.data.user));
    toast.success("Login Sucessfully")

    setTimeout(() => {
      window.location.reload()
    }, 1000);
    // console.log(Local_UserID,"localstorage")

      // window.location.href="/dashboard"
    // Set the response data in state
   
  } catch (error) {
    // Handle errors
    console.error('Error:', error.message);
    // Display an error message to the user
    alert('Please Login First!');
  }
};




const Facebook_Login = async () => {
  try {
    

    // Make a POST request using axios
    const response = await axios.post(`${baseurl}/facebook-signup`, profile);

    console.log("Facebook Login", response.data.user)

    localStorage.setItem("user",JSON.stringify(response.data.user));
    toast.success("Login Sucessfully")

    setTimeout(() => {
      window.location.reload()
    }, 1000);

    // const Local_UserID = JSON.stringify(Stored_userID);
    // localStorage.setItem('userid', Local_UserID);

    // console.log(Local_UserID,"localstorage")

      // window.location.href="/dashboard"
    // Set the response data in state
   
  } catch (error) {
    // Handle errors
    console.error('Error:', error.message);
    // Display an error message to the user
    alert('Please Login First!');
  }
};





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
        <p class="title">Login </p>
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
                {/* <div class="forgot">
                    <a rel="noopener noreferrer" href="#">Forgot your password?</a>
                </div> */}
            </div>
            <button class="sign">Login </button>
        </form>


        <div class="social-message">
            <div class="line"></div>
            <p class="message">or</p>
            <div class="line"></div>
        </div>


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


        <p class="signup">Whoa there, Cowboy! You need to be signed in to use that feature.  
            <a rel="noopener noreferrer" href="#" class="style-color" >Sign up</a>
        </p>

        <div className='google-login-box'>
          <GoogleLogin
            onSuccess={credentialResponse => {
              console.log(credentialResponse);
              var userobj = jwtDecode(credentialResponse.credential);
                console.log(userobj,"TS");
                setobj(userobj)
                setData({...data, sub:g_obj.sub })
                setData({...data, email:g_obj.email })
                setData({...data, email_verified:g_obj.email_verified })
                setData({...data, picture:g_obj.picture })
                setData({...data, user_name:g_obj.name })
                if(userobj){
                  console.log("true")
                  setshow(true)
                }
                else{
                  console.log('false')
                  console.log(g_obj)
                }
            }}
            onError={() => {
              console.log('Login Failed');
            }}  />
              { show &&
                    <button onClick={Google_Login}>
                  Login Google
                  </button>
              }
        </div>



<div className='facebook-login'>
      {!profile ? (
        <LoginSocialFacebook
          appId="936643421484078"
          onResolve={(response) => {
            console.log(response);
            setProfile(response.data);

            // setTimeout(() => {
            //   setfb_data({...fb_data, name:response.data.name })
            //   setfb_data({...fb_data, email:response.data.email })
            //   setfb_data({...fb_data, User_Id:response.data.userID })
            // }, 1000);


            setData({...data, name:response.data.name })
            setData({...data, email:response.data.email })
            setData({...data, email_verified:g_obj.email_verified })
            setData({...data, sub:response.data.userID })
           
          
          }}
          onReject={(error) => {
            console.log(error);
          }}
        >
          <FacebookLoginButton />
        </LoginSocialFacebook>
      ) : (
        ""
      )}

      {profile ? (
        <div className='facebook-btn-cloce'>
          {/* <h1>{profile.name}</h1>
          <img src={profile.picture.data.url} /> */}
          <button onClick={Facebook_Login}>Login Facebook</button>
        </div>
      ) : (
        ""
      )}
    </div>



    </div>
</div>
          








</div>






    )

}

export default LOGIN
























