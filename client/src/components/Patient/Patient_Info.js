import React, { Component } from 'react'
import Datalist from './Datalist';

class Patient_Info extends Component {
    constructor(){
        super();
        this.state={patient_data:[]};
    }

    //fetch Data
    componentDidMount(){
        fetch('http://localhost:3000/patients')
        .then(res => res.json())
        .then(data => this.setState({patient_data: data}))
    }

    render() {
        console.log('The data are', this.state.patient_data);
        const datalist = [];
        for(let i=0; i<this.state.patient_data.length; i++){
            datalist.push(<Datalist list={this.state.patient_data[i]} key={this.state.patient_data[i]._id}/>)
        }
        return (
            <div>
                {datalist}
            </div>
        )
    }
}

export default Patient_Info;