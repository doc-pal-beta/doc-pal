import React, { useState, UseEffect } from "react";
import { useEffect } from "react/cjs/react.development";
import DatailVisitCard from "./DatailVisitCard";
import ToHomePage from "../DoctorHome/LogOutButton";
import ChangePass from "./changePass";
import { useNavigate } from "react-router-dom";

const PatientHome = ({ userDetails, setUserDetails }) => {
  const navigate = useNavigate();
  const { userType, userData, loggedIn } = userDetails;
  const handleChangePass = () => {
    navigate("/changePass");
  };

  useEffect(() => {
    fetch("http://localhost:3000/authenticate", { credentials: "include" })
      .then((json) => json.json())
      .then((response) => {
        setUserDetails(response);
        if (response.loggedIn && response.userType === "patient") {
          setUserDetails(response);
        } else {
          setUserDetails(response);
          navigate(`/${userType}`);
        }
      });
  }, []);

  return (
    <div>
      <button className="btn" onClick={handleChangePass}>
        Change Password
      </button>
      <ToHomePage />
      <h1>Welcome {userData.firstName}</h1>
      {userDetails.userData.visits.length > 0 &&
        userDetails.userData.visits.map((visit, key) => (
          <DatailVisitCard visit_Data={visit} key={key} />
        ))}
    </div>
  );
};

//test
export default PatientHome;
