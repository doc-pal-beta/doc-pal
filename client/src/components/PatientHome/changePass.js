import React, { Component } from "react";
import { useNavigate, Link } from "react-router-dom";

const ChangePass = (props) => {
  const navigate = useNavigate();
  
    return (
      <div className='container'>
        <h1>Change Password</h1>
        <br />
          <form onSubmit={(e) => {
            e.preventDefault();
          if (e.target[1].value === e.target[2].value){
            fetch(`http://localhost:3000/patients/changePass`, {
              method: "PUT",
              headers: {
                "Content-Type": "application/json",
              },
              credentials: "include",
              body: JSON.stringify({
                firstName: props.userDetails.userData.firstName,
                lastName: props.userDetails.userData.lastName,
                currentPassword: e.target[0].value,
                newPassword: e.target[1].value
              }),
            })
            .then(response => response.json())
            .then((user) => {
              if (user.hasOwnProperty("firstName")) {
                alert("Password succesfully changed.")
                navigate("/patient")
              }
            })
          } else { alert("The inputted passwords do not match.")}
        }}>
                <div style={{marginBottom:'15px'}} className="subContainer">
          <label htmlFor="tempPass">Current Password</label>
          <input
            className="loginInput"
            type="password"
            id="tempPass"
            placeholder="Current Password"
            autoComplete="off"
          ></input><br />       
          <label htmlFor="newPass">New Password</label>
          <input
            className="loginInput"
            type="password"
            id="newPass"
            placeholder="New Password"
            autoComplete="off"
          ></input><br />
          <label htmlFor="confirmNewPass">Confirm New Password</label>
          <input
            className="loginInput"
            type="password"
            id="confirmNewPass"
            placeholder="New Password"
            autoComplete="off"
          ></input><br />
          <button className="btn">Submit</button>
          <Link
            style={{ textDecoration: "none", fontSize: "13px" }}
            className="btn"
            to="/patient"
          >
            Go Back
          </Link>
        </div>
        </form>
      </div>
    );
  }

export default ChangePass;
