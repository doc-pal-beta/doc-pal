import React, { Component } from "react";
import ToHomePage from "./LogOutButton";
import ToNewPatientPage from "./NewPatientButton";
import NewVisit from "./NewVisit";
import PatientCard from "./PatientCard";

class DoctorHome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPatientIndex: 0,
      visits: 0,
    };
  }
  handleNextClick() {
    if (
      this.state.currentPatientIndex <
      this.props.userDetails.userData.patients.length - 1
    ) {
      this.setState({
        currentPatientIndex: this.state.currentPatientIndex + 1,
        visits: 0,
      });
    }
  }
  handleBackClick() {
    if (this.state.currentPatientIndex > 0) {
      this.setState({
        currentPatientIndex: this.state.currentPatientIndex - 1,
        visits: 0,
      });
    }
  }
  handleSearchClick() {
    const searchedPatient = document.getElementById("searchForPatient").value;
    if (searchedPatient === "") {
      return;
    }
    const patients = this.props.userDetails.userData.patients;

    for (let i = 0; i < patients.length; i++) {
      const fullName = patients[i].firstName + " " + patients[i].lastName;
      const firstName = patients[i].firstName;
      const lastName = patients[i].lastName;
      if (
        firstName === searchedPatient ||
        lastName === searchedPatient ||
        fullName == searchedPatient
      ) {
        this.setState({
          currentPatientIndex: i,
          visits: 0,
        });
        return;
      }
    }
  }
  handleVisitClick() {
    this.setState({
      visits: 1,
    });
  }
  handleNewPatientClick() {
    Navigate("/new-patient");
  }
  createPatientCard(currentPatient) {
    if (!currentPatient) {
      return <h1>No Patients Yet</h1>;
    } else {
      return (
        <PatientCard
          firstName={currentPatient.firstName}
          lastName={currentPatient.lastName}
          dob={currentPatient.dateOfBirth}
        ></PatientCard>
      );
    }
  }
  render() {
    const doctor = this.props.userDetails.userData;
    const patients = this.props.userDetails.userData.patients;
    let currentPatient = patients[this.state.currentPatientIndex];
    const patient = this.createPatientCard(currentPatient);

    const visits = [];
    for (let i = 0; i < this.state.visits; i++) {
      visits.push(
        <NewVisit key={i} doctor={doctor} patient={currentPatient}></NewVisit>
      );
    }
    return (
      <div className="container">
        <h1>
          Hello Doctor {doctor.firstName} {doctor.lastName}
        </h1>

        <input id="searchForPatient" placeholder="Search"></input>
        <button className="btn" onClick={() => this.handleSearchClick()}>
          Search Patient
        </button>
        {patient}
        <button className="btn" onClick={() => this.handleBackClick()}>
          Back
        </button>
        <button className="btn" onClick={() => this.handleVisitClick()}>
          Add Visit
        </button>
        <button className="btn" onClick={() => this.handleNextClick()}>
          Next
        </button>
        {visits}
        <ToNewPatientPage />
        <ToHomePage />
      </div>
    );
  }
}

export default DoctorHome;
