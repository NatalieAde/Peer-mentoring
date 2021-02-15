import React from 'react';
import { Typography, Chip } from '@material-ui/core';
import { AccountCircle, EmailRounded, SchoolRounded } from '@material-ui/icons';

import ProfileImg from '../../../profilePic.jpg';


export default function ProfilePage() {
    const handleDelete = () => {
        console.info('You clicked the delete icon.');
      };

    return (
        <React.Fragment>
            <div style={{margin: "2%"}}>
                <div style={{display: "flex", flexDirection:"row"}}>
                    {/* <img src={ProfileImg} alt="Logo" style={{width:"15%", borderRadius: 200}} /> */}
                    <div style={{marginRight: "2%"}}>
                        <AccountCircle style={{fontSize: 200}}/>
                        <div style={{display: "flex", flexDirection:"row"}}>
                            <SchoolRounded />
                            <Typography>3rd Year Computer Science Student</Typography>
                        </div>
                        <div style={{display: "flex", flexDirection:"row"}}>
                            <EmailRounded />
                            <Typography>email@aston.ac.uk</Typography>
                        </div>
                    </div>
                    <div style={{display: "flex", flexDirection:"column"}}>
                        <Typography variant="h3" style={{marginBottom: "5%"}}>Student Name</Typography>
                        <Typography variant="h5" style={{marginBottom: "2%"}}>Personal Information:</Typography>
                        <Typography variant="h6" style={{color: "#C4C4C4"}}>Summary:</Typography>
                        <Typography style={{marginBottom: "2%"}}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.
                        </Typography>
                        <Typography variant="h6" style={{color: "#C4C4C4"}}>Summary:</Typography>
                        <Typography style={{marginBottom: "2%"}}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.
                        </Typography>
                        <Typography variant="h6" style={{color: "#C4C4C4"}}>Summary:</Typography>
                        <Typography style={{marginBottom: "2%"}}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.
                        </Typography>
                        <Typography variant="h6" style={{color: "#C4C4C4"}}>Summary:</Typography>
                        <div>
                            <Chip 
                                label="Deletable primary"
                                onDelete={handleDelete}
                                // color="primary" 
                                style={{backgroundColor: "#ffdbbf", color: "#000000"}}
                            />
                            <Chip 
                                label="Deletable primary"
                                onDelete={handleDelete}
                                // color="primary" 
                                style={{backgroundColor: "#ffdbbf", color: "#000000"}}
                            />
                            <Chip 
                                label="Deletable primary"
                                onDelete={handleDelete}
                                // color="primary" 
                                style={{backgroundColor: "#ffdbbf", color: "#000000"}}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}