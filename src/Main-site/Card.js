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
import { follow_brands } from '../features/FollowBrands';
import { ToastContainer, toast } from 'react-toastify';
import CommercialRealEstateOther, { commercialrealestateother, other_brands_email } from '../features/CommercialRealEstateOther';
import { residentialrealestateother } from '../features/ResidentialRealEstateOther';

const Card = () => {


  const [emails,setemails] = useState([])
 

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

  const  user = JSON.parse(localStorage.getItem("user")) 


  const dispatch = useDispatch();
  // const { loading, users, error } = useSelector((state) => state.userDetail);

  // const { loading, brands, error } = useSelector((state) => state.getbrands);

  // First useSelector block
const { loading: userLoading, users, error: userError } = useSelector((state) => state.userDetail);

// Second useSelector block
const { loading: brandLoading, brands, error: brandError } = useSelector((state) => state.getbrands);

const { loading: Residential_Florida_brandsLoading, Residential_Florida_brands, error: Residential_Florida_brandsError } = useSelector((state) => state.residential_florida);



const { loading: residentialrealestateotherLoading, residentialrealestateotherData, error: residentialrealestateotherError } = useSelector((state) => state.residentialrealestateother);

const { loading: commercialrealestateotherDataLoading, commercialrealestateotherData, error: commercialrealestateotherError } = useSelector((state) => state.commercialrealestateother);

const { loading: commercial_floridaBrandsLoading, commercial_floridaBrands, error: commercial_floridaBrandsError } = useSelector((state) => state.commercial_florida);

const { loading: commercial_newyorkBrandsLoading, commercial_newyorkBrands, error: commercial_newyorkBrandsError } = useSelector((state) => state.commercial_newyork);


const { loading: Residential_NewYork_brandsLoading, Residential_NewYork_brands, error: Residential_NewYork_brandsError } = useSelector((state) => state.residential_newyork);



// const { loading: getemailsLoading, getemails, error: getemailssError } = useSelector((state) => state.getemails);


  useEffect(() => {
    // dispatch(getemaails());
    dispatch(getbrands());
    dispatch(residential_florida())

    dispatch(residential_newyork())
    dispatch(commercial_newyork())
    dispatch(commercial_florida())
    dispatch(residentialrealestateother())
    dispatch(commercialrealestateother())

    upload_emails()

  }, [dispatch]);


  console.log(Residential_Florida_brands,"BRANDS")




  
  const { loading: follow_brands_dataLoading, follow_brands_data, error: follow_brands_dataError } = useSelector((state) => state.follow_brands);

  

  useEffect(() => {
    if (user && user.id) {
      dispatch(follow_brands(user.User_Id));
    }
  }, [user?.id]);
  
  




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


  
  

  console.log(user,"localStorage")


    const Saved_Email=(e)=>{
      console.log(e,user.id,"SAVED_EMAIL")

      const formData= ({
        request_id:e,
        userid:user.User_Id

      })


      axios.post(`${baseurl}/saved-emails`,formData)
      .then((response)=>{
        console.log(response.data.message,"saved email")

        if(response.data.message)
          {
            toast.success("Add to Favorites!",{
              position:'top-center'
            })
          }


      })
      .catch((error)=>{
        console.log(error)
      })




    }




    // const Follow_Brand=(e)=>{
    //   console.log(e,user.id,"Follow_Brand")

    //   const formData= ({
    //     id:e,
    //     userid:user.id

    //   })


    //   axios.post(`${baseurl}/follow-emails`,formData)
    //   .then((response)=>{
    //     console.log(response)
    //     toast.success("Followed Successfully")
    //   })
    //   .catch((error)=>{
    //     console.log(error)
    //   })




    // }

    const Follow_Brand = (e) => {
      console.log(e, user?.User_Id, "Follow_Brand");
    
      if (!user || !user.id) {
        toast.error("Please Login First",{
          position: "top-center",
        });
        return; // Exit the function early if user or user.id is null or undefined
      }
    
      const formData = {
        id: e,
        userid: user.User_Id,
      };
    
      axios.post(`${baseurl}/follow-emails`, formData)
        .then((response) => {
          console.log(response);
          toast.success("Followed Successfully",{
            position: "top-center",
          });
        })
        .catch((error) => {
          console.log(error);
          toast.error("Error occurred while following brand");
        });
    };






    const Like_post = (e) => {
      console.log(e, user?.User_Id, "Like Post");
    
      if (!user || !user.id) {
        toast.error("Please Login First",{
          position: "top-center",
        });
        return; // Exit the function early if user or user.id is null or undefined
      }
    
      const formData = {
        request_id: e,
        userid: user.User_Id,
      };
    
      axios.post(`${baseurl}/like_post`, formData)
        .then((response) => {
          console.log(response);

          if(response.data.message==='Like added successfully and count updated')
            {

              toast.success("Liked Successfully",{
                position: "top-center",
              });
    
              window.location.reload()
            }
            

        })
        .catch((error) => {
          console.log(error);
          toast.error("Error occurred while following brand");
        });
    };
    
    

    const upload_emails = async()=>{

      try{
        console.log("CHECK FOR EMAIL")
        axios.get(`${baseurl}/check_for_more_email_brand`)
        
      } 
  
      catch (error){
        console.log(error)
      }
      
  
    }
   



  
    return (
        <div>
          <ToastContainer/>

          {
            user && user.id!="" &&  <section class="card-salider">
            <div class="main-salider">
                <div class="contanir">
                    <div class="Emails-California">
                        <h3>Emails From Your Followed Brands</h3>
                        <div class="California-box">
    
    
                        {
        user && follow_brands_data && follow_brands_data.follow_brands_email && follow_brands_data.follow_brands_email.length > 0 &&
        follow_brands_data.follow_brands_email.map((e, i) => (
            <div class="California-card" key={i}>
                

                        <div class="California-tital">
                            <p>{formatDateTime(e.time)}</p>
                            <h4>{e.subject}</h4>
                                
                        </div>
                        <Link to={`/view_email/${e.request_id}`} class="California-img" >
                        {/* <div class="California-img"> */}
                          <img src={e.screenshot_url}/>

                        {/* </div> */}
                        </Link>
                <div class="California-list">
                <button onClick={()=>{Like_post(e.request_id)}}>
                              <span>   <img src={like} alt="" /><p>{e.count?e.count:0}</p></span>

                              </button>
                    <button onClick={()=>Saved_Email(e.request_id)}>
                              <span >
                              <img src={fav} alt="" />
                              </span>
                              </button>
                </div>
            </div>
        ))
    }
    
    
    

    
                        </div>
                    </div>
                </div>
            </div>
        </section>
          }
   

   {/* <section class="card-salider">
        <div class="main-salider">
            <div class="contanir">
                <div class="Emails-California">
                    <h3>Emails </h3>
                    <div class="California-box">


                    {
                       user&& users.map((e,i)=>(


                          
                        <div class="California-card" key={i}>
                       

                                  <div class="California-tital">
                                      <p>{formatDateTime(e.time)}</p>
                                      <h4>{e.subject}</h4>
                                          
                                  </div>

                                  <Link to={`/view_email/${e.request_id}`} class="California-img" >
                       
                          <img src={e.screenshot_url}/>

                   
                        </Link>
                                  

                            <div class="California-list">
                              <span>   <img src={like} alt="" /><p>100</p></span>

                              <button onClick={()=>Saved_Email(e.request_id)}>
                              <span >
                              <img src={fav} alt="" />
                              </span>
                              </button>
                            </div>

                        </div>


                            



                        ))
                      }

                    

                    </div>
                </div>
            </div>
        </div>
    </section> */}





    <section class="card-salider">
        <div class="main-salider">
            <div class="contanir">
                <div class="Emails-California">
                    <h3>Residential Real Estate - Florida</h3>
                    <div class="California-box">


                    {
                        Residential_Florida_brands.map((e,i)=>(


                          
                        <div class="California-card" key={i}>
                       

                                  <div class="California-tital">
                                      <p>{formatDateTime(e.time)}</p>
                                      <h4>{e.subject}</h4>
                                          
                                  </div>

                                  <Link to={`/view_email/${e.request_id}`} class="California-img" >
                        {/* <div class="California-img"> */}
                          <img src={e.screenshot_url}/>

                        {/* </div> */}
                        </Link>
                                  

                            <div class="California-list">
                            <button onClick={()=>{Like_post(e.request_id)}}>
                              <span>   <img src={like} alt="" /><p>{e.count?e.count:0}</p></span>

                              </button>

                              <button onClick={()=>Saved_Email(e.request_id)}>
                              <span >
                              <img src={fav} alt="" />
                              </span>
                              </button>
                            </div>

                        </div>


                            



                        ))
                      }

                    

                    </div>
                </div>
            </div>
        </div>
    </section>


 
    <section class="card-salider">
        <div class="main-salider">
            <div class="contanir">
                <div class="Emails-California">
                    <h3>Commercial Real Estate - Florida</h3>
                    <div class="California-box">


                    {
                        commercial_floridaBrands.map((e,i)=>(


                            

                        <div class="California-card" key={i}>
                        

                                        <div class="California-tital">
                                            <p>{formatDateTime(e.time)}</p>
                                            <h4>{e.subject}</h4>
                                                
                                        </div>

                                        <Link to={`/view_email/${e.request_id}`} class="California-img" >
                        {/* <div class="California-img"> */}
                          <img src={e.screenshot_url}/>

                        {/* </div> */}
                        </Link>
                                         

                            <div class="California-list">
                            <button onClick={()=>{Like_post(e.request_id)}}>
                              <span>   <img src={like} alt="" /><p>{e.count?e.count:0}</p></span>

                              </button>

                              <button onClick={()=>Saved_Email(e.request_id)}>
                              <span >
                              <img src={fav} alt="" />
                              </span>
                              </button>
                            </div>

                        </div>


                           



                        ))
                      }

                    

                    </div>
                </div>
            </div>
        </div>
    </section>




    <section class="card-salider">
        <div class="main-salider">
            <div class="contanir">
                <div class="Emails-California">
                    <h3>Residential Real Estate - New York</h3>
                    <div class="California-box">


                    {
                        Residential_NewYork_brands.map((e,i)=>(


                            

                        <div class="California-card" key={i}>
                         

                                  <div class="California-tital">
                                      <p>{formatDateTime(e.time)}</p>
                                      <h4>{e.subject}</h4>
                                          
                                  </div>

                                  <Link to={`/view_email/${e.request_id}`} class="California-img" >
                        {/* <div class="California-img"> */}
                          <img src={e.screenshot_url}/>

                        {/* </div> */}
                        </Link>

                            <div class="California-list">
                              <button onClick={()=>{Like_post(e.request_id)}}>
                              <span>   <img src={like} alt="" /><p>{e.count?e.count:0}</p></span>

                              </button>

                              <button onClick={()=>Saved_Email(e.request_id)}>
                              <span >
                              <img src={fav} alt="" />
                              </span>
                              </button>
                            </div>

                        </div>


                          



                        ))
                      }

                    

                    </div>
                </div>
            </div>
        </div>
    </section>




    <section class="card-salider">
        <div class="main-salider">
            <div class="contanir">
                <div class="Emails-California">
                    <h3> Commercial Real Estate - New York</h3>
                    <div class="California-box">


                    {
                        commercial_newyorkBrands.map((e,i)=>(


                           

                        <div class="California-card" key={i}>
                            

                            <div class="California-tital">
                                <p>{formatDateTime(e.time)}</p>
                                <h4>{e.subject}</h4>
                                    
                            </div>

                            <Link to={`/view_email/${e.request_id}`} class="California-img" >
                        {/* <div class="California-img"> */}
                          <img src={e.screenshot_url}/>

                        {/* </div> */}
                        </Link>
                           

                            <div class="California-list">
                            <button onClick={()=>{Like_post(e.request_id)}}>
                              <span>   <img src={like} alt="" /><p>{e.count?e.count:0}</p></span>

                              </button>

                              <button onClick={()=>Saved_Email(e.request_id)}>
                              <span >
                              <img src={fav} alt="" />
                              </span>
                              </button>
                              
                            </div>

                        </div>


                            



                        ))
                      }

                    

                    </div>
                </div>
            </div>
        </div>
    </section>

    



    <section class="card-salider">
        <div class="main-salider">
            <div class="contanir">
                <div class="Emails-California">
                    <h3> Commercial Real Estate - Other</h3>
                    <div class="California-box">


                    {
                        commercialrealestateotherData.map((e,i)=>(


                           

                        <div class="California-card" key={i}>
                            

                            <div class="California-tital">
                                <p>{formatDateTime(e.time)}</p>
                                <h4>{e.subject}</h4>
                                    
                            </div>

                            <Link to={`/view_email/${e.request_id}`} class="California-img" >
                        {/* <div class="California-img"> */}
                          <img src={e.screenshot_url}/>

                        {/* </div> */}
                        </Link>
                           

                            <div class="California-list">
                            <button onClick={()=>{Like_post(e.request_id)}}>
                              <span>   <img src={like} alt="" /><p>{e.count?e.count:0}</p></span>

                              </button>

                              <button onClick={()=>Saved_Email(e.request_id)}>
                              <span >
                              <img src={fav} alt="" />
                              </span>
                              </button>
                              
                            </div>

                        </div>


                            



                        ))
                      }

                    

                    </div>
                </div>
            </div>
        </div>
    </section>


    <section class="card-salider">
        <div class="main-salider">
            <div class="contanir">
                <div class="Emails-California">
                    <h3> Residential Real Estate - Other</h3>
                    <div class="California-box">


                    {
                        residentialrealestateotherData.map((e,i)=>(


                           

                        <div class="California-card" key={i}>
                            

                            <div class="California-tital">
                                <p>{formatDateTime(e.time)}</p>
                                <h4>{e.subject}</h4>
                                    
                            </div>

                            <Link to={`/view_email/${e.request_id}`} class="California-img" >
                        {/* <div class="California-img"> */}
                          <img src={e.screenshot_url}/>

                        {/* </div> */}
                        </Link>
                           

                            <div class="California-list">
                            <button onClick={()=>{Like_post(e.request_id)}}>
                              <span>   <img src={like} alt="" /><p>{e.count?e.count:0}</p></span>

                              </button>

                              <button onClick={()=>Saved_Email(e.request_id)}>
                              <span >
                              <img src={fav} alt="" />
                              </span>
                              </button>
                              
                            </div>

                        </div>


                            



                        ))
                      }

                    

                    </div>
                </div>
            </div>
        </div>
    </section>








    <section class="card-salider">
      <div class="main-salider">
          <div class="contanir">
              <div class="Emails-California">
                  <h3>Real Estate Brands </h3>
                  <div class="California-box">

                    {
                      brands && brands.brands && brands.brands
                      .filter(e => e.category != 'Residential Real Estate - Other' && e.category != 'Commercial Real Estate - Other')
                      .map((e, i) =>  (
                        <div class="Brands-card" key={i}>
                        <img src={e.image_url} alt="" />
                          <h4>{e.title}</h4>
                          <p>US · {e.site_url}</p>
                          <button onClick={()=>Follow_Brand(e.id)}>Follow</button>
                        </div>


                      ))
                    }

                   
                  

                    


                  </div>
              </div>
          </div>
      </div>
  </section>


  <section class="card-salider">
      <div class="main-salider">
          <div class="contanir">
              <div class="Emails-California">
                  <h3>Other Brands </h3>
                  <div class="California-box">

                    {
                      brands && brands.brands && brands.brands
                      .filter(e => e.category === 'Residential Real Estate - Other' ||e.category === 'Commercial Real Estate - Other')
                      .map((e, i) => (


                        
                        
                        <div class="Brands-card" key={i}>
                        <img src={e.image_url} alt="" />
                          <h4>{e.title}</h4>

                          
                          <p>US · {e.site_url}</p>
                          <button onClick={()=>Follow_Brand(e.id)}>Follow</button>
                        </div>

                        


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

export default Card;
