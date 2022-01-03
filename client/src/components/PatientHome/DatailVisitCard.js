import React, { Component } from 'react'

class DatailVisitCard extends Component {
    constructor(props) {
        super(props);
    
    }
    render() {   
        console.log('Visit Data are:', this.props.visit_Data)
        
        return (
            <div className='visitCard'> 
                <div>
                    <p>Date: {this.props.visit_Data.date}</p>
                    <p>Assessment: {this.props.visit_Data.assessment}</p>
                    <p>Plan: {this.props.visit_Data.plan}</p>
                    <p>Objective: {this.props.visit_Data.objective}</p>                    
                    <p>Prescription: {this.props.visit_Data.prescription}</p>
                    <p>HomeCare: {this.props.visit_Data.homeCare}</p>
                    <br></br>
                </div>
                
            </div>
        )
    }
}

export default DatailVisitCard;