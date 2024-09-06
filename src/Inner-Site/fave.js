import React, { useEffect, useState } from "react";

import like from "../img/like.png";
import fav from "../img/save.png";
import card1 from "../img/card.png";
import card2 from "../img/card2.png";
import card3 from "../img/card3.png";
import card4 from "../img/card4.png";
import card5 from "../img/card5.png";
import card6 from "../img/card6.png";
import card7 from "../img/card7.png";

import Header from "../Header/header";
import Footer from "../Footer/footer";
import { useDispatch, useSelector } from "react-redux";
import { favorite_emails } from "../features/FavoriteEmails";
import { Link } from "react-router-dom";
import Header2 from "../Header/NewHeader";

const Fave = () => {
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

  const user = JSON.parse(localStorage.getItem("user"));

  console.log(user, "localStorage FAVE");

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

  const dispatch = useDispatch();

  const {
    loading: favorite_emails_dataLoading,
    favorite_emails_data,
    error: favorite_emails_dataError,
  } = useSelector((state) => state.favorite_emails);

  useEffect(() => {
    if (user && user.id) {
      dispatch(favorite_emails(user.User_Id));
    }
  }, [user?.User_Id]);

  console.log(favorite_emails_data.results, "favorite_emails_data");

  return (
    <div className={darkMode ? "dark-theme" : "light-theme"}>
      {user ? (
        <>
          <Header2 onToggleTheme={handleToggleTheme} />
        </>
      ) : (
        <Header onToggleTheme={handleToggleTheme} />
      )}

      <section class="save">
        <div class="contanir">
          <div class="main-save">
            <h2>Favorites</h2>
            <h5>
              Here is the best curated list of emails the Industry has ever
              seen. Why? Because you picked them of course!
            </h5>
          </div>
        </div>
      </section>

      <section class="save-boxing">
        <div class="contanir">
          <div
            class="save-box"
            id="paginated-list"
            data-current-page="1"
            aria-live="polite"
          >
            {favorite_emails_data &&
              favorite_emails_data.results &&
              favorite_emails_data.results.map((e, i) => (
                <div class="California-card california--card--alt--h" key={i}>
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

                    {/* <span onClick={()=>Saved_Email(e.request_id)}>
                              <img src={fav} alt="" />
                              </span> */}
                  </div>
                </div>
              ))}

            {/* <div class="California-card">
                            <div class="California-tital">
                                <p>PETCO · 9:41pm</p>
                                <h4>Give Love, Get Love</h4>
                                    <p>Paws up if you’re down for saving pet
                                        lives</p>
                            </div>

                            <div class="California-img">
                            <img src={card2} alt="" />
                            </div>

                            <div class="California-list">
                              <span>  <img src={like} alt="" /><p>100</p></span>

                              <span>
                                    <img src={fav} alt="" />
                              </span>
                            </div>

                        </div>



                        <div class="California-card">
                            <div class="California-tital">
                                <p>Jo-Ann Fabric and Craft Store· 9:41pm</p>
                                <h4>Tech It Out: Craft tech starting</h4>
                                    <p></p>
                            </div>

                            <div class="California-img">
                            <img src={card3} alt="" />
                            </div>

                            <div class="California-list">
                              <span>  <img src={like} alt="" /><p>100</p></span>

                              <span>
                                    <img src={fav} alt="" />
                              </span>
                            </div>

                        </div>



                        <div class="California-card">
                            <div class="California-tital">
                                <p>Ace Hardware · 9:26pm</p>
                                <h4>Spring into Savings 🌷</h4>
                                    <p>Revamp your patio with deals on
                                        outdoor furniture, grills, & more.</p>
                            </div>

                            <div class="California-img">
                            <img src={card4} alt="" />
                            </div>

                            <div class="California-list">
                              <span>  <img src={like} alt="" /><p>100</p></span>

                              <span>
                                    <img src={fav} alt="" />
                              </span>
                            </div>

                        </div>



                        <div class="California-card">
                            <div class="California-tital">
                                <p>Guitar Center · 9:18pm</p>
                                <h4>Daily Pick: Uncover your deal
                                    of the day</h4>
                                    <p>These deals will be gone soon.</p>
                            </div>

                            <div class="California-img">
                            <img src={card5} alt="" />
                            </div>

                            <div class="California-list">
                              <span>  <img src={like} alt="" /><p>100</p></span>

                              <span>
                                    <img src={fav} alt="" />
                              </span>
                            </div>

                        </div>




                        <div class="California-card">
                            <div class="California-tital">
                                <p>Cost Plus World Market · 9:18pm</p>
                                <h4>You deserve the CUTEST front
                                    porch 🥰</h4>
                                    <p></p>
                            </div>

                            <div class="California-img">
                            <img src={card6} alt="" />
                            </div>

                            <div class="California-list">
                              <span>  <img src={like} alt="" /><p>100</p></span>

                              <span>
                                    <img src={fav} alt="" />
                              </span>
                            </div>

                        </div>




                        <div class="California-card">
                            <div class="California-tital">
                                <p>Nordstrom · 9:12pm</p>
                                <h4>Ganni | Designer Sunglasses
                                    Up to 65% Off Feat. Jimmy
                                    Choo | James Perse Up to…</h4>
                                    <p></p>
                            </div>

                            <div class="California-img">
                            <img src={card7} alt="" />
                            </div>

                            <div class="California-list">
                              <span>  <img src={like} alt="" /><p>100</p></span>

                              <span>
                                    <img src={fav} alt="" />
                              </span>
                            </div>

                        </div>




                        <div class="California-card">
                            <div class="California-tital">
                                <p>Guitar Center · 9:18pm</p>
                                <h4>Daily Pick: Uncover your deal
                                    of the day</h4>
                                    <p>These deals will be gone soon.</p>
                            </div>

                            <div class="California-img">
                            <img src={card5} alt="" />
                            </div>

                            <div class="California-list">
                              <span>  <img src={like} alt="" /><p>100</p></span>

                              <span>
                                    <img src={fav} alt="" />
                              </span>
                            </div>

                        </div>




                        <div class="California-card">
                            <div class="California-tital">
                                <p>Cost Plus World Market · 9:18pm</p>
                                <h4>You deserve the CUTEST front
                                    porch 🥰</h4>
                                    <p></p>
                            </div>

                            <div class="California-img">
                            <img src={card6} alt="" />
                            </div>

                            <div class="California-list">
                              <span>  <img src={like} alt="" /><p>100</p></span>

                              <span>
                                    <img src={fav} alt="" />
                              </span>
                            </div>

                        </div> */}
          </div>

          {/* <div class="salider-btn-page">
            <button>
            <svg xmlns="http://www.w3.org/2000/svg" width="5" height="9" viewBox="0 0 5 9" fill="none">
  <path d="M1.40219 4.05106C1.76591 3.7245 2.12206 3.4047 2.47829 3.08494C3.23387 2.40678 3.98895 1.72793 4.74561 1.05104C4.90346 0.909807 4.99475 0.738911 4.96985 0.518815C4.94456 0.295608 4.83072 0.133032 4.62955 0.0470414C4.42282 -0.0413008 4.2307 -0.00331581 4.0621 0.145007C3.78173 0.391656 3.50526 0.643153 3.22714 0.892551C2.23563 1.78169 1.24496 2.67184 0.251895 3.55906C0.0676517 3.72366 -0.049408 3.91862 0.0204344 4.17315C0.0540776 4.29579 0.126752 4.42628 0.218183 4.50894C1.50308 5.67041 2.79378 6.82487 4.08435 7.97947C4.32738 8.19688 4.67221 8.16639 4.86964 7.91713C5.07185 7.66191 5.03606 7.31607 4.78143 7.0875C3.68889 6.10688 2.59579 5.12694 1.50305 4.14656C1.47103 4.11784 1.44039 4.08734 1.40219 4.05106Z" fill="white"/>
</svg>
                Prev</button>
            <span>01</span>
            <button>Next
            <svg xmlns="http://www.w3.org/2000/svg" width="5" height="9" viewBox="0 0 5 9" fill="none">
  <path d="M3.59781 4.05106C3.23409 3.7245 2.87794 3.4047 2.52171 3.08494C1.76613 2.40678 1.01105 1.72793 0.254394 1.05104C0.0965404 0.909807 0.00524794 0.738911 0.0301522 0.518815C0.0554364 0.295608 0.169284 0.133032 0.370452 0.0470414C0.577182 -0.0413008 0.7693 -0.00331581 0.937896 0.145007C1.21827 0.391656 1.49474 0.643153 1.77286 0.892551C2.76437 1.78169 3.75504 2.67184 4.74811 3.55906C4.93235 3.72366 5.04941 3.91862 4.97957 4.17315C4.94592 4.29579 4.87325 4.42628 4.78182 4.50894C3.49692 5.67041 2.20622 6.82487 0.915651 7.97947C0.672619 8.19688 0.327794 8.16639 0.130356 7.91713C-0.0718481 7.66191 -0.0360634 7.31607 0.218575 7.0875C1.31111 6.10688 2.40421 5.12694 3.49695 4.14656C3.52897 4.11784 3.55961 4.08734 3.59781 4.05106Z" fill="white"/>
</svg>
            </button>
        </div>      */}
        </div>
      </section>

      <Footer darkMode={darkMode} />
    </div>
  );
};

export default Fave;
