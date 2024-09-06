import React, { useEffect, useState } from "react";

import like from "../img/like.png";
import fw from "../img/fw.png";
import fav from "../img/save.png";
import card1 from "../img/card.png";
import card2 from "../img/card2.png";
import card3 from "../img/card3.png";
import card4 from "../img/card4.png";
import card5 from "../img/card5.png";
import card6 from "../img/card6.png";
import card7 from "../img/card7.png";

import inner1 from "../img/inner1.png";
import inner2 from "../img/inner2.png";
import inner3 from "../img/inner3.png";
import inner4 from "../img/inner4.png";
import inner5 from "../img/inner5.png";
import inner6 from "../img/inner6.png";
import inner7 from "../img/inner7.png";
import inner8 from "../img/inner8.png";
// import icard from './img/longcard.png'
import icard from "../img/icard.png";
import ilogo from "../img/ilogo.png";
import Header from "../Header/header";
import Footer from "../Footer/footer";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { baseurl } from "../baseurl";
import Header2 from "../Header/NewHeader";

const Inner = () => {
  const user = JSON.parse(localStorage.getItem("user"));

  const { id } = useParams();
  const [html, sethtml] = useState([]);
  const [branddata, setbranddata] = useState([]);
  const [brand_emails, setbrand_emails] = useState([]);
  const [brandname, setbrandname] = useState("");

  const formatDateTime = (dateTimeString) => {
    const date = new Date(dateTimeString);
    const formattedDate = date.toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
    const formattedTime = date.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    });
    return `${formattedDate} ${formattedTime}`;
  };

  console.log(id, "HTML BDOy");

  useEffect(() => {
    get_html();
  }, [id]);

  const get_html = async () => {
    axios
      .get(`${baseurl}/getsinglehtml/${id}`)
      .then((response) => {
        console.log(response, "HTML RESPONSE");
        sethtml(response.data.html_data[0].html_body);
        setbranddata(response.data.brand[0]);
        setbrand_emails(response.data.brand_emails);
        setbrandname(response.data.brandname);

        console.log(brand_emails, "BRAND EMAILS");
      })
      .catch((error) => {
        console.log(error);
      });
  };
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

  return (
    <div className={darkMode ? "dark-theme" : "light-theme"}>
      {user ? (
        <>
          <Header2 onToggleTheme={handleToggleTheme} />
        </>
      ) : (
        <Header onToggleTheme={handleToggleTheme} />
      )}

      <section class="inner">
        <div class="contanir">
          <div class="inner-main">
            <div class="inner-card">
              {/* <img src={icard} alt="" /> */}

              <div class=" i-card-img">
                <img
                  src={branddata.image_url ? branddata.image_url : ilogo}
                  alt=""
                />
              </div>

              <div class=" i-card-list-1">
                <img
                  src={branddata.image_url ? branddata.image_url : ilogo}
                  alt=""
                />

                <span>
                  <h2>{branddata.title ? branddata.title : ""}</h2>
                  <h5> {branddata.site_url ? branddata.site_url : " "}</h5>
                </span>

                {/* <a href='#'>Follow</a> */}
              </div>

              <div class="my-box">
                {/* <div class=" i-card-list-2">
                        <h2> Don't Miss Out! <br/>Leggings at $9.99</h2>

                        <h5>Score Big Savings: Leggings Galore & Back in Stock Tops! ­­­­­­­­­­­­­­­­­­­­­­­­­­­­­­­­­­­­­­­­­­­­­­­­­­­­­­­­­­­­­</h5>

                        <p >This email was sent</p>

                        <p className='hello-p'>March 23, 2024 3:16am</p>
                     </div> */}
              </div>
              <div class=" i-card-list-3">
                <span>
                  <img src={like} alt="" />
                  <p>Like</p>
                </span>

                <span>
                  <img src={fw} alt="" />

                  <p>Follow</p>
                </span>

                <span>
                  <img src={fav} alt="" />

                  <p>Save</p>
                </span>
              </div>
            </div>

            <div class="inner-box hello-change">
              <div dangerouslySetInnerHTML={{ __html: html }}></div>
              {/* <img src={inner1} alt="" />

                    <img src={inner2} alt="" />


                    <img src={inner3} alt="" />


                    <img src={inner4} alt="" />


                    <img src={inner5} alt="" />


                    <img src={inner6} alt="" />


                    <img src={inner7} alt="" />

                    <img src={inner8} alt="" /> */}
            </div>
          </div>
        </div>
      </section>

      <section class="card-salider">
        <div class="main-salider">
          <div class="contanir">
            <div class="Emails-California">
              <h3> More Emails from {brandname}</h3>
              <div class="California-box">
                {brand_emails &&
                  brand_emails.map((e, i) => (
                    <div
                      class="California-card california--card--alt--h"
                      key={i}
                    >
                      <div class="California-tital">
                        <p>{formatDateTime(e.time)}</p>
                        <h4>{e.subject}</h4>
                      </div>

                      <Link
                        to={`/view_email/${e.request_id}`}
                        class="California-img"
                      >
                        {/* <div class="California-img"> */}
                        <img src={e.screenshot_url} />

                        {/* </div> */}
                      </Link>

                      <div style={{ display: "none" }} class="California-list">
                        <span>
                          {" "}
                          <img src={like} alt="" />
                          <p>100</p>
                        </span>

                        <button>
                          <span>
                            <img src={fav} alt="" />
                          </span>
                        </button>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer darkMode={darkMode} />
    </div>
  );
};

export default Inner;
