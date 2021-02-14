import React, { useState, useContext }from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { AccountCircle, ExitToApp } from '@material-ui/icons';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';

import { AuthContext } from '../../App';

import { Link } from "react-router-dom";

import useStyles from './styles';



export default function Header() {
  const { dispatch } = useContext(AuthContext);
  const classes = useStyles();
  const [clicked, setClick] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);
  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
  const open = Boolean(anchorEl);


  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };


  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'left' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'left' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <Link to="/myMatch" style={{ textDecoration: 'none', display: 'block', color: '#000000' }}>
        <MenuItem onClick={handleMenuClose}>
          My Match
        </MenuItem>
      </Link>
      <Link to="/messages" style={{ textDecoration: 'none', display: 'block', color: '#000000' }}>
        <MenuItem onClick={handleMenuClose}>
          Messages
        </MenuItem>
      </Link>
      <Link to="/goals" style={{ textDecoration: 'none', display: 'block', color: '#000000' }}>
        <MenuItem onClick={handleMenuClose}>
          Goals
        </MenuItem>
      </Link> 
      <Link to="/calendar" style={{ textDecoration: 'none', display: 'block', color: '#000000' }}>
        <MenuItem onClick={handleMenuClose}>
          Calendar
        </MenuItem>
      </Link> 
      <Link to="/resources" style={{ textDecoration: 'none', display: 'block', color: '#000000' }}>
        <MenuItem onClick={handleMenuClose}>
          Resources
        </MenuItem>
      </Link> 
      <Link to="/testimonials" style={{ textDecoration: 'none', display: 'block', color: '#000000' }}>
        <MenuItem onClick={handleMenuClose}>
          Testimonials
        </MenuItem>
      </Link> 
    </Menu>
  );


  return (
    <div>
    <AppBar position="absolute" className={classes.appBar}>
      <Toolbar style={{ display: "flex", justifyContent: 'space-between', flexWrap: 'nowrap'  }}>
      <div className={classes.sectionMobile}>
        <IconButton
          edge="start"
          className={classes.menuButton}
          color="inherit"
          aria-label="open drawer"
          aria-controls={mobileMenuId}
          aria-haspopup="true"
          onClick={handleMobileMenuOpen}
        >
          <MenuIcon />
        </IconButton>
        </div>
        <Button onClick={() => setClick(true)} className={clicked ? classes.clickedButton :classes.button} href="/">Peer2Peer Mentoring</Button>
        <div className={classes.grow} />
        <div className={classes.sectionDesktop}>
        <Button className={classes.button} href="/myMatch">My Match</Button>
        <Button className={classes.button} href="/messages">Messages</Button>
        <Button className={classes.button} href="/goals">Goals</Button>
        <Button className={classes.button} href="/calendar">Calendar</Button>
        <Button className={classes.button} href="/resources">Resources</Button>
        <Button className={classes.button} href="/testimonials">Testimonials</Button>

      </div>
              <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={open}
                onClose={handleClose}
              >
                <Link to="/profile" style={{ textDecoration: 'none', display: 'block', color: '#000000' }}>
                <MenuItem
                  onClick={handleClose}
                  >
                    Profile
                </MenuItem>
                </Link>
                <Link 
                  to="/" 
                  style={{ textDecoration: 'none', display: 'block', color: '#000000' }}
                >
                <MenuItem 
                  onClick={() => dispatch({
                    type: "LOGOUT"
                  })}
                >
                  <ExitToApp fontSize="small" />
                  Log Out
                </MenuItem>
                </Link>
              </Menu>
            
      </Toolbar>
    </AppBar>
    {renderMobileMenu}
    </div>
  );
}