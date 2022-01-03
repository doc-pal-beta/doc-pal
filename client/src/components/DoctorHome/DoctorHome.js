import React, {useState, useEffect} from 'react'

function DoctorHome() {
    fetch('/doctors')
    .then(response => response.json())
    .then(data => console.log(data));
    return (
        <div className='container'>
          <h1>Hello</h1>
        </div>
    )
}

export default DoctorHome;