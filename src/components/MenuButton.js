import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { Button } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

import React from 'react'

function NormalMenu() {
    const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
      console.log("hi")
    setAnchorEl(event.currentTarget);
    console.log("hi")
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
    return (
        <div>
      <CustomButton aria-controls="fade-menu" aria-haspopup="true" onClick={handleClick}>
        Choose Sort Algorithm
      </CustomButton>
      <CustomMenu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <CustomMenuItem onClick={handleClose}>Bubble Sort</CustomMenuItem>
        <CustomMenuItem disabled onClick={handleClose}>Insertion Sort</CustomMenuItem>
        <CustomMenuItem disabled onClick={handleClose}>Heap Sort</CustomMenuItem>
      </CustomMenu>
    </div>
    )
}

const CustomButton = withStyles({
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

const CustomMenu = withStyles({
  paper: {
    border: '1px solid #d3d4d5',
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'left',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'left',
    }}
    {...props}
  />
));

const CustomMenuItem = withStyles({
  root: {
    '&:focus': {
      backgroundColor: '#047543',
      color: '#f5f5f5',
      '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
        color: '#f5f5f5',
      },
    },
  },
})(MenuItem);

export default NormalMenu
