import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useNavigate,
} from "react-router-dom";
import React from 'react';

const ToNewPatientPage = () => {
  const navigate = useNavigate();
  const handleClick = () => navigate('/new-patient');
  
  return (
    <button type="button" onClick={handleClick}>
      New Patient
    </button>
  );
};

export default ToNewPatientPage;