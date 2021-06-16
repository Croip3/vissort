import React, { useState, useEffect } from 'react';
import '../../css/sortView.css'
import Bar from './Bar.js'
import Data from './data'


class SortContainer extends React.Component {

    barId = 0;

    constructor(){
        super();
        this.data =  new Data();
    }

    componentDidMount(){
        this.changeBarMargin()
    }

    changeBarMargin(){
        var width = document.getElementsByClassName("bar")[0].clientWidth;

        var bars = document.getElementsByClassName("bar");
        Array.from(bars).forEach(element => {
            element.style.margin = "0px " + String(width/2) + "px"
        });
        //document.getElementsByClassName("bar")[0].style.backgroundColor = "blue";//.style.margin = "1em";
    }    

    render(){
        
        //display data array from data.js
        const barList = this.data.values.map(value => {
            this.barId += 1;
            return( 
                <Bar key={this.barId} height={value}/>
            )
            })


        return (
            <div id="sortContainer">
                <div id="sortView">
                    {barList}
                </div>
            </div>
        )
    }
}




export default SortContainer
