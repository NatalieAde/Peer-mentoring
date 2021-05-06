import React, {useState} from "react";
import {
    BottomNavigation,
    BottomNavigationAction
} from '@material-ui/core';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import YouTubeIcon from '@material-ui/icons/YouTube';
import EmailIcon from '@material-ui/icons/Email';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import useStyles from './styles';


export default function Footer() {
    const classes = useStyles();
    const [value, setValue] = useState('recents');
    
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

    return(
        <BottomNavigation showLabels value={value} onChange={handleChange} className={classes.root}>
                <BottomNavigationAction
                    href='https://twitter.com/AstonUniversity'
                    style={{color: 'white'}}
                    label="Twitter"
                    value="twitter"
                    icon={<TwitterIcon style={{color:'white'}} />} 
                />
                <BottomNavigationAction 
                    href='https://www.facebook.com/astonuniversity/' 
                    style={{color: 'white'}} 
                    label="Facebook" 
                    value="facebook" 
                    icon={<FacebookIcon style={{color:'white'}} />} 
                />
                <BottomNavigationAction 
                    href='https://www.instagram.com/AstonUniversity/' 
                    style={{color: 'white'}} 
                    label="Instagram" 
                    value="instagram" 
                    icon={<InstagramIcon style={{color:'white'}} />} 
                />
                <BottomNavigationAction
                    href='https://www.linkedin.com/edu/school?id=12568' 
                    style={{color: 'white'}} 
                    label="LinkedIn" 
                    value="linkedin" 
                    icon={<LinkedInIcon style={{color:'white'}} />} 
                />
                <BottomNavigationAction 
                    href='https://www.youtube.com/user/AstonUniversity' 
                    style={{color: 'white'}} 
                    label="YouTube" 
                    value="youtube" 
                    icon={<YouTubeIcon style={{color:'white'}} />}
                />
                <BottomNavigationAction 
                    href='https://www.youtube.com/user/AstonUniversity' 
                    style={{color: 'white'}} 
                    label="Email Us" 
                    value="email" 
                    icon={<EmailIcon style={{color:'white'}} />} 
                />
                <BottomNavigationAction 
                    href='https://www.google.com/maps/place/Aston+University/@52.4868616,-1.8904061,17z/data=!3m1!4b1!4m5!3m4!1s0x4870bc9ae4f2e4b3:0x9a670ba18e08a084!8m2!3d52.4868584!4d-1.8882174'
                    style={{color: 'white'}} 
                    label="Location" 
                    value="location" 
                    icon={<LocationOnIcon style={{color:'white'}} />} 
                />
        </BottomNavigation>
    );
}