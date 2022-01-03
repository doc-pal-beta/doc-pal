import React, {useState, useEffect} from 'react'

const DoctorHome = () => {
  fetch('http://localhost:3000/doctors')
    .then(response => response.json())
    .then(data => console.log(data));


  return (
      <div className='container'>
        <h1>Hello</h1>
      </div>
  )
}

export default DoctorHome;