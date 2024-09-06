import React, { useEffect, useState } from 'react';

import about1 from '../img/about1.png'
import about2 from '../img/about2.png'
import Header from '../Header/header';
import Footer from '../Footer/footer';
import Header2 from '../Header/NewHeader';





const About = ( ) => {
  const [darkMode, setDarkMode] = useState(false); // State to track the current theme
  const toggleTheme = () => {
    setDarkMode(!darkMode); // Toggle the theme
  };
  console.log(toggleTheme);
  const handleToggleTheme = (value) => {

    setDarkMode(value); // Toggle darkMode state
  };
  useEffect(() => {
    console.log("Theme toggled. Dark mode is now: ", darkMode);
    // Additional actions after darkMode state update
  }, [darkMode]);

  const user = JSON.parse(localStorage.getItem("user"))


  return (
    <div className={darkMode ? 'dark-theme' : 'light-theme'} >
      {user ? (<>

        <Header2  onToggleTheme={handleToggleTheme} />

      </>)

        : (<Header  onToggleTheme={handleToggleTheme} />)}




      <section class="about">
        <div class="contanirz">

          <div class="main-about">

        <div>
             
                
                <section class="save">
         <div class="contanir">
            <div class="main-save">
              <h2>About Us</h2>

              
            </div>
         </div>
    </section>


    <section class="about">
    <div class="contanirz">

    <div class="main-about">

    <div class="main-box-about">
   
   {/* <div class="about-img">
   <img src={about1} alt="" />
   </div> */}
   
   <div class="about-tital">

   <h5>I'm a Real Estate investor and I threw my computer out the window yesterday. Why?</h5>

   <h5>One week you are overloaded, your hair is falling out, and your phone won't stop ringing. The next week, nothing. Not even your mother is calling you back.</h5>

   <h5>Such is the life of a lowly Real Estate Investor.</h5>
   <h5>Getting on industry email lists is one of the best ways to keep your finger on the pulse of the market and to be exposed to great deals.</h5>

   <h5>So, you go through all the work to get on all the email lists you can. You CALL, EMAIL and
SLEUTH the internet to find "all the best email lists". Great! You are the most well informed real estate investor in the universe!</h5>

   <h5>You get an email about a great off market deal, you buy it and pat yourself on the back. Look how smart you are getting the inside track by being on all those email lists!</h5>

   <h5>It will be several months before you are in a position to buy again but your inbox is still getting flooded with deals. What do you do? Unsubscribe to them all? But, in several months you will have to go through all that work again to resubscribe.</h5>
   <h5>Hopelessness ensues.</h5>
   <h5>But wait we built a solution!</h5>
   <h5>Broker Bulletins was created to help you with two things:</h5>
   <h5>1. We do all the work for you and subscribe to as many industry email lists as possible. Saving you time and the risk of not seeing "the right email".</h5>
   <h5>2. When you are not in the mood to get buried in emails just don’t visit the website (we will miss you). Your inbox will thank us.</h5>
   <h5>Simply visit our website (You are here already!). Search through email lists, favorite and follow to keep track of important information. Find the right deals first, become a billionaire!</h5>  
   <h5>Commercial Real Estate Investors this is for you!</h5>
   <h5>Residential Real Estate Investors this is for you!</h5>
   <h5>Don’t forget to sign up so you can use the Favorite and Follow functionality!</h5>


   

   </div>
   </div>



{/* 
   <div class="main-box-about">
   <div class="about-tital">
   <h2>Who We Are</h2>
   <h5>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</h5>

   <h5>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</h5>

   </div>
   <div class="about-img">
   <img src={about2} alt="" />
   </div>

   </div> */}
    </div>

    </div>
    </section>




  


          </div>

        </div>

        </div>
      </section>




      <Footer darkMode={darkMode} />








    </div>
    
  )

}

export default About
























