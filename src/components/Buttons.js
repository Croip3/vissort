import { Button } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

import React from 'react'

function NormalButtons({text}) {
    return (
        <NormalButton id="new-array" variant="outlined" >{text} </NormalButton>
    )
}

export default NormalButtons


const NormalButton = withStyles({
  root: {
    background: '#f5f5f5',
    borderRadius: 3,
    border: '#047543 solid 1px',
    color: '#047543',
    height: "2.5em",
    padding: '0 10px',
    margin: '0.5rem',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    fontSize: "1em",
    fontWeight: 'bold',
    '&:hover': {
      color: '#f5f5f5',
      border: '#f5f5f5 solid 1px'
    }
  },
  label: {
    textTransform: 'capitalize',
  },
})(Button);