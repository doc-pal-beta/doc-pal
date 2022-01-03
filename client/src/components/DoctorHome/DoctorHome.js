import React, {Component} from 'react'
import PatientCard from './PatientCard';
import {useNavigate} from 'react-router-dom'


class DoctorHome extends Component {
  constructor(props){
    super(props);
    this.state={
      doctor:{},
      patients: [{}],
      currentPatientIndex: 0
    };
  }
  handleNextClick() {
    if(this.state.currentPatientIndex < this.state.patients.length - 1){
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
    const patients = this.state.patients

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
  
  componentDidMount(){
    fetch('http://localhost:3000/doctors')
    .then(response => response.json())
    .then(data =>{
      this.setState({
        doctor: data[0],
        patients: data[0].patients
      })
    });
  }
  createPatientCard(currentPatient) {
    if(currentPatient == {}){return <h1>No Patients Yet</h1>}
    else{return <PatientCard 
        firstName = {currentPatient.firstName} 
        lastName = {currentPatient.lastName} 
        dob = {currentPatient.dateOfBirth}
      >

      </PatientCard>}
  }
  render() {
    let currentPatient = this.state.patients[this.state.currentPatientIndex]
    const patient = this.createPatientCard(currentPatient)
    console.log(this.props)

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
        <h1>Hello Doctor {this.state.doctor.firstName}</h1>
        <input id = 'searchForPatient' ></input>
        <button onClick = {() => this.handleSearchClick()}>Search Patient</button>
        {patient}
        <button onClick = {() => this.handleBackClick()}>Back</button>
        <button onClick = {() => this.handleNextClick()}>Next</button>
      </div>
    )
  }
}

export default DoctorHome;