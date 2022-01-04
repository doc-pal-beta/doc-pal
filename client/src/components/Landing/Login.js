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

  useEffect(() => {
    fetch("http://localhost:3000/authenticate", { credentials: "include" })
      .then((json) => json.json())
      .then((response) => {
        setUserDetails(response);
        if (response.loggedIn && response.userType) {
          console.log("Redirecting to home");
          navigate(`/${response.userType}`);
        }
      });
  }, []);

  return (
    <div className="container">
      <h2>Welcome to Doc-Pal</h2>
      <form
        className="login"
        onSubmit={(e) => {
          e.preventDefault();

          fetch(`http://localhost:3000/patient/login`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            credentials: "include",
            body: JSON.stringify({
              firstName: e.target[0].value,
              lastName: e.target[1].value,
              password: e.target[2].value,
            }),
          })
            .then((response) => response.json())
            .then((data) => {
              setUserDetails({
                userData: data.userData,
                loggedIn: data.loggedIn,
                userType: data.userType,
              });
              if (data.loggedIn === true) {
                navigate("/patient");
              } else alert("Log-In not recognized");
            })
            .catch((error) => {
              console.error("Error:", error);
            });
        }}
      >
        <h3>Patient Log In</h3>
        <br />
        {/* <p className="error_msg">{formErrors.member}</p> */}
        <label htmlFor="firstName">First Name</label>
        <span>
          <input
            className="loginInput"
            type="text"
            id="firstName"
            placeholder="First Name"
            autoComplete="off"
          ></input>
        </span>
        <label htmlFor="lastName">Last Name</label>
        <span>
          <input
            className="loginInput"
            type="text"
            id="lastName"
            placeholder="Last Name"
            autoComplete="off"
          ></input>
        </span>
        {/* <p className="error_msg">{formErrors.username}</p> */}
        <label htmlFor="password">Password</label>
        <span>
          <input
            type="password"
            className="loginInput"
            id="password"
            placeholder="Password"
          ></input>
        </span>
        {/* <p className="error_msg">{formErrors.password}</p> */}
        <br />
        <button className="btn" value="login">
          Log In
        </button>
        <p className = 'notMember'>Not a Member? Ask your Doctor about Doc-Pal!</p>
      </form>
      <form
        className="login"
        onSubmit={(e) => {
          e.preventDefault();
          fetch(`http://localhost:3000/doctor/login`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            credentials: "include",
            body: JSON.stringify({
              firstName: e.target[0].value,
              lastName: e.target[1].value,
              password: e.target[2].value,
            }),
          })
            .then((response) => response.json())
            .then((data) => {
              setUserDetails({
                userData: data.userData,
                loggedIn: data.loggedIn,
                userType: data.userType,
              });
              if (data.loggedIn === true) {
                navigate("/doctor");
              } else alert("Log-In not recognized");
            })
            .catch((error) => {
              console.error("Error:", error);
            });
        }}
      >
        <br />
        <br />
        <h3>Doctor Log In</h3>
        <br />

        {/* <p className="error_msg">{formErrors.member}</p> */}
        <label htmlFor="doc-firstName">First Name</label>
        <input
          className="loginInput"
          type="text"
          id="doc-firstName"
          placeholder="First Name"
          autoComplete="off"
        ></input>
        <label htmlFor="doc-lastName">Last Name</label>
        <input
          className="loginInput"
          type="text"
          id="doc-lastName"
          placeholder="Last Name"
          autoComplete="off"
        ></input>
        {/* <p className="error_msg">{formErrors.username}</p> */}
        <label htmlFor="doc-password">Password</label>
        <input
          type="password"
          className="loginInput"
          id="doc-password"
          placeholder="Password"
          autoComplete="off"
        ></input>
        <br />

        {/* <p className="error_msg">{formErrors.password}</p> */}
        <button className="btn" value="login">
          Log In
        </button>
        <Link to="/signup">Not Regeistered with Doc-Pal? Sign Up Today!</Link>
      </form>
    </div>
  );
};

export default Login;
