import React, {Component} from 'react'

// const patientSchema = new Schema({
//   firstName: { type: String, required: true },
//   lastName: { type: String, required: true },
//   //temporaryPassword: { type: String },
//   password: { type: String },
//   dateOfBirth: { type: String, required: true }, // MM/DD/YYYY
//   sex: String,
//   language: String,
//   address: String,
//   primaryDoctor: {
//     type: Schema.Types.ObjectId,
//     ref: "doctor",
//   },
//   visits: [
//     {
//       type: Schema.Types.ObjectId,
//       ref: "visit",
//     },
//   ],
// });


class NewPatient extends Component {
  handleSubmitClick () {
    console.log(this.props.userDetails.userData._id)
    const primaryDoctor = this.props.userDetails.userData._id
    const firstName = document.getElementById('newPatientFirstName').value
    const lastName = document.getElementById('newPatientLastName').value
    const dateOfBirth = document.getElementById('newPatientDOB').value
    const language = document.getElementById('newPatientLanguage').value
    const address = document.getElementById('newPatientAddress').value
  
    fetch('http://localhost:3000/patients', {
      method: "POST",
      body: JSON.stringify({primaryDoctor,firstName,lastName,dateOfBirth,language,address}),
      headers: {"Content-type": "application/json; charset=UTF-8"}
      })
      .then(response => response.text()) 
      .then(json => console.log(json))
      .catch(err => console.log('SignUp Failed', err))
  }
  render() {
    return (
      <div className='NewVisit'>
        <h1>New Patient {}</h1>
        <label className='label'> First Name:
          <input className='textbox' type='text' id = 'newPatientFirstName' placeholder='First Name'></input>
        </label>
        <br></br>
        <label className='label'> Last Name:
          <input className='textbox' type='text' id = 'newPatientLastName' placeholder='Last Name'></input>
        </label>
        <br></br>
        <label className='label'> Date of Birth:
          <input className='textbox' type='text' id = 'newPatientDOB' placeholder='MM/DD/YYYY'></input>
        </label>
        <br></br>

        <label className='label'> Language:
          <input className='textbox' type='text' id = 'newPatientLanguage' placeholder='language'></input>
        </label>
        <br></br>

        <label className='label'> Address:
          <input className='textbox' type='text' id = 'newPatientAddress' placeholder='address'></input>
        </label>
        <br></br>
        <button onClick = {() => this.handleSubmitClick()}>Submit</button>
      </div>
    )
  }
}

export default NewPatient;