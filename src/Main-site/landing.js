import React, { useEffect, useState } from "react";

import Header from "../Header/header";
import Footer from "../Footer/footer";
import Card from "../Main-site/Card";
import LOGIN from "../Login/login";

import LoggedinHeader from "../Header/loggedinHeader";
import { useDispatch, useSelector } from "react-redux";
import { search_filter } from "../features/SearchFilter";
import FilterSearchCard from "./FilterSearchCard";
import Header2 from "../Header/NewHeader";

const Landing = () => {

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

  

  const [dialogOpen, setDialogOpen] = useState(false);
  const handleOpenDialog = () => {
    setDialogOpen(true);
  };
  const handleCloseDialog = () => {
    setDialogOpen(false);
  };



  const user = JSON.parse(localStorage.getItem("user"));
  const [input, setinput] = useState("");
  const [showinput, setshowinput] = useState(false);
  const dispatch = useDispatch();
  const {
    loading: search_filter_dataLoading,
    search_filter_data,
    error: search_filter_dataError,
  } = useSelector((state) => state.search_filter);

  const Filter = () => {
    console.log(input, "Fliter");

    dispatch(search_filter(input));

    if (search_filter_data) {
      setshowinput(true);
    }

    console.log(search_filter_data, "search_filter_data");
  };

  const hideData = () => {
    setshowinput(false);
  };

  return (
    <div className={`zinsex-1 ${darkMode ? "dark-theme" : "light-theme"}`}>
      {showinput && (
        <div className="zinsex-2">
          <div className="zinsex-3">
            <button onClick={hideData}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="21"
                viewBox="0 0 12 21"
                fill="none"
              >
                <g clip-path="url(#clip0_19_32)">
                  <path
                    d="M-0.289988 0.342163C-0.289988 1.41929 0.774074 3.02772 1.8512 4.37776C3.23608 6.11975 4.89096 7.63963 6.78828 8.7995C8.2109 9.66904 9.93546 10.5037 11.3232 10.5037C9.93546 10.5037 8.20944 11.3384 6.78828 12.208C4.89096 13.3693 3.23608 14.8892 1.8512 16.6283C0.774074 17.9798 -0.289988 19.5911 -0.289988 20.6653"
                    stroke="black"
                    stroke-width="3"
                  ></path>
                </g>
                <defs>
                  <clipPath id="clip0_19_32">
                    <rect
                      width="20.9038"
                      height="11.3229"
                      fill="white"
                      transform="matrix(0 1 -1 0 11.3232 0.0518188)"
                    ></rect>
                  </clipPath>
                </defs>
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="21"
                viewBox="0 0 12 21"
                fill="none"
              >
                <g clip-path="url(#clip0_19_34)">
                  <path
                    d="M12.2875 20.6099C12.2776 19.5329 11.1987 17.9343 10.1092 16.5943C8.70828 14.8652 7.03943 13.3606 5.13149 12.2183C3.7009 11.3619 1.9687 10.5432 0.580979 10.556C1.9687 10.5432 3.68694 9.6926 5.10002 8.80998C6.98652 7.63118 8.62731 6.09609 9.99607 4.34429C11.0607 2.98291 12.1098 1.36182 12.0999 0.287645"
                    stroke="black"
                    stroke-width="3"
                  ></path>
                </g>
                <defs>
                  <clipPath id="clip0_19_34">
                    <rect
                      width="20.9038"
                      height="11.3229"
                      fill="white"
                      transform="translate(0.677734 21.0075) rotate(-90.529)"
                    ></rect>
                  </clipPath>
                </defs>
              </svg>
            </button>
          </div>
          <FilterSearchCard data={search_filter_data} />
        </div>
      )}

      {user ? (
        <>
          <Header2 onToggleTheme={handleToggleTheme} onOpenDialog={handleOpenDialog} />
        </>
      ) : (
        <Header  onToggleTheme={handleToggleTheme} onOpenDialog={handleOpenDialog}/>
      )}
      {/* <Header onOpenDialog={handleOpenDialog}/> */}

      <section class="hero">
        <div class="contanir">
          <div class="main-hero">
            <h2>
              The search engine for <span>Real Estate emails</span>
            </h2>
            <div class="hero-serch">
              <input  
                type="search"
                placeholder="Search Brands or Keywords"
                onChange={(e) => setinput(e.target.value)}
              />
              <button onClick={Filter}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="55"
                  height="50"
                  viewBox="0 0 55 50"
                  fill="none"
                >
                  <rect width="55" height="50" fill="#3B82F6" />
                  <path
                    d="M33.031 29.617L37.314 33.899L35.899 35.314L31.617 31.031C30.0237 32.3082 28.042 33.0029 26 33C21.032 33 17 28.968 17 24C17 19.032 21.032 15 26 15C30.968 15 35 19.032 35 24C35.0029 26.042 34.3082 28.0237 33.031 29.617ZM31.025 28.875C32.2941 27.5699 33.0029 25.8204 33 24C33 20.133 29.867 17 26 17C22.133 17 19 20.133 19 24C19 27.867 22.133 31 26 31C27.8204 31.0029 29.5699 30.2941 30.875 29.025L31.025 28.875Z"
                    fill="white"
                  />
                </svg>
              </button>
            </div>
            {/* <h4>31,872,637 emails from 112,388 brands</h4> */}
          </div>
        </div>
      </section>

      <Card />

      <Footer darkMode={darkMode} />

      {dialogOpen && (
        <dialog open onClose={handleCloseDialog}>
          <LOGIN />
        </dialog>
      )}
    </div>
  );
};

export default Landing;
