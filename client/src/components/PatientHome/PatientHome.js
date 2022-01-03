import React, { useState, UseEffect } from "react";
import { useEffect } from "react/cjs/react.development";
import Datalist from "./Datalist";

const PatientHome = ({ userDetails }) => {
  const { userType, userData, loggedIn } = userDetails;

  console.log("The patients data is", userData);

    useEffect(() => {
        // check session token to make sure user is logged in.
    }, [])

  
  return (
    <div>
        <h1>Welcome {userData.firstName}</h1>
      {newData}
    </div>
    )
};

export default PatientHome;
