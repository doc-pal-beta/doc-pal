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
                    <p>Subjective: {this.props.visit_Data.subjective}</p>
                    <p>objective: {this.props.visit_Data.objective}</p>
                    <p>assessment: {this.props.visit_Data.assessment}</p>
                    <p>plan: {this.props.visit_Data.plan}</p>
                    <p>prescription: {this.props.visit_Data.prescription}</p>
                    <p>homeCare: {this.props.visit_Data.homeCare}</p>
                    <p>patientId: {this.props.visit_Data.patientId}</p>
                </div>
                
            </div>
        )
    }
}

export default DatailVisitCard;