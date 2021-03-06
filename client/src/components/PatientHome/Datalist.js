import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class Datalist extends Component {
    constructor(props){
        super(props);
    }

    render() {
        const list= this.props.userDetails;
        const docList = list.primaryDoctor;
        
        return (
            <div className='container'>
                <h1>Profile Page</h1>
                <div className='subContainer'>
                <p>First Name: {list.firstName}</p>
                <p>Last Name: {list.lastName}</p>
                <p>Date Of Birth: {list.dateOfBirth}</p>
                <p>Address: {list.address}</p>
                <p>Language: {list.language}</p>
                <p>Male/Female: {list.sex} </p>
                <p>Primary Doctor:{list.primaryDoctor.firstName+" "+ list.primaryDoctor.lastName}</p>
                <br/>
                </div>
                <br/>
                <Link
          style={{ textDecoration: "none", fontSize: "13px" }}
          className="btn"
          to="/patient"
        >
          Go Back
        </Link><br/><br/>
            </div>
        )
    }
}
export default Datalist;
