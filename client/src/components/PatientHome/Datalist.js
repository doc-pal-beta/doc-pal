import React, { Component } from 'react'

class Datalist extends Component {
    constructor(props){
        super(props);
    }
    render() {
        console.log('what is this data',this.props.list)
        const list= this.props.list;
        return (
            <div>
                {list}
            </div>
        )
    }
}

export default Datalist;