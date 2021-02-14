import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, MenuItem, IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import Menu from '@material-ui/core/Menu';

import { Link } from "react-router-dom";

import useStyles from './styles';

export default function Header() {
  const classes = useStyles();
  const [clicked, setClick] = useState(false);
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
      <MenuItem onClick={handleMenuClose}>
      <Button variant="contained" style={{backgroundColor:'#FFFFFF' , color:'#FF9505', textTransform: 'none', width: '100px', marginRight: '2%'}} href="/signin">
        <Typography noWrap>
          Sign In
        </Typography>
      </Button>
      </MenuItem>
      <MenuItem onClick={handleMenuClose}>
      <Button variant="contained" style={{backgroundColor: '#FF9505', color: '#FFFFFF', textTransform: 'none'}} href="/registration">
        Register
      </Button>
      </MenuItem>
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
          <Button className={classes.button} href="/">Resources</Button>
          <Button className={classes.button} href="/">Testimonials</Button>
              <Button variant="contained" style={{backgroundColor:'#FFFFFF' , color:'#FF9505', textTransform: 'none', width: '100px', marginRight: '2%'}} href="/signin">
                <Typography noWrap>
                Sign In
                </Typography>
              </Button>
              <Button variant="contained" style={{backgroundColor: '#FF9505', color: '#FFFFFF', textTransform: 'none'}} href="/registration">
                Register
              </Button>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
    </div>
  );
}