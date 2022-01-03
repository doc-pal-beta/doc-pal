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
      <button className="btn" onClick={event =>  window.location.href='/changePass'}>Change Password</button>
      <button className="btn" onClick={event =>  window.location.href='/'}>Sign Out</button>
        <h1>Welcome {userData.firstName}</h1>

    </div>
    )
};

export default PatientHome;
