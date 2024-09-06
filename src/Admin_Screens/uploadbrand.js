import React, { useState } from 'react';
import { Image, Video, Transformation, CloudinaryContext } from 'cloudinary-react';
import axios from 'axios';
import { baseurl } from '../baseurl';
import { ToastContainer, toast } from 'react-toastify';

const CloudinaryUpload = ({ cloudName, uploadPreset }) => {
  const [site_url, setWebsiteUrl] = useState('');
  const [title, setTitle] = useState('');
  const [brand_email, setbrand_email] = useState('');
  const [selectedOption, setSelectedOption] = useState('');
  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const [image_url,setimage]= useState('')

  const [selectedFile, setSelectedFile] = useState(null);


   uploadPreset= "twjpxlos"

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    if (!selectedFile) {
      console.error('No file selected');
      return;
    }

    const formData = new FormData();
    formData.append('file', selectedFile);
    formData.append('upload_preset', uploadPreset);

    try {
      const response = await fetch(`https://api.cloudinary.com/v1_1/dcd0ad1pk/upload`, {
        method: 'POST',
        body: formData,
      });
      const data = await response.json();
      console.log('Upload successful TS:', data.url);
      setimage(data.url)
      // Handle success: data contains information about the uploaded file
    } catch (error) {
      console.error('Error uploading file:', error);
      // Handle error
    }
  };



  const Upload_data=(e)=>{


    e.preventDefault()
    Upload_data1(e)
    console.log(site_url,title,image_url,selectedOption,"UPLOAD DATA")

    const formData=({
      site_url:site_url,
      image_url:image_url,
      title:title,
      brand_email:brand_email,
      category: selectedOption


    })

      axios.post(`${baseurl}/upload-brand`,formData)
      .then((response)=>{

        console.log(response)

        


      })
      .catch((error)=>{
        console.log(error)


      })






  }

  const Upload_data1=(e)=>{

    e.preventDefault()
    console.log(site_url,title,image_url,selectedOption,"UPLOAD DATA")

    const formData=({
      site_url:site_url,
      image_url:image_url,
      title:title,
      brand_email:brand_email,
      category: selectedOption


    })

      axios.post(`${baseurl}/upload-brand1`,formData)
      .then((response)=>{

        console.log(response.data,"DATA!!")

        if(response.data.data.length >0)
          {
            toast.success("Brand Added Successfully")

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
    

    <section class="popup">
      <ToastContainer/>
        <div class="Post-popup">
            <div class="main-Post-popup">
                <h2>Add My Brand</h2>

                
                <div class="img-uploder">
                    <label class="custum-file-upload" for="file">
                       
                        <div class="text">
                           <span><svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 70 70" fill="none">
                            <path d="M55.4173 37.9108H37.9173V55.4108H32.084V37.9108H14.584V32.0775H32.084V14.5775H37.9173V32.0775H55.4173V37.9108Z" fill="black"/>
                          </svg></span>
                           </div>
                           <input type="file"  id='file' onChange={handleFileChange} />
                           <button onClick={handleUpload}>
                        Upload Photo
                      </button>
                        </label>
                </div>

                <div className='my-uplode-img'>
                  <img src={image_url}/>
                </div>


                <form onSubmit={Upload_data }>

                    <input type="text" placeholder="Enter Website URL" onChange={(e)=>{setWebsiteUrl(e.target.value)}}/>
                    <input type="text" placeholder="Enter Title" onChange={(e)=>{setTitle(e.target.value)}}/>

                    <input type="text" placeholder="Enter Brand Email" onChange={(e)=>{setbrand_email(e.target.value)}}/>

                    <select value={selectedOption} onChange={handleOptionChange}>
                        <option value="Residential Real Estate - New York City">Select Option</option>
                        <option value="Residential Real Estate - New York City">Residential Real Estate - New York City</option>
                        <option value="Residential Real Estate - Florida">Residential Real Estate - Florida</option>
                        <option value="Commercial Real Estate - New York">Commercial Real Estate - New York</option>
                        <option value="Commercial Real Estate - Florida">Commercial Real Estate - Florida</option>
                        <option value="Commercial Real Estate - Other">Commercial Real Estate - Other</option>
                        <option value="Residential Real Estate - Other">Residential Real Estate - Other</option>
                      </select>


                      <button >
                        Create
                      </button>
                </form>

            </div>
        </div>
    </section>
  );
};

export default CloudinaryUpload;
