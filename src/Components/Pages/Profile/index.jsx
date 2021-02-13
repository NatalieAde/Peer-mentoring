import React from 'react';
import { Typography } from '@material-ui/core';
import ProfileImg from '../../../profilePic.jpg';


export default function ProfilePage() {
    return (
        <React.Fragment>
            <Typography>PROFILE PAGE</Typography>
            <img src={ProfileImg} alt="Logo" style={{width:"15%", borderRadius: 200}} />
        </React.Fragment>
    )
}