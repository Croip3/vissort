import React from 'react'
import changeBarMargin from './visualizer'

class Bar extends React.Component {
    componentDidMount(){
        console.log("hi")
        changeBarMargin();
    }

    render(){
        return (
            <div className="bar"/>
        )
    }
}

export default Bar
