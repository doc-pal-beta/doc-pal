import React, { useState, UseEffect } from 'react'
import { useEffect } from 'react/cjs/react.development';
import Datalist from './Datalist';

const PatientInfo = (props) => {
    const [patientData, setPatientData] = useState([])

    //fetch Data
    useEffect(() => {
        fetch('http://localhost:3000/patients')
        .then(res => res.json())
        .then((data) => {
            setPatientData(data)
        })
    }, [])

    console.log('The data is', patientData);
    const datalist = [];
    for(let i=0; i<patientData.length; i++){
        datalist.push(<Datalist list={patientData[i]} key={patientData[i]._id}/>)
    }
    return (
        <div>
            {datalist}
        </div>
    )
}

export default PatientInfo;