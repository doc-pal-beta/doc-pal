<<<<<<< HEAD
import React, {Component} from 'react';

const ChangePass = () => {

 handleClick = () => {
    fetch('http://localhost:3000/patients/changePass',{
    credentials: 'include'
    })
    .then(response => response.json())
    .then(response => {
      if(response.status == 200){
          window.location.href = '/patients/changePass'
      }
      else{
          alert(response.message)
      }
    })
 }
  
  handleSubmit = () => {
    alert("Password has been successfully changed.");
  }

        return (
            <div>
                <h1>Change Password</h1>
                <br />
            <form onSubmit={handleSubmit}>
            <label for="tempPass">Temporary Password</label>
            <input
              className="textbox"
              type="text"
              id="tempPass"
              placeholder="Temporary Password"
              autoCompletne="off"
            ></input>
            <br />
            <label for="newPass">New Password</label>
            <input
              className="textbox"
              type="text"
              id="newPass"
              placeholder="New Password"
              autoCompletne="off"
            ></input>
            <button className="btn" type="submit" onClick={handleClick}>Submit</button>
            </form>
            
            </div>
        )
=======
import React, { Component } from "react";

class ChangePass extends Component {

  render() {
    return (
      <div>
        <h1>Change Password</h1>
        <br />
        <form onSubmit={(e) => {
          // form submit and fetch go here
        }}>
          <label htmlFor="tempPass">Current Password</label>
          <input
            className="textbox"
            type="password"
            id="tempPass"
            placeholder="Current Password"
            autoComplete="off"
          ></input><br />
          
          <label htmlFor="newPass">New Password</label>
          <input
            className="textbox"
            type="password"
            id="newPass"
            placeholder="New Password"
            autoComplete="off"
          ></input><br />
          <label htmlFor="confirmNewPass">Confirm New Password</label>
          <input
            className="textbox"
            type="password"
            id="confirmNewPass"
            placeholder="New Password"
            autoComplete="off"
          ></input><br />
          <button className="btn">Submit</button>
        </form>
      </div>
    );
  }
>>>>>>> dev
}

export default ChangePass;
