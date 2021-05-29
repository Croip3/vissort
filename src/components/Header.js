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
                <NormalButtons text="new Array"/>
                <NormalSlider title="array Size"/>
                <NormalSlider title="sort speed"/>
                <NormalMenu />
            </div>

            
            {/*new array*/}
            {/* size array*/}
            {/* speed*/}
            {/*algorithms*/}            
        </header>
    )
}

export default header
