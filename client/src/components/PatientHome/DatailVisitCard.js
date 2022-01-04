import React, { Component } from 'react'

class DatailVisitCard extends Component {
    constructor(props) {
        super(props);
    
    }
    render() {   
        
        return (
            <div className='visitCard'> 
                <p>Date: {this.props.visit_Data.date}</p>
                <p>Plan: {this.props.visit_Data.plan}</p>
                <p>Assessment: {this.props.visit_Data.assessment}</p>                    
                <p>Objective: {this.props.visit_Data.objective}</p>                    
                <p>Prescription: {this.props.visit_Data.prescription}</p>
                <p>HomeCare: {this.props.visit_Data.homeCare}</p>                   
                <br />
            </div>
        )
    }
}

export default DatailVisitCard;