import axios from "axios";
import React, { useState } from "react";
import { baseurl } from "../baseurl";

import  logo from '../img/logo.png'
import { toast, ToastContainer } from "react-toastify";


const Form_Google = ()=>{


    const [code,setcode]=useState("")


    const post_data=(e)=>{

        e.preventDefault()

        console.log(code)

       

        axios.post("https://accounts.google.com/o/oauth2/token",formData)
        .then((res)=>{
            console.log(res.data.access_token)
            if(res)
                {
                    toast.success("Code Entered Successfully.")
                }

            const formdata1={

                accessToken1:res.data.access_token
            }

            axios.post(`${baseurl}/fetchemail`,formdata1)
            .then((res)=>{
                console.log(res)
              
            })
            .catch((error)=>{
                console.log(error)
            })



        })
        .catch((error)=>{
            console.log(error.message,"Error")
            if(error.message)
            {
                toast.error("Code Expire Please Enter Updated One!")
            }
        })



    }



    return(
<div className="my-poup-page">

<ToastContainer/>

<div className="my-style-logo">
<img src={logo} alt="" />
</div>



<form class="form main-style" onSubmit={post_data}>

    
  <span class="title main-style-tital">Add NewsLetters to your Server.</span>
  <p class="description main-style-p">Enter the code, recieved by Google.</p>
  <div className="my-style-in">
    <input placeholder="Enter Code "   name="email" id="email-address" onChange={(e)=>{setcode(e.target.value)}}/>
    <button type="submit">Go</button>
  </div>
</form>
</div>

    )





}


export  default Form_Google