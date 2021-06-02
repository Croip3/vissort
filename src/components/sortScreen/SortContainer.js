import React, { useState, useEffect } from 'react';
import '../../css/sortView.css'
import Bar from './Bar.js'
import Data from './data'


class SortContainer extends React.Component {

    componentDidMount(){
        this.changeBarMargin()
        this.changeBarLength()
        //this.data =  new Data;
        this.data =  new Data();
    }

    changeBarMargin(){
        console.log("margin");
        var width = document.getElementsByClassName("bar")[0].clientWidth;

        var bars = document.getElementsByClassName("bar");
        Array.from(bars).forEach(element => {
            element.style.margin = "0px " + String(width/2) + "px"
        });
        //document.getElementsByClassName("bar")[0].style.backgroundColor = "blue";//.style.margin = "1em";
    }

    changeBarLength = () => {
        console.log("length");
    } 
    

    render(){
        
        const barList = this.data.values.map(value => { 
            return( 
                <Bar width={value}/>
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
