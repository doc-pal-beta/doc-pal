
import React, {useState} from "react";
import { hot } from 'react-hot-loader/root';
import Login from "./components/Login";
import SignUp from "./components/SignUp";

class App extends React.Component {
  render() {
    const adminUser = {
      email:"admin@admin.com",
      password : "admin123"
    }

    const login = details =>{
      console.log(details);
    }

    const Logout = () =>{
      console.log("LogOut")
    }
    return (
      <>
        <h1 className="App">
          {/* <Login login={login}/> */}
          <SignUp login={login}/>
        </h1>
      </>
    );
  }
}

export default hot(App);
