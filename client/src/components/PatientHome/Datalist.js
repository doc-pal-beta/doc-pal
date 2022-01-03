import React, { Component } from 'react'

class Datalist extends Component {
    constructor(props){
        super(props);
    }
    render() {
        const list= this.props.list;
        return (
            <div>
                {list}
            </div>
        )
    }
}

export default Datalist;