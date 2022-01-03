import React, { useState, useEffect } from "react";
import SignUp from "./SignUp";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useNavigate,
} from "react-router-dom";

const Login = ({ props }) => {
  const { setUserDetails } = props;

  //data from server
  const navigate = useNavigate();

  const initialValues = { member: "", username: "", password: "" };
  const [details, setDetails] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setSubmit] = useState(false);


  return (
    <div className="container">
      <h2>Welcome to Doc-Pal</h2>
      <form
        className="login"
        onSubmit={(e) => {
          e.preventDefault();

          fetch(
            `http://localhost:3000/patient/login`,
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                firstName: e.target[0].value,
                lastName: e.target[1].value,
                password: e.target[2].value,
              }),
            }
          )
            .then((response) => response.json())
            .then((data) => {
              setUserDetails({
                userData: data.currentUser,
                loggedIn: data.loggedIn,
                userType: data.userType,
              });
              if(data.loggedIn === true){
                navigate("/patient");
              } else (
                alert('Log-In not recognized')
              )
            })
            .catch((error) => {
              console.error("Error:", error);
            });
        }}
      >
        <strong>Patient Log In</strong>
        <br />

        {/* <p className="error_msg">{formErrors.member}</p> */}
        <label htmlFor="firstName">First Name:</label>
        <input
          className="textbox"
          type="text"
          id="firstName"
          placeholder="First Name"
          autoComplete="off"
        ></input>
        <br />

        <label htmlFor="lastName">Last Name:</label>
        <input
          className="textbox"
          type="text"
          id="lastName"
          placeholder="Last Name"
          autoComplete="off"
        ></input>
        <br />

        {/* <p className="error_msg">{formErrors.username}</p> */}
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          className="textbox"
          id="password"
          placeholder="Password"
        ></input>

        {/* <p className="error_msg">{formErrors.password}</p> */}
        <br />
        <button className="btn" value="login">
          LogIn
        </button>
        Not a Member? Ask your Doctor about Doc-Pal!
      </form>
      <form
        className="login"
        onSubmit={(e) => {
          e.preventDefault();
          // console.log(e.target[0].selectedOptions[0].value);

          fetch(
            `http://localhost:3000/doctor/login`,
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                firstName: e.target[0].value,
                lastName: e.target[1].value,
                password: e.target[2].value,
              }),
            }
          )
            .then((response) => response.json())
            .then((data) => {
              setUserDetails({
                userData: data.currentUser,
                loggedIn: data.loggedIn,
                userType: data.userType,
              });
              if (data.loggedIn === true){
                navigate("/doctor");
              } else (
                alert('Log-In not recognized')
              )
            })
            .catch((error) => {
              console.error("Error:", error);
            });
        }}
      ><br /><br />
        <strong>Doctor Log In</strong>
        <br />

        {/* <p className="error_msg">{formErrors.member}</p> */}
        <label htmlFor="doc-firstName">First Name:</label>
        <input
          className="textbox"
          type="text"
          id="doc-firstName"
          placeholder="First Name"
          autoComplete="off"
        ></input>
        <br />

        <label htmlFor="doc-lastName">Last Name:</label>
        <input
          className="textbox"
          type="text"
          id="doc-lastName"
          placeholder="Last Name"
          autoComplete="off"
        ></input>
        <br />

        {/* <p className="error_msg">{formErrors.username}</p> */}
        <label htmlFor="doc-password">Password:</label>
        <input
          type="password"
          className="textbox"
          id="doc-password"
          placeholder="Password"
        ></input>

        {/* <p className="error_msg">{formErrors.password}</p> */}
        <br />
        <button className="btn" value="login">
          LogIn
        </button>
        <Link to="/signup">Not Regeistered with Doc-Pal? Sign Up Today!</Link>
      </form>
    </div>
  );
};

export default Login;
