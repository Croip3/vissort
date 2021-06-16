import React from 'react'

class Bar extends React.Component {
    data;

    

    render(){
        return (
            <div className="bar" style={{height: this.props.height * 10}}/>
        )
    }
}

export default Bar
