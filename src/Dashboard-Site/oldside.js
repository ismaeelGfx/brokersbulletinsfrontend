import React, { useEffect, useState } from 'react';
import logout from '../img/logout.png'
import dash from '../img/dash.png'
import newpost from '../img/newspost.png'
import side  from '../img/side.png'
import mess  from '../img/mess.png'
import { Link, useNavigate } from 'react-router-dom';
import { adminLogout } from '../features/AdminSignup';
import { useDispatch } from 'react-redux';


 



const Mainside = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleLogout = () => {
        // Dispatch the logout action
        dispatch(adminLogout());
        
        navigate('/admin-login')
        window.location.reload()
      };

      const  admin = JSON.parse(localStorage.getItem("admin")) 

      console.log(admin,"Admin Local Storage")


    return (


        <div>



<div class="main-side-box">
        <div class="list-1-side">
            

            <button>         <img src={dash} alt="" /> Dashboard</button>

                                <Link to={'/ts'}>
                             
            <button>          <img src={newpost} alt="" />Post Newsletter</button>
            </Link>
        </div>

        <div class="list-2-side">
            <a href="#" onClick={handleLogout}>           <img src={logout} alt="" /> Log Out</a>
        </div>
    </div>



        </div>
    )

}

export default Mainside