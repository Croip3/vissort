import React, { useState, useEffect } from 'react';
import '../../css/sortView.css'
import Bar from './Bar.js'
import changeBarMargin from './visualizer'


class SortContainer extends React.Component {
    

render(){
    return (
        <div id="sortContainer">
            <div id="sortView">
                <Bar />
                <Bar />
                <Bar />
            </div>
        </div>
    )
}
}




export default SortContainer
