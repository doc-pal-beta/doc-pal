import React, { Component } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';

const NewPatient = ({userDetails}) => {
  const navigate = useNavigate();

  const handleSubmitClick = () => {
    const primaryDoctor = userDetails.userData._id;
    const firstName = document.getElementById("newPatientFirstName").value;
    const lastName = document.getElementById("newPatientLastName").value;
    const dateOfBirth = document.getElementById("newPatientDOB").value;
    const language = document.getElementById("newPatientLanguage").value;
    const address = document.getElementById("newPatientAddress").value;
    const sex = document.getElementById("newPatientSex").value;


    fetch("http://localhost:3000/patients", {
      method: "POST",
      credentials:'include',
      body: JSON.stringify({
        primaryDoctor,
        firstName,
        lastName,
        dateOfBirth,
        language,
        address,
        sex
      }),
      headers: { "Content-type": "application/json; charset=UTF-8" },
    })
      .then((response) => response.json())
      .then((success) => {
        console.log(success)
        if (success.hasOwnProperty('userData')) {
          alert(
            `Successfully created your new patient account! An email has been sent to their inbox containing their new temporary password... ${success.tempPassword}`
          );
          navigate("/doctor");
        } else
          alert(
            "Something Went Wrong! Please make sure all fields are correct!"
          );
      })
      .then(response => response.text()) 
      .then(json => console.log(json))
      .catch(err => console.log('SignUp Failed', err))
  }

  return (
    <div className='container'>
      <h3>New Patient {}</h3>
      <div style={{marginBottom:'15px'}}className = 'subContainer'>
        <strong> First Name</strong>
          <input className='loginInput' type='text' id = 'newPatientFirstName' placeholder='First Name'  autoComplete="off"></input>
        <strong> Last Name</strong>
          <input className='loginInput' type='text' id = 'newPatientLastName' placeholder='Last Name'  autoComplete="off"></input>
        <strong> Date of Birth</strong>
          <input className='loginInput' type='text' id = 'newPatientDOB' placeholder='MM/DD/YYYY'  autoComplete="off"></input>
        <strong> Language</strong>
          <input className='loginInput' type='text' id = 'newPatientLanguage' placeholder='language'  autoComplete="off"></input>
        <strong> Address</strong>
          <input className='loginInput' type='text' id = 'newPatientAddress' placeholder='address'  autoComplete="off"></input>
        <strong> Sex</strong>
          <input className='loginInput' type='text' id = 'newPatientSex' placeholder='Sex'  autoComplete="off"></input>
        <br/>
        <button className = 'btn' onClick = {() => handleSubmitClick()}>Submit</button>
        <Link style={{textDecoration:'none', fontSize:'13px'}} className='btn' to="/doctor">Go Back</Link>
      </div>
      
    </div>
  )
}


  //     <strong> className="label">
  //       E-Mail:
  //       <input
  //         className="textbox"
  //         type="text"
  //         id="MockEmail"
  //         placeholder="E-Mail Address"
  //         autoComplete="off"
  //       ></input>
  //
  //     <br />
  //     <br />

  //     <strong> className="label">
  //       Gender:
  //       <input
  //         className="textbox"
  //         type="text"
  //         id="newPatientGender"
  //         placeholder="Gender"
  //         autoComplete="off"
  //       ></input>
  //
  //     <br />
  //     <br />

  //     <strong> className="label">
  //       Address:
  //       <input
  //         className="textbox"
  //         type="text"
  //         id="newPatientAddress"
  //         placeholder="address"
  //         autoComplete="off"
  //       ></input>
  //
  //     <br />
  //     <br />
  //     <button className="btn" onClick={() => handleSubmitClick()}>
  //       Submit
  //     </button>
  //   </div>
  // );
// };

export default NewPatient;
