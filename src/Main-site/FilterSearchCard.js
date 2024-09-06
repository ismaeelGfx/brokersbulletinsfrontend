import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';


import logo1 from '../img/logo.png'
import brand1 from '../img/Brand1.png'
import brand2 from '../img/Brand2.png'
import brand3 from '../img/Brand3.png'
import brand4 from '../img/Brand4.png'
import brand5 from '../img/Brand5.png'
import brand6 from '../img/Brand6.png'
import brand7 from '../img/Brand7.png'
import brand8 from '../img/Brand8.png'
import brand9 from '../img/Brand9.png'
import brand10 from '../img/Brands10.png'
import like from '../img/like.png'
import  fav from '../img/save.png'
import card1 from '../img/card.png'
import card2 from '../img/card2.png'
import card3 from '../img/card3.png'
import card4 from '../img/card4.png'
import card5 from '../img/card5.png'
import card6 from '../img/card6.png'
import card7 from '../img/card7.png'
import { baseurl } from '../baseurl';
import { useDispatch, useSelector } from 'react-redux';
import { getemails } from '../features/userDetailSlice';
import { getbrands } from '../features/BrandService';
import { residential_florida } from '../features/ResidentialFlorida';
import { residential_newyork } from '../features/ResidentialNewyork';
import { commercial_newyork } from '../features/CommercialNewyork';
import { commercial_florida } from '../features/CommercialFlorida';

const FilterSearchCard = (data) => {


  const [emails,setemails] = useState([])
  const [dateTime, setDateTime] = useState('');

  // const dispatch = useDispatch();
  // const { loading, users, error } = useSelector(state => state.userDetail);
 


  // console.log(users,"Emails_data")




  // useEffect(()=>{

  //   axios.get(`${baseurl}/get-emails`)
  //   .then((response)=>{

  //     console.log(response.data)
  //     setemails(response.data)

  //     const formattedDateTime = formatDateTime(response.data.time);
  //     setDateTime(formattedDateTime);

  //   })
  //   .catch((error)=>{
  //     console.log(error)

  //   })


  // },[])


  // useEffect(() => {
  //   dispatch(getemails());
  // }, []);




  console.log(data.data.filtered_emails
    ,"FilterSearchCard props")

  
  




  const formatDateTime = (dateTimeString) => {
    const date = new Date(dateTimeString);
    const formattedDate = date.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
    const formattedTime = date.toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
    return `${formattedDate} ${formattedTime}`;
  };


  
  const  user = JSON.parse(localStorage.getItem("user")) 

  console.log(user,"localStorage")


   




  
    return (
        <div>
     <section class="card-salider">
        <div class="main-salider">
            <div class="contanir">
                <div class="Emails-California">
                    <h3>Emails from Search Data</h3>
                    <div class="California-box">


                      {
                        
                        data&&data.data&&data.data.filtered_emails&&data.data.filtered_emails.map((e,i)=>(


                            <Link to={`/view_email/${e.request_id}`} >

                        <div class="California-card" key={i}>
                            <div class="California-tital">
                                <p>{formatDateTime(e.time)}</p>
                                <h4>{e.subject}</h4>
                                    
                            </div>

                            <div class="California-img">
                              <img src={e.screenshot_url}/>
                         
                            </div>

                            <div class="California-list">
                              <span>   <img src={like} alt="" /><p>100</p></span>

                              <span>
                              <img src={fav} alt="" />
                              </span>
                            </div>

                        </div>


                            </Link>



                        ))
                      }





                    </div>
                </div>
            </div>
        </div>
    </section>




    

        </div>


    );
}

export default FilterSearchCard;
