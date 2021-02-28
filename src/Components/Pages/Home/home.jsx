import React from 'react';
import HomeImg from '../../../imgt.png';
import one from '../../../contract1.jpg';
import chat from '../../../chat.svg';
import arrow from '../../../arrow2.png';
import call from '../../../videoCall.png';
import training from '../../../training.png';
import { Typography, Grid, Button, Paper, Slide } from '@material-ui/core';


export default function HomePage() {
    return (
        <React.Fragment>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={9}>
                    <div style={{marginTop: "-5%"}}>
                        <img src={HomeImg} alt="Logo" style={{width: "100%"}} />
                    </div>
                </Grid>
                <Grid item xs={12} sm={3} style={{marginTop:"5%"}}>
                    <Typography style={{marginRight: "10%", marginLeft: "10%", marginBottom: "5%", lineHeight: 2,}}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.
                    </Typography>
                    <div style={{marginLeft:"25%"}}>
                        <Button variant="contained" style={{backgroundColor: '#FF9505', color: '#FFFFFF', textTransform: 'none', fontSize: 20}} href="/registration">
                            Register
                        </Button>
                    </div>
                </Grid>
            </Grid>

            {/* <Grid container spacing={3} style={{justifyContent:"center"}}>
                <Grid item xs={12} sm={2}>
                    <Paper elevation={0}>
                    <img src={one}  />
                        <Typography style={{marginRight: "1%", marginLeft: "1%"}}>
                            Step 1. Register and create a profile to help us find your perfect match.
                        </Typography>
                    </Paper>
                </Grid>

                <Grid item xs={12} sm={1} style={{marginTop:"8%"}}>
                    <img src={arrow} style={{width: "60%"}} />
                </Grid>

                <Grid item xs={12} sm={2}>
                    <Paper elevation={0}>
                    <img src={training}    />
                        <Typography style={{marginRight: "1%", marginLeft: "1%"}}>
                            Step 1. Register and create a profile to help us find your perfect match.
                        </Typography>
                    </Paper>
                </Grid>

                <Grid item xs={12} sm={1} style={{marginTop:"8%"}}>
                    <img src={arrow} style={{width: "60%"}} />
                </Grid>

                <Grid item xs={12} sm={2}>
                    <Paper elevation={0}>
                    <img src={chat} style={{width: "60%"}}  />
                        <Typography style={{marginRight: "1%", marginLeft: "1%"}}>
                            Step 1. Register and create a profile to help us find your perfect match.
                        </Typography>
                    </Paper>
                </Grid>

                <Grid item xs={12} sm={1} style={{marginTop:"8%"}}>
                    <img src={arrow} style={{width: "60%"}} />
                </Grid>

                <Grid item xs={12} sm={2}>
                    <Paper elevation={0}>
                    <img src={call}  />
                        <Typography style={{marginRight: "1%", marginLeft: "1%"}}>
                            Step 1. Register and create a profile to help us find your perfect match.
                        </Typography>
                    </Paper>
                </Grid>
            </Grid> */}
        </React.Fragment>
    )
}