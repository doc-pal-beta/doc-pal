import React, { useState, UseEffect } from "react";
import { useEffect } from "react/cjs/react.development";
import Datalist from "./Datalist";
import DatailVisitCard from "./DatailVisitCard";
const PatientHome = ({ userDetails }) => {
  const { userType, userData, loggedIn } = userDetails;


  console.log("The patients data is", userData);

  useEffect(() => {
    // check session token to make sure user is logged in.
  }, []);

  console.log('')

  const newData = [];
  for (let i = 0; i < userDetails.userData.visits.length; i++) {
    newData.push(
      <DatailVisitCard visit_Data={userDetails.userData.visits[i]} key={i} />
    );
  }
  
  console.log('User data', userDetails);

  return (
    <div>
      
        <h1>Welcome {userData.firstname}</h1>
        {newData}
    
      <button
        className="btn"
        onClick={(event) => (window.location.href = "/changePass")}
      >
        Change Password
      </button>
      <button className="btn" onClick={(event) => (window.location.href = "/")}>
        Sign Out
      </button>      
    </div>
  );
};

export default PatientHome;
