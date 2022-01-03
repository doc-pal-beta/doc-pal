import React, {Component} from 'react'




class PatientCard extends Component {
  // constructor(){
  //   super();
  //   this.state={
  //   };
  // }
  render() {
    return (
      <div className='PatientCard'>
        <div>
          <p>First Name: {this.props.firstName}</p>
          <p>Last Name: {this.props.lastName}</p>
          <p>Date Of Birth: {this.props.dob}</p>
          <p>Last Visit: {this.props.lastVisit}</p>
        </div>
      </div>
    )
  }
}

export default PatientCard;