import React, { Component, useState } from "react";
import { useNavigate } from "react-router-dom";
import ToHomePage from "./LogOutButton";
import ToNewPatientPage from "./NewPatientButton";
import NewVisit from "./NewVisit";
import PatientCard from "./PatientCard";

const DoctorHome = ({userDetails}) => {
  const [currentPatientIndex, setCurrentPatientIndex] = useState(0)
  const [visitCount, setVisitCount] = useState(0)
  const navigate = useNavigate()

  const handleNextClick = () => {
    if (currentPatientIndex < userDetails.userData.patients.length - 1) {
      setCurrentPatientIndex(currentPatientIndex+1)
      setVisitCount(0)
    }
  }
  const handleBackClick = () => {
    if (currentPatientIndex > 0) {
      setCurrentPatientIndex(currentPatientIndex-1)
      setVisitCount(0)
    }
  }

  const handleSearchClick = () => {
    const searchedPatient = document.getElementById("searchForPatient").value;
    const capitalizedSearchedPatien = searchedPatient[0].toUpperCase() + searchedPatient.slice(1)
    if (capitalizedSearchedPatien === "") return

    const patients = userDetails.userData.patients;

    for (let i = 0; i < patients.length; i++) {
      const fullName = patients[i].firstName + " " + patients[i].lastName;
      const firstName = patients[i].firstName;
      const lastName = patients[i].lastName;
      if (
        firstName === capitalizedSearchedPatien ||
        lastName === capitalizedSearchedPatien ||
        fullName == capitalizedSearchedPatien
      ) {
        setCurrentPatientIndex(i)
        setVisitCount(0)
        return;
      }
    }
  }

  const handleVisitClick = () => {
    setVisitCount(1)
  }

  const handleNewPatientClick = () => {
    navigate("/new-patient");
  }

  const createPatientCard = (currentPatient) => {
    if (!currentPatient) {
      return <h1>No Patients Yet</h1>;
    } else {
      return (
        <PatientCard
          firstName={currentPatient.firstName}
          lastName={currentPatient.lastName}
          dob={currentPatient.dateOfBirth}
          address={currentPatient.address}
          setVisitCount={setVisitCount}
        ></PatientCard>
      );
    }
  }

  const doctor = userDetails.userData;
  const patients = userDetails.userData.patients;
  let currentPatient = patients[currentPatientIndex];
  const patient = createPatientCard(currentPatient);

  const visits = [];
  for (let i = 0; i < visitCount; i++) {
    visits.push(
      <NewVisit key={i} doctor={doctor} patient={currentPatient} setVisitCount={setVisitCount}></NewVisit>
    );
  }

  return (
    <div className="container">
      <h1>
        Hello Doctor {doctor.firstName} {doctor.lastName}
      </h1>
      <input className="loginInput" id="searchForPatient" placeholder="Search" autoComplete="off"></input>
      <button className="btn" onClick={() => handleSearchClick()}>
        Search Patient
      </button>
      <div>
        {patient}
      </div>
      <button className="btn" onClick={() => handleBackClick()}>
        Back
      </button>
      <button className="btn" onClick={() => handleVisitClick()}>
        Add Visit
      </button>
      <button className="btn" onClick={() => handleNextClick()}>
        Next
      </button>
      {visits.length > 0 && (
      <div>
        {visits}
      </div>)}
      <br />
      <ToNewPatientPage />
      <ToHomePage />
    </div>
  );
}

export default DoctorHome;
