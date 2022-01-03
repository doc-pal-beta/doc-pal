import React, { useState, UseEffect } from "react";
import { useEffect } from "react/cjs/react.development";
import Datalist from "./Datalist";
import { useNavigate } from "react-router-dom";

const PatientHome = ({ userDetails, setUserDetails }) => {
  const { userType, userData, loggedIn } = userDetails;
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:3000/authenticate", { credentials: "include" })
      .then((json) => json.json())
      .then((response) => {
        console.log(response);
        if (response.userType !== "patient") {
          setUserDetails(response);
          console.log("Redirecting to home");
          navigate(`/`);
        }
      });
  }, []);

  return (
    <div>
      <button
        onClick={(e) => {
          fetch("http://localhost:3000/logout", { credentials: "include" })
            .then((json) => json.json())
            .then((response) => {
              setUserDetails(response);
              console.log("Redirecting to login");
              navigate(`/${response.userType}`);
            });
        }}
      >
        Log Out
      </button>
      <h1>Welcome {userData.firstName}</h1>
    </div>
  );
};

export default PatientHome;
