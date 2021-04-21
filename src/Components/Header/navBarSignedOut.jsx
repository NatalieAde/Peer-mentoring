import React, { useState } from 'react';
import { 
  AppBar,
  Button,
  MenuItem,
  IconButton,
  Tab,
  Tabs
} from '@material-ui/core';
import {
  Home,
  Info,
  FormatQuote,
  ExitToApp,
  HowToReg
} from '@material-ui/icons';
import MenuIcon from '@material-ui/icons/Menu';
import Menu from '@material-ui/core/Menu';

import Logo from '../../Images/mentoringLogo.png';

import { Link, NavLink } from "react-router-dom";

import useStyles from './styles';

export default function Header() {
  const classes = useStyles();
  const [value, setValue] = useState(0);
  const [anchorEl, setAnchorEl] = useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

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

  const handleChange = (event, newValue) => {
    setValue(newValue);
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
      <Link to="/resources" className={classes.link}>
        <MenuItem onClick={handleMenuClose}>
          <Info fontSize="small"/>
          Resources
        </MenuItem>
      </Link> 
      <Link to="/testimonials" className={classes.link}>
        <MenuItem onClick={handleMenuClose}>
          <FormatQuote fontSize="small"/>
          Testimonials
        </MenuItem>
      </Link> 
      <Link to="/signin" className={classes.link}>
        <MenuItem onClick={handleMenuClose}>
          <ExitToApp fontSize="small" />
          Sign In
        </MenuItem>
      </Link> 
      <Link to="/registration" className={classes.link}>
        <MenuItem onClick={handleMenuClose}>
          <HowToReg fontSize="small" />
          Register
        </MenuItem>
      </Link> 
    </Menu>
  );

  return (
    <div>
      <AppBar position="absolute" className={classes.appBar}>
        <Tabs
          value={value}
          variant="fullWidth"
          onChange={handleChange}
          indicatorColor="inherit"
          // textColor="primary"
          aria-label="scrollable force tabs example"
        >
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
          <Tab className={classes.tabsText} label="Home" icon={<img src={Logo} alt="Logo" style={{width: "80%", height: "70%"}} />} href="/" value={value}/>
          <div className={classes.sectionDesktop}>  
            <NavLink
              to="/resources"
              activeStyle={{
                fontWeight: "bold",
                color: "#FFFFFF",
                textDecorationLine: 'underline'
              }}
              className={classes.tabsText2}
            >
              <Tab className={classes.tabsText} label="Resources" icon={<Info/>} href="/resources" value={value} selected/>
            </NavLink>

            <NavLink
              to="/testimonials"
              activeStyle={{
                fontWeight: "bold",
                color: "#FFFFFF",
                textDecorationLine: 'underline'
              }}
              className={classes.tabsText2}
            >
              <Tab className={classes.tabsText} label="Testimonials" icon={<FormatQuote/>} href="/testimonials" value={value} selected/>
            </NavLink> 
            <div style={{alignSelf:"center"}}>
              <Button variant="contained" style={{backgroundColor:'#FFFFFF' , color:'#FF9505', textTransform: 'none', width: '100px', marginRight: '4%', fontSize: 20}} href="/signin">
                Sign In
              </Button>
              <Button variant="contained" style={{backgroundColor: '#FF9505', color: '#FFFFFF', textTransform: 'none', fontSize: 20}} href="/registration">
                Register
              </Button>
            </div>
          </div>
        </Tabs>
      </AppBar>
      {renderMobileMenu}
    </div>
  );
}