
import React, {useState} from "react";
import { hot } from 'react-hot-loader/root';
import DoctorHome from "./components/DoctorHome/DoctorHome";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Patient_Info from "./components/Patient/Patient_Info";

class App extends React.Component {
  render() {
    
    return (
      <>
        <h1 className="App">
          {/* <Login/> */}
          {/* <SignUp/> */}
          {/* <Patient_Info /> */}
          <DoctorHome></DoctorHome>
        </h1>
      </>
    );
  }
};

export default App;
