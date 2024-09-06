import React, { useEffect, useState } from 'react'
import logo1 from '../img/logo.png'
import photo from '../img/photo.png'
import { useDispatch, useSelector } from 'react-redux';
import { getemails } from '../features/userDetailSlice';
import { getbrands } from '../features/BrandService';
import { residential_florida } from '../features/ResidentialFlorida';
import { residential_newyork } from '../features/ResidentialNewyork';
import { commercial_newyork } from '../features/CommercialNewyork';
import { commercial_florida } from '../features/CommercialFlorida';
import axios from 'axios';
import { baseurl } from '../baseurl';
import { ToastContainer, toast } from 'react-toastify';

import { residentialrealestateother } from '../features/ResidentialRealEstateOther';
import { commercialrealestateother } from '../features/CommercialRealEstateOther';

const Dashboard2 = () => {


    const dispatch = useDispatch();
    
  const { loading: userLoading, users, error: userError } = useSelector((state) => state.userDetail);
  
  // Second useSelector block
  const { loading: brandLoading, brands, error: brandError } = useSelector((state) => state.getbrands);
  
  const { loading: Residential_Florida_brandsLoading, Residential_Florida_brands, error: Residential_Florida_brandsError } = useSelector((state) => state.residential_florida);
  
  const { loading: residentialrealestateotherLoading, residentialrealestateotherData, error: residentialrealestateotherError } = useSelector((state) => state.residentialrealestateother);

  const { loading: commercialrealestateotherDataLoading, commercialrealestateotherData, error: commercialrealestateotherError } = useSelector((state) => state.commercialrealestateother);

  
  const { loading: commercial_floridaBrandsLoading, commercial_floridaBrands, error: commercial_floridaBrandsError } = useSelector((state) => state.commercial_florida);
  
  const { loading: commercial_newyorkBrandsLoading, commercial_newyorkBrands, error: commercial_newyorkBrandsError } = useSelector((state) => state.commercial_newyork);
  
  
  const { loading: Residential_NewYork_brandsLoading, Residential_NewYork_brands, error: Residential_NewYork_brandsError } = useSelector((state) => state.residential_newyork);
  
  
    useEffect(() => {
      dispatch(getemails());
      dispatch(getbrands());
      dispatch(residential_florida())
  
      dispatch(residential_newyork())
      dispatch(commercial_newyork())
      dispatch(commercial_florida())
      dispatch(residentialrealestateother())
    dispatch(commercialrealestateother())
  
    }, [dispatch]);



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



      const [show1,setshow1]= useState(true)
      const [show2,setshow2]= useState(false)
      const [show3,setshow3]= useState(false)
      const [show4,setshow4]= useState(false)
      const [show5,setshow5]= useState(false)
      const [show6,setshow6]= useState(false)
      const [show7,setshow7]= useState(false)



      const Show1 = ()=>{

        setshow1(true)
        setshow2(false)
        setshow3(false)
        setshow4(false)
        setshow5(false)
        setshow6(false)
        setshow7(false)

      }
      const Show2 = ()=>{

        setshow1(false)
        setshow2(true)
        setshow3(false)
        setshow4(false)
        setshow5(false)
        setshow6(false)
        setshow7(false)
      }

      const Show3 = ()=>{

        setshow1(false)
        setshow2(false)
        setshow3(true)
        setshow4(false)
        setshow5(false)
        setshow6(false)
        setshow7(false)
      }

      const Show4 = ()=>{

        setshow1(false)
        setshow2(false)
        setshow3(false)
        setshow4(true)
        setshow5(false)
        setshow6(false)
        setshow7(false)
      }

      const Show5 = ()=>{

        setshow1(false)
        setshow2(false)
        setshow3(false)
        setshow4(false)
        setshow5(true)
        setshow6(false)
        setshow7(false)
      }



      const Show6 = ()=>{

        setshow1(false)
        setshow2(false)
        setshow3(false)
        setshow4(false)
        setshow5(false)
        setshow6(true)
        setshow7(false)
      }

      const Show7 = ()=>{

        setshow1(false)
        setshow2(false)
        setshow3(false)
        setshow4(false)
        setshow5(false)
        setshow6(false)
        setshow7(true)
      }


      const Delete_Brand=(e)=>{

          console.log(e,'DELTE BRAND')

          const formData={
            id:e
          }
          axios.post(`${baseurl}/deletebrandandemail`,formData)
          .then((response)=>{
            console.log(response)

            if(response.data.message=true)
              {
                toast.success("Brand Deleted Successfully")

                setTimeout(() => {
                    window.location.reload()
                }, 1000);
              }

          })
          .catch((error)=>{
            console.log(error)
          })


      }






    return (


        <div>

          <ToastContainer/>

<section class="section-dashbord">
        <div class="contanir">
            <div class="main-borad">
                <div class="logo-bord">
                <img src={logo1} alt="" />
                </div>

                <div class="borad-box">
                <div class="tab">


                <div class="radio-input">
  <label onClick={Show1}>
  <input type="radio" id="value-1" name="value-radio" value="value-1"/>
  <span >Residential Florida</span>
  </label>
  <label  onClick={Show2}>
    <input type="radio" id="value-2" name="value-radio" value="value-2"/>
  <span>Commercial Florida</span>
  </label>
  <label onClick={Show3}>
    <input type="radio" id="value-3" name="value-radio" value="value-3"/>
  <span >Residential New York</span>
  </label>


  <label  onClick={Show4}>
    <input type="radio" id="value-4" name="value-radio" value="value-4"/>
  <span>Commercial New York</span>
  </label>


  <label  onClick={Show6}>
    <input type="radio" id="value-4" name="value-radio" value="value-4"/>
  <span>Residential Real Estate - Other</span>
  </label>


 
  
  <label  onClick={Show7}>
    <input type="radio" id="value-4" name="value-radio" value="value-4"/>
  <span>Commercial Real Estate - Other</span>
  </label>

  <label  onClick={Show5}>
    <input type="radio" id="value-4" name="value-radio" value="value-4"/>
  <span>Brands</span>
  </label>

  <span class="selection"></span>
</div>


                    {/* <button class="tablinks" onclick="openCity(event, 'London')" ></button>
                    <button class="tablinks" onclick="openCity(event, 'Paris')" >Commercial Florida</button>

                    <button class="tablinks" onclick="openCity(event, 'London')" >Residential Newyork</button>
                    <button class="tablinks" onclick="openCity(event, 'London')" >Commercial Newyork </button> */}

                  </div>


                {
                    show2 && 
                     <div  id="London" class="tabcontent">

                            {
                                commercial_floridaBrands.map((e,i)=>(


                                    <div class="borad-list">
                        <div class="borad-imger">
                        <img src={e.screenshot_url} alt="" />
                        </div>

                        <div class="borad-tital">
                           <h5>{e.subject}</h5>
                            
                            <h4 className='spacing'>{formatDateTime(e.time)}</h4>
                        </div>
                    </div>


                                ))
                            }


                    

               
                </div> 

                }

                {
                    show3 &&

                     <div  id="London" class="tabcontent">

                            {
                                Residential_NewYork_brands.map((e,i)=>(


                                    <div class="borad-list">
                        <div class="borad-imger">
                        <img src={e.screenshot_url} alt="" />
                        </div>

                        <div class="borad-tital">
                           <h5>{e.subject}</h5>
                           
                            <h4 className='spacing'>{formatDateTime(e.time)}</h4>
                        </div>
                    </div>


                                ))
                            }


                
                </div> 
                }
                


                    { show1
                    &&

                     <div  id="London" class="tabcontent">

                            {
                                Residential_Florida_brands.map((e,i)=>(


                                    <div class="borad-list">
                        <div class="borad-imger">
                        <img src={e.screenshot_url} alt="" />
                        </div>

                        <div class="borad-tital">
                           <h5>{e.subject}</h5>
                           
                            <h4 className='spacing'>{formatDateTime(e.time)}</h4>
                        </div>
                    </div>


                                ))
                            }



                </div> 
                    
                    }

                

                    {
                        show4 &&
                        <div  id="London" class="tabcontent">

                        {
                            commercial_newyorkBrands.map((e,i)=>(
                        
                        
                                <div class="borad-list">
                        <div class="borad-imger">
                        <img src={e.screenshot_url} alt="" />
                        </div>
                        
                        <div class="borad-tital">
                        <h5>{e.subject}</h5>
                        
                        <h4 className='spacing'>{formatDateTime(e.time)}</h4>
                        </div>
                        </div>
                        
                        
                            ))
                        }
                        
                        
                        
                        
                        
                        </div>
                    }



{
                    show5 &&

                     <div  id="London" class="tabcontent1">

                         
                    {
                      brands && brands.brands && brands.brands.map((e, i) => (
                        <div class="Brands-card" key={i}>
                        <img src={e.image_url} alt="" />
                          <h4>{e.title}</h4>
                          <p>US · {e.site_url}</p>
                          <button onClick={()=>Delete_Brand(e.id)} >Delete</button>
                        </div>


                      ))
                    }


                
                </div> 
                }


                
{
                        show6 &&
                        <div  id="London" class="tabcontent">

                        {
                            residentialrealestateotherData.map((e,i)=>(
                        
                        
                                <div class="borad-list">
                        <div class="borad-imger">
                        <img src={e.screenshot_url} alt="" />
                        </div>
                        
                        <div class="borad-tital">
                        <h5>{e.subject}</h5>
                        
                        <h4 className='spacing'>{formatDateTime(e.time)}</h4>
                        </div>
                        </div>
                        
                        
                            ))
                        }
                        
                        
                        
                        
                        
                        </div>
                    }


{
                        show7 &&
                        <div  id="London" class="tabcontent">

                        {
                            commercialrealestateotherData.map((e,i)=>(
                        
                        
                                <div class="borad-list">
                        <div class="borad-imger">
                        <img src={e.screenshot_url} alt="" />
                        </div>
                        
                        <div class="borad-tital">
                        <h5>{e.subject}</h5>
                        
                        <h4 className='spacing'>{formatDateTime(e.time)}</h4>
                        </div>
                        </div>
                        
                        
                            ))
                        }
                        
                        
                        
                        
                        
                        </div>
                    }
                

     

        

            </div>

            </div>
        </div>
    </section>






        </div>
    )

}

export default Dashboard2