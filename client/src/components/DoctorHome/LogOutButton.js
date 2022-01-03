import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useNavigate,
} from "react-router-dom";
import React from 'react';

const ToHomePage = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    fetch('http://localhost:3000/logout',{
    credentials: 'include'
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .then(setTimeout(()=>{navigate('/')}, 1000));
  }
  return (
    <button className= "btn" type="button" onClick={handleClick}>
      Log Out 
    </button>
  );
};

export default ToHomePage;