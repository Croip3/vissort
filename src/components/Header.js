import React from 'react'


import '../css/header.css'
import logo from '../Logo.png'
import NormalButtons from './Buttons'
import NormalSlider from './Slider'
import NormalMenu from './MenuButton'

const header = () => {

    return (
        <header>
            <div id="logo">
                <img src={logo} alt="" />
                <h1>VisSort</h1>
            </div>

            <div id="toolbar">
                <NormalButtons text="New Array"/>
                <NormalSlider title="Array Size"/>
                <NormalSlider title="Sort Speed"/>
                <NormalMenu />
                 <NormalButtons text="Sort"/>
            </div>

            
            {/*new array*/}
            {/* size array*/}
            {/* speed*/}
            {/*algorithms*/}            
        </header>
    )
}

export default header
