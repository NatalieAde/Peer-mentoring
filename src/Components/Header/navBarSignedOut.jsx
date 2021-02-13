import React, { useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import useStyles from './styles';

export default function Header() {
  const classes = useStyles();
  const [clicked, setClick] = useState(false);

  return (
    
    <AppBar position="absolute" className={classes.appBar}>
      <Toolbar style={{ display: "flex", justifyContent: 'space-between', flexWrap: 'nowrap'  }}>
        <Button onClick={() => setClick(true)} className={clicked ? classes.clickedButton :classes.button} href="/">Peer2Peer Mentoring</Button>
        <Button className={classes.button} href="/">Resources</Button>
        <Button className={classes.button} href="/">Testimonials</Button>

        <div style={{ display: "flex", justifyContent: 'flex-end', flexWrap: 'nowrap', marginLeft: 'auto'  }}>
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
  );
}