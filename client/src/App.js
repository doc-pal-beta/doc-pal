import React, { useState, useEffect } from "react";
import { hot } from "react-hot-loader/root";
import DoctorHome from "./components/DoctorHome/DoctorHome";
import NewPatient from "./components/DoctorHome/NewPatient";
import Login from "./components/Landing/Login";
import SignUp from "./components/Landing/SignUp";
import ChangePass from "./components/PatientHome/changePass";
import PatientHome from "./components/PatientHome/PatientHome";
import Datalist from "./components/PatientHome/Datalist";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useNavigate,
} from "react-router-dom";

const App = () => {
  const [userDetails, setUserDetails] = useState({
    userType: false,
    loggedIn: false,
    userData: false,
  });

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login props={{ setUserDetails }} />} exact />
        <Route
          path="/signup"
          element={<SignUp setUserDetails={setUserDetails} />}
        />
        <Route
          path="/patient"
          element={
            <PatientHome
              userDetails={userDetails}
              setUserDetails={setUserDetails}
            />
          }
        />
        <Route
          path="/doctor"
          element={<DoctorHome userDetails={userDetails} />}
        />
        <Route
          path="/new-patient"
          element={<NewPatient userDetails={userDetails} />}
        />
        <Route
          path="/changePass"
          element={<ChangePass userDetails={userDetails} />}
        />
        <Route
          path="/profile"
          element={<Datalist userDetails={userDetails.userData} />}
        />
      </Routes>
    </Router>
  );
};

export default App;
