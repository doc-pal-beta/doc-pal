import React, { useState, useEffect } from "react";
import SignUp from "./SignUp";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useNavigate,
} from "react-router-dom";

const Login = () => {
  //data from server
  const navigate = useNavigate();
  const initialValues = { member: "", username: "", password: "" };
  const [details, setDetails] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDetails({ ...details, [name]: value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setFormErrors(validate(details));
    setSubmit(true);
  };

  const id = "61d1f5ffaf426ddc1a0f4f91";

  useEffect((id) => {
    if ((Object.keys(formErrors).length === 0) & isSubmit) {
      console.log(details);
      //fetch data from patient side
      if (details.member === "patient") {
        fetch(`http://localhost:3000/patient/:${id}`)
          .then((res) => res.json())
          .then((data) => setDetails({ data }))
          .catch((err) => console.log("Request Failed", err));
      }
      //fetch data from doctor side
      if (details.member === "doctor") {
        fetch(`http://localhost:3000/doctor/${id}`)
          .then((res) => res.json())
          .then((data) => setDetails({ data }))
          .catch((err) => console.log("Request Failed", err));
      }
      //need to match data with fetched data, if ok, then render to another page
    }
  });

  const validate = (values) => {
    const errors = {};
    if (!values.member) {
      errors.member = "Please choose either patient or doctor";
    }
    if (!values.username) {
      errors.username = "Username is required";
    }
    if (!values.password) {
      errors.password = "Password is required";
    }
    return errors;
  };

  return (
    <div className="container">
      <h2>Welcome to Doc-Pal</h2>
      <form
        className="login"
        onSubmit={(e) => {
          e.preventDefault();
          console.log(e.target[0].selectedOptions[0].value);

          fetch(
            `http://localhost:3000/${e.target[0].selectedOptions[0].value}/login`,
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                firstName: e.target[1].value,
                lastName: e.target[2].value,
                password: e.target[3].value,
              }),
            }
          )
            .then((response) => response.json())
            .then((data) => {
              console.log(data);
              navigate("/patient");
            })
            .catch((error) => {
              console.error("Error:", error);
            });
        }}
      >
        <label>Log In As:</label>
        <select
          className="drop_down_btn"
          name="userType"
          defaultValue="default"
        >
          <option value="default" disabled>
            Choose Member
          </option>
          <option value="patient">Patient</option>
          <option value="doctor">Doctor</option>
        </select>
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
        <br />
        <Link to="SignUp">Sign Up</Link>
      </form>
    </div>
  );
};

export default Login;
