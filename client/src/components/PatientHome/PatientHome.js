import React, { useState, UseEffect } from "react";
import { useEffect } from "react/cjs/react.development";
import DatailVisitCard from "./DatailVisitCard";
import Datalist from "./Datalist";
import ToHomePage from "../DoctorHome/LogOutButton";
import ChangePass from "./changePass";
import { useNavigate } from "react-router-dom";

const PatientHome = ({ userDetails }) => {
  const navigate = useNavigate();
  const { userType, userData, loggedIn } = userDetails;


  console.log("The patients data is", userData);
  const handleChangePass= () => {
    navigate('/changePass')
  }

  const newData = [];
  for (let i = 0; i < userDetails.userData.visits.length; i++) {
    newData.push(
      <DatailVisitCard visit_Data={userDetails.userData.visits[i]} key={i} />
    );
  }
  
  return (
    <div>
      
        <h1>Welcome {userData.firstname}</h1>
        <button className="btn">Profile
        </button>
        <Datalist patientData={userDetails.userData}/>
        {/* <button className="btn" onClick={handleChangePass}>Change Password</button> */}
        <ToHomePage />
        <h1>Welcome {userData.firstName}</h1>
        {newData}
    
    </div>
  );
};

//test
export default PatientHome;
