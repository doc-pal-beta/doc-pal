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
          <label htmlFor="confirmNewPass">New Password</label>
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
}

export default ChangePass;
