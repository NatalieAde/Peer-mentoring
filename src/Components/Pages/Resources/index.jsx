import React, { useState } from 'react';
import {
    Typography,
    Card,
    CardActionArea,
    CardActions,
    CardContent,
    CardMedia,
    Button,
    MenuItem,   
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import Menu from '@material-ui/core/Menu';
import HomeImg from '../../../Images/imgt.png';

import { Link } from "react-router-dom";

import useStyles from './styles';

export default function ResourcesPage() {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = useState(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const handleMenuClose = () => {
        setAnchorEl(null);
        handleMobileMenuClose();
    };

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    return (
        <React.Fragment>
            <div style={{backgroundColor: '#EC6D0A', marginTop: '-1.5%', marginBottom: '2%'}}>
               <Typography style={{color: '#FFFFFF', fontSize: '55px'}} align={'center'}>Resources</Typography> 
            </div>
            <Menu
                anchorEl={mobileMoreAnchorEl}
                anchorOrigin={{ vertical: 'top', horizontal: 'left' }}
                // id={mobileMenuId}
                keepMounted
                transformOrigin={{ vertical: 'top', horizontal: 'left' }}
                open={isMobileMenuOpen}
                onClose={handleMobileMenuClose}
                >
                <Link to="/resources" className={classes.link}>
                    <MenuItem onClick={handleMenuClose}>
                    {/* <Info fontSize="small"/> */}
                    Resources
                    </MenuItem>
                </Link> 
                <Link to="/testimonials" className={classes.link}>
                    <MenuItem onClick={handleMenuClose}>
                    {/* <FormatQuote fontSize="small"/> */}
                    Testimonials
                    </MenuItem>
                </Link> 
                <Link to="/signin" className={classes.link}>
                    <MenuItem onClick={handleMenuClose}>
                    {/* <ExitToApp fontSize="small" /> */}
                    Sign In
                    </MenuItem>
                </Link> 
                <Link to="/register" className={classes.link}>
                    <MenuItem onClick={handleMenuClose}>
                    {/* <HowToReg fontSize="small" /> */}
                    Register
                    </MenuItem>
                </Link> 
            </Menu>
            <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia
                        className={classes.media}
                        image={HomeImg}
                        title="img"
                    />
                    <CardContent>
                    <Typography gutterBottom align={'center'} style={{backgroundColor: '#FF9505', color: '#FFFFFF'}}>
                        Mentoring
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                        across all continents except Antarctica
                    </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions style={{justifyContent: "center"}}>
                    <Button size="small" variant="outlined" color="inherit" style={{color: '#FF9505', textTransform: 'none', fontSize: 14}}>
                        Read More
                    </Button>
                </CardActions>
            </Card>
        </React.Fragment>
    )
}