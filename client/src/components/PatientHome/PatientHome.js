import React, { useState, UseEffect } from "react";
import { useEffect } from "react/cjs/react.development";
import DatailVisitCard from "./DatailVisitCard";
import Datalist from "./Datalist";
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
  
  console.log('User data', userDetails.userData);

  return (
    <div>
      
        <h1>Welcome {userData.firstname}</h1>
        <button className="btn">Profile
        </button>
        <Datalist patientData={userDetails.userData}/>
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
