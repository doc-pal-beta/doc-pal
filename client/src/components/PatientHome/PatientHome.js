import React, { useState, UseEffect } from "react";
import { useEffect } from "react/cjs/react.development";
import DatailVisitCard from "./DatailVisitCard";
import ToHomePage from "../DoctorHome/LogOutButton";
import ChangePass from "./changePass";
import { useNavigate } from "react-router-dom";

const PatientHome = ({ userDetails }) => {
  const navigate = useNavigate();
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
    
    const handleChangePass = () => navigate('/changePass');

  fetch('http://localhost:3000/changePass',{
    credentials: 'include'
  })
  .then(response => response.json())
  .then(data => console.log(data));

    const newData=[];
    for(let i=0; i< visit_Data.length; i++){
      newData.push(<DatailVisitCard visit_Data={visit_Data[i]} key={visit_Data.id} />)
    }
  
  return (
    <div>
      <button className="btn" onClick={handleChangePass}>Change Password</button>
      <ToHomePage />
        <h1>Welcome {userData.firstName}</h1>
        {newData}
    
    </div>
  );
};

//test
export default PatientHome;
