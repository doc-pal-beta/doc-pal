import React, { useState } from "react";
import { hot } from "react-hot-loader/root";
import DoctorHome from "./components/DoctorHome/DoctorHome";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import PatientHome from "./components/Patient/Patient_Info";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login/>} exact/>
        <Route path="/SignUp" element={<SignUp/>} />
        <Route path="/patient" element={<PatientHome/>} />
        <Route path="/doctor" element={<DoctorHome/>} />
      </Routes>
    </Router>

  );
};

export default App;

    // <h1 className="App">
    //   {/* <Login/> */}
    //   {/* <SignUp/> */}
    //   {/* <Patient_Info /> */}
    // </h1>