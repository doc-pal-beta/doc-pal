import React, { useState } from "react";
import { hot } from "react-hot-loader/root";
import DoctorHome from "./components/DoctorHome/DoctorHome";
import Login from "./components/Landing/Login";
import SignUp from "./components/Landing/SignUp";
import PatientHome from "./components/PatientHome/PatientHome";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const App = () => {

  const [userDetails, setUserDetails] = useState({userType: false, loggedIn: false, userData:false})
  console.log('The global state is', userDetails)

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login props={{setUserDetails, }}/>} exact/>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/patient" element={<PatientHome userDetails={userDetails}/>} />
        <Route path="/doctor" element={<DoctorHome userDetails={userDetails}/>} />
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