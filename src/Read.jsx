import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getemails } from "./features/userDetailSlice";



const Read = () => {
  const dispatch = useDispatch();

  const [id, setId] = useState();

  const [radioData, setRadioData] = useState("");

  const [showPopup, setShowPopup] = useState(false);

  const { loading, users, error } = useSelector((state) => state.userDetail);

  useEffect(() => {
    dispatch(getemails());
  }, []);

 

  return (
    // <div>
     
    //   <h2>All data</h2>
    //   <input
    //     class="form-check-input"
    //     name="gender"
    //     checked={radioData === ""}
    //     type="radio"
    //     onChange={(e) => setRadioData("")}
    //   />
    //   <label class="form-check-label">All</label>
    //   <input
    //     class="form-check-input"
    //     name="gender"
    //     checked={radioData === "Male"}
    //     value="Male"
    //     type="radio"
    //     onChange={(e) => setRadioData(e.target.value)}
    //   />
    //   <label class="form-check-label">Male</label>
    //   <input
    //     class="form-check-input"
    //     name="gender"
    //     value="Female"
    //     checked={radioData === "Female"}
    //     type="radio"
    //     onChange={(e) => setRadioData(e.target.value)}
    //   />
    //   <label class="form-check-label">Female</label>

    //   <div>
    //     {users &&
    //       users.map((e,i)=>(

    //         <h2>{e.subject}</h2>


    //       ))

           
           
    //        }
    //   </div>
    // </div>
    <>
      {
        users.map((e,i)=>(

          <h2>{e.subject}</h2>

        ))
      }

    </>
  );
};

export default Read;
