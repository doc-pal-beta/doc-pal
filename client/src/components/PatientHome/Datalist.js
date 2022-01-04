import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class Datalist extends Component {
    constructor(props){
        super(props);
    }

    render() {
        const list= this.props.userDetails;
        console.log('Passed in Data are', list.primaryDoctor)
        const docList = list.primaryDoctor;
        console.log('Passed in Data are', list)
        return (
            <div className='data_list'>
                <h1>Profile Page</h1>
                <p>First Name: {list.firstName}</p>
                <p>Last Name: {list.lastName}</p>
                <p>Date Of Birth: {list.dateOfBirth}</p>
                <p>Address: {list.address}</p>
                <p>Language: {list.language}</p>
                <p>Male/Female: {list.sex} </p>
                <p>Primary Doctor:{list.primaryDoctor.firstName+" "+ list.primaryDoctor.lastName}</p>
                <br/>
                <Link to="/patient">Go Back</Link>
            </div>
        )
    }
}
export default Datalist;
