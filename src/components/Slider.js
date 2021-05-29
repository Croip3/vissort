import { Slider } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

import React from 'react'

function NormalSlider({title}) {
    return (
        <div className="slider">
            <CustomTypography gutterBottom>{title}</CustomTypography>
            <CustomSlider defaultValue={20} aria-labelledby="continuous-slider" />
         </div>
    )
}

export default NormalSlider




const CustomSlider = withStyles({
  root: {
    color: '#52af77',
    height: 8,
    width:'10em',
    margin: '0.5rem 1rem'
  },
  thumb: {
    height: 24,
    width: 24,
    backgroundColor: '#fff',
    border: '2px solid currentColor',
    marginTop: -8,
    marginLeft: -12,
    '&:focus, &:hover, &$active': {
      boxShadow: 'inherit',
    },
  },
  active: {},
  valueLabel: {
    left: 'calc(-50% + 4px)',
  },
  track: {
    height: 8,
    borderRadius: 4,
  },
  rail: {
    height: 8,
    borderRadius: 4,
  },
})(Slider);

const CustomTypography = withStyles({
  root: {
    color: 'f5f5f5',
    padding: 0,
    margin: 0,
    fontWeight: 'bold',
  },
})(Typography);