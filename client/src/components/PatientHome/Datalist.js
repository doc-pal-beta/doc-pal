import React, { Component } from 'react'

class Datalist extends Component {
    constructor(props){
        super(props);
    }
    render() {
        console.log('Patient Profile Data',this.props.patientData)
        const list= this.props.patientData;
        return (
            <div className='data_list'>
                <p>First Name: {list.firstName}</p>
                <p>Last Name: {list.lastName}</p>
                <p>Date Of Birth: {list.dateOfBirth}</p>
                <p>Address: {list.address}</p>
                <p>Language: {list.language}</p>
                <p>PrimaryDoctor: {list.primaryDoctor.firstName+' '+list.primaryDoctor.lastName}</p>
                <p>Male/Female: {list.sex} </p>
                <br/>
            </div>
        )
    }
}

export default Datalist;
