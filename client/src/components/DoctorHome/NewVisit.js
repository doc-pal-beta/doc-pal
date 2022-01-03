import React, {Component} from 'react'

class NewVisit extends Component {
  handleSubmitClick () {
    const doctorId = this.props.doctor._id
    const patientId = this.props.patient._id
    const date = document.getElementById('newVisitDate').value
    const assessment = document.getElementById('newVisitAssesment').value
    const plan = document.getElementById('newVisitPlan').value
    const prescription = document.getElementById('newVisitPrescription').value
    const homeCare = document.getElementById('newVisitHomeCare').value
  
    fetch('http://localhost:3000/visits', {
      method: "POST",
      body: JSON.stringify({patientId,doctorId,date,assessment,plan,prescription,homeCare}),
      headers: {"Content-type": "application/json; charset=UTF-8"}
      })
      .then(response => response.text()) 
      .then(json => console.log(json))
      .catch(err => console.log('SignUp Failed', err))
  }
  render() {
    return (
      <div className='NewVisit'>
        <h1>New visit for patient {}</h1>
        <label className='label'> Date:
          <input className='textbox' type='text' id = 'newVisitDate' placeholder='MM/DD/YYYY'></input>
        </label>
        <br></br>
        <label className='label'> Assessment:
          <input className='textbox' type='text' id = 'newVisitAssesment' placeholder='Assesment'></input>
        </label>
        <br></br>
        <label className='label'> Plan:
          <input className='textbox' type='text' id = 'newVisitPlan' placeholder='Plan'></input>
        </label>
        <br></br>

        <label className='label'> Prescription:
          <input className='textbox' type='text' id = 'newVisitPrescription' placeholder='Prescription'></input>
        </label>
        <br></br>

        <label className='label'> Home Care:
          <input className='textbox' type='text' id = 'newVisitHomeCare' placeholder='Home Care'></input>
        </label>
        <br></br>
        <button onClick = {() => this.handleSubmitClick()}>Submit</button>
      </div>
    )
  }
}

export default NewVisit;