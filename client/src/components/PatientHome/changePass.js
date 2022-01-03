import React, {Component} from 'react'

class changePass extends Component {
    
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
              autoComplete="off"
            ></input>
            </div>
        )
    }
}

export default changePass;