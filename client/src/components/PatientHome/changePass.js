import React, {Component} from 'react'

class ChangePass extends Component {
    
    render(){
        return (
            <div>
                <h1>Change Password</h1>
                <br />
            <label htmlFor="tempPass">Current Password</label>
            <input
              className="textbox"
              type="password"
              id="tempPass"
              placeholder="Temporary Password"
              autoComplete="off"
            ></input>
            <br />
            <label htmlFor="newPass">New Password</label>
            <input
              className="textbox"
              type="password"
              id="newPass"
              placeholder="New Password"
              autoComplete="off"
            ></input>
            <button className="btn" >Submit</button>
            </div>
        )
    }
}

//test
export default ChangePass;