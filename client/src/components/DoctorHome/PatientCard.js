import React, {Component} from 'react'




const PatientCard = ({ firstName, lastName, dob, address}) => {

  return (
    <div className='subContainer'>
      <p>First Name: {firstName}</p>
      <p>Last Name: {lastName}</p>
      <p>Date Of Birth: {dob}</p>
      <p>Address: {address}</p>
    </div>
  )
}

export default PatientCard;