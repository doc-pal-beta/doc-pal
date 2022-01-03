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
}

//test
export default ChangePass;