import React, {Component} from 'react'
import NewVisit from './NewVisit';
import PatientCard from './PatientCard';
import {useNavigate} from 'react-router-dom'


class DoctorHome extends Component {
  constructor(props){
    super(props);
    this.state={
      currentPatientIndex: 0,
      visits: 0
    };
  }
  handleNextClick() {
    if(this.state.currentPatientIndex < this.props.userDetails.userData.patients.length - 1){
      this.setState({currentPatientIndex: this.state.currentPatientIndex + 1})
    }
  }
  handleBackClick() {
    if(this.state.currentPatientIndex > 0){
      this.setState({currentPatientIndex: this.state.currentPatientIndex - 1})
    }
  }
  handleSearchClick() {
    const searchedPatient = document.getElementById('searchForPatient').value
    if(searchedPatient === '') {return}
    const patients = this.props.userDetails.userData.patients

    for(let i = 0; i < patients.length; i++){
      const fullName = patients[i].firstName + ' ' + patients[i].lastName
      const firstName = patients[i].firstName
      const lastName = patients[i].lastName
      if(firstName === searchedPatient || lastName === searchedPatient || fullName == searchedPatient){
        this.setState({
          currentPatientIndex: i
        })
        return
      }
    }
  }
  handleVisitClick () {
    this.setState({
      visits: 1
    })
  }
  createPatientCard(currentPatient) {
    if(!currentPatient){return <h1>No Patients Yet</h1>}
    else{return <PatientCard 
        firstName = {currentPatient.firstName} 
        lastName = {currentPatient.lastName} 
        dob = {currentPatient.dateOfBirth}
      >
      </PatientCard>
    }
  }
  render() {
    const doctor = this.props.userDetails.userData
    const patients = this.props.userDetails.userData.patients
    let currentPatient = patients[this.state.currentPatientIndex]
    const patient = this.createPatientCard(currentPatient)
    console.log(this.props)

    const visits = [];
    for(let i = 0; i < this.state.visits; i++){
      visits.push(<NewVisit key = {i} doctor = {doctor} patient = {currentPatient}></NewVisit>)
    }
    return (
      <div className='DoctorHome'>
        <button onClick={(e) => {
          fetch("http://localhost:3000/logout", { credentials: "include" })
          .then((json) => json.json())
          .then((response) => {
            console.log("Redirecting to login");
            const navigate = useNavigate()
            navigate(`/${response.userType}`) //************************** */
            this.props.setUserDetails(response); //********************* */
          });
        }}>Log Out</button>
        <h1>Hello Doctor {doctor.firstName} {doctor.lastName}</h1>
        <input id = 'searchForPatient' ></input>
        <button onClick = {() => this.handleSearchClick()}>Search Patient</button>
        {patient}
        <button onClick = {() => this.handleBackClick()}>Back</button>
        <button onClick = {() => this.handleVisitClick()}>Add Visit</button>
        <button onClick = {() => this.handleNextClick()}>Next</button>
        {visits}
      </div>
    )
  }
}

export default DoctorHome;