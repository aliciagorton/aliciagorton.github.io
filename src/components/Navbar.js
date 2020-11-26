import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Avatar } from '@material-ui/core';
import avatar from './static/logo.png';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles({
  main: {
    backgroundColor: "#081321",
    height: "60px",
    flex: 1, 
    display: "flex", 
  },
  navMenu: {
    listStyleType: "none",
    margin: 0,
    padding: 0,
    
    // textAlign: "right",
    // display: "flex",
    // overflow: "auto",
  },
  
  navItem: {
    justifyContent: "end",
    textAlign: "right",
  },
  navLinks: {
    color: "white",
    listStyleType: "none",
    textDecoration: "none",
    display: "inline-block",
    fontSize: "20px",
    padding: "20px 80px",
    float: "left",
    
  },
  resume: {
    color: "white",
    textDecoration: "none",
  }
})

const options = [
  'Home',
  'About',
  'Projects',
  'Experience',
  'Resume'
];

const ITEM_HEIGHT = 48;

const Navbar = () => {
  const classes = useStyles();
  const [click_state, setClick] = useState(false);
  const closeMobileMenu = () => setClick(false);
  const resume_pdf = "/AliciaGorton.pdf";

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar className={classes.main}>
      <Grid>
      <ul className={click_state ? 'nav-menu active' : 'nav-menu'} style={{listStyleType: "none", padding: 0, margin: 0}}>
          <li className={classes.navItem} style={{display: "inline"}}>
            <Link to='/' className={classes.navLinks} onClick={closeMobileMenu}>
              <Avatar alt="Dog Ears" src={avatar} className={classes.avatar}/>
            </Link>
          </li>
          <li className={classes.navItem} style={{display: "inline"}}>
            <Link
              to='/about'
              className={classes.navLinks}
              onClick={closeMobileMenu}
            >
              About
            </Link>
          </li>
          <li className={classes.navItem} style={{display: "inline"}}>
            <Link
              to='/projects'
              className={classes.navLinks}
              onClick={closeMobileMenu}
            >
              Projects
            </Link>
          </li>
          <li className={classes.navItem} style={{display: "inline"}}>
            <Link
              to='/experience'
              className={classes.navLinks}
              onClick={closeMobileMenu}
            >
              Experience
            </Link>
          </li>
          <li className={classes.navItem} style={{display: "inline"}}>
            <a href={resume_pdf} className={classes.navLinks} target="_blank" >Resumé</a>
          </li>
        </ul>
        <div>
            <IconButton className={classes.icon}
              aria-label="more"
              aria-controls="long-menu"
              aria-haspopup="true"
              onClick={handleClick}
            >
              <MoreVertIcon />
            </IconButton>
            <Menu
              id="long-menu"
              anchorEl={anchorEl}
              keepMounted
              open={open}
              onClose={handleClose}
              PaperProps={{
                style: {
                  maxHeight: ITEM_HEIGHT * 4.5,
                  width: '20ch',
                },
              }}
            >
              {options.map((option) => (
                <MenuItem key={option} selected={option === 'Pyxis'} onClick={handleClose}>
                  {option}
                </MenuItem>
              ))}
            </Menu>
          </div>
        );
      }
      </Grid>


    </AppBar>
  );
}

export default Navbar


