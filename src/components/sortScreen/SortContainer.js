import React, { useState, useEffect } from 'react';
import '../../css/sortView.css'
import Bar from './Bar.js'
import changeBarMargin from './visualizer.js'

function SortContainer() {
useEffect(() => {
    changeBarMargin();
  });

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

export default SortContainer
