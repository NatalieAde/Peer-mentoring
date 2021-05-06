import React, { useState, useContext }from 'react';
import {
  AppBar,
  IconButton,
  Tab,
  Tabs
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import {
  AccountCircle,
  ExitToApp,
  QuestionAnswer,
  People,
  Home,
  TrackChanges,
  EventAvailable,
  Info,
  FormatQuote
} from '@material-ui/icons';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';

import Logo from '../../Images/mentoringLogo.png';

import { AuthContext } from '../../App';

import { Link, NavLink } from "react-router-dom";

import useStyles from './styles';



export default function Header() {
  const { dispatch } = useContext(AuthContext);
  const classes = useStyles();
  const [value, setValue] = useState(0);
  const [anchorEl, setAnchorEl] = useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);
  const [sighpost, setSignpost] = useState(false)
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
  const open = Boolean(anchorEl);


  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
    setSignpost(true);
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
      <Link to="/myMatch" className={classes.link}>
        <MenuItem onClick={handleMenuClose}>
          <People fontSize="small"/>
          My Match
        </MenuItem>
      </Link>
      <Link to="/messages" className={classes.link}>
        <MenuItem onClick={handleMenuClose}>
          <QuestionAnswer fontSize="small"/>
          Messages
        </MenuItem>
      </Link>
      <Link to="/goals" className={classes.link}>
        <MenuItem onClick={handleMenuClose}>
          <TrackChanges fontSize=""small/>
          Goals
        </MenuItem>
      </Link> 
      <Link to="/calendar" className={classes.link}>
        <MenuItem onClick={handleMenuClose}>
          <EventAvailable fontSize="small"/>
          Calendar
        </MenuItem>
      </Link> 
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
    </Menu>
  );


  return (
    <div>
    <AppBar position="absolute" className={classes.appBar} > 
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
          to="/myMatch"
          activeStyle={{
            fontWeight: "bold",
            color: "#FFFFFF",
            textDecorationLine: 'underline'
          }}
          className={classes.tabsText2}
        >
          <Tab className={classes.tabsText} label="My Match" icon={<People/>} href="/myMatch" value={value} selected/>
        </NavLink>

        <NavLink
          to="/messages"
          activeStyle={{
            fontWeight: "bold",
            color: "#FFFFFF",
            textDecorationLine: 'underline'
          }}
          className={classes.tabsText2}
        >
          <Tab className={classes.tabsText} label="Messages" icon={<QuestionAnswer/>} href="/messages" value={value} selected/>
        </NavLink>

        <NavLink
          to="/goals"
          activeStyle={{
            fontWeight: "bold",
            color: "#FFFFFF",
            textDecorationLine: 'underline'
          }}
          className={classes.tabsText2}
        >
          <Tab className={classes.tabsText} label="Goals" icon={<TrackChanges/>} href="/goals" value={value} selected/>
        </NavLink>

        <NavLink
          to="/calendar"
          activeStyle={{
            fontWeight: "bold",
            color: "#FFFFFF",
            textDecorationLine: 'underline'
          }}
          className={classes.tabsText2}
        >
          <Tab className={classes.tabsText} label="Calendar" icon={<EventAvailable/>} href="/calendar" value={value} selected/>
        </NavLink>

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
       </div> 
      
        {/* <div style={{ backgroundColor: sighpost && '#83008F', borderRadius: 40, width:'64px', height:'64px'}}> */}
        <NavLink
          to="/profile"
          activeStyle={{
            fontWeight: "bold",
            color: "#FFFFFF",
            textDecorationLine: 'underline'
          }}
          className={classes.tabsText2}
        >
          <Tab className={classes.tabsText}
            label={JSON.parse(localStorage.getItem('userInfo')).firstName}
            icon={<AccountCircle style={{fontSize: 40}}/>}
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleMenu}
          value={value} selected/>
        </NavLink>  
        {/* </div> */}

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
          <Link to="/profile" className={classes.link}>
            <MenuItem onClick={handleClose}>
              Profile
            </MenuItem>
          </Link>
          <Link to="/" className={classes.link}>
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
      </Tabs>
    </AppBar>
    {renderMobileMenu}
    </div>
  );
}