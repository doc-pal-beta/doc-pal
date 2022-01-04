import React, {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom';

const SignUp = ({setUserDetails}) => {
    const navigate = useNavigate()
    
    return (
        <div className='container'>
            <h2>Welcome To Doc-Pal</h2>
            <form className='login' onSubmit={(e)=> {
                e.preventDefault();
                if (e.target[4].value === e.target[5].value){
                    fetch(`http://localhost:3000/doctors`, {
                      method: "POST",
                      headers: {
                        "Content-Type": "application/json",
                      },
                      credentials: "include",
                      body: JSON.stringify({
                        firstName: e.target[0].value,
                        lastName: e.target[1].value,
                        title: e.target[2].value,
                        licenseNumber: e.target[3].value,
                        password: e.target[4].value,
                      }),
                    })
                    .then(response => response.json())
                    .then((user) => {
                      if (user.userData) {
                        alert("Account Created Successfully")
                        setUserDetails(user)
                        navigate("/doctor")
                      }
                    })
                  } else { alert("The inputted passwords do not match.")}
            }}>
                <strong>Create a Doctor Account</strong>
                <br/>

                <label>First Name</label>
                <input className='loginInput' type='text' name='firstName' placeholder='First Name' autoComplete='off'></input>

                <label>Last Name</label>
                <input className='loginInput' type='text' name='lastName' placeholder='Last Name' autoComplete='off'></input>

                <label className='label'> Profession</label>
                <input className='loginInput' type='text' name='profession' placeholder='Profession' autoComplete='off'></input>

                <label className='label'> License Number</label>
                <input className='loginInput' type='text' name='license' placeholder='Enter State License #' autoComplete='off'></input>

                <label className='label'> Password</label>
                <input className='loginInput' type='password' name='password' placeholder='Enter Password' autoComplete='off'></input>

                <label className='label'> Password</label>
                <input className='loginInput' type='password' name='password2' placeholder='Confirm Password' autoComplete='off'></input>
                <br />
                <div className='button'>
                    <button className='btn' value='SignUp'>Sign Up</button>
                </div>
            </form>
        </div>
    )
}

export default SignUp;