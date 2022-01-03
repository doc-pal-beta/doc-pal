import React, { useState, UseEffect } from "react";
import { useEffect } from "react/cjs/react.development";
import DatailVisitCard from "./DatailVisitCard";
const navigate = require("useNavigate");

const PatientHome = ({ userDetails }) => {
  const { userType, userData, loggedIn } = userDetails;
  const[visit_Data, setVisit_Data] = useState({})

  console.log("The patients data is", userData);

    useEffect(() => {
        // check session token to make sure user is logged in.
        fetch('http://localhost:3000/visits')
        .then(response => response.json())
        .then(data =>{ setVisit_Data(data)
        });
    }, [])

    const newData=[];
    for(let i=0; i< visit_Data.length; i++){
      newData.push(<DatailVisitCard visit_Data={visit_Data[i]} key={visit_Data.id} />)
    }
  
  return (
    <div>
      <button className="btn" onClick={event =>  window.location.href='/changePass'}>Change Password</button>
      
        <h1>Welcome {userData.firstName}</h1>
        {newData}
    
    </div>
    )
};

//test
export default PatientHome;
