import React, {Component} from 'react'

class ChangePass extends Component {
    
    render(){
        return (
            <div>
                <h1>Change Password</h1>
                <br />
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
            <button className="btn" >Submit</button>
            </div>
        )
    }
}

//test
export default ChangePass;