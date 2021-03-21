import React, {useState, useEffect} from 'react';
import {
    Typography,
    CircularProgress, 
    Grid,
    Button,
    Paper
} from '@material-ui/core';
import {
    AccountCircle,
    EmailRounded,
    SchoolRounded,
} from '@material-ui/icons';
import useStyle from './styles';
import MaterialLayout from '../../Layout/layout';
import axios from 'axios';


export default function MyMatchPage() {
    const classes = useStyle();
    const [confirmed, setConfirmed] = useState(false);
    const [profileInfo, setProfileInfo] = useState({
        firstName: '',
        lastName: '',
        email: '',
        course: '',
        yearOfStudy: '',
        summary: '',
        interests: '',
        placement: '',

    });

    useEffect(() => {
        const id = JSON.parse(localStorage.getItem('users')).id;
        console.log(id);
        if(id){
            console.log("match");
            axios.get("http://localhost:5000/app/getMatchDetails/"+id,{
                headers: {
                    "content-type": "application/json"
                }
            }).then(res=>{
                setProfileInfo({
                    firstName: res.data.firstName,
                    lastName: res.data.lastName,
                    email: res.data.email,
                    course: res.data.course,
                    yearOfStudy: res.data.yearOfStudy,
                    summary: res.data.summary,
                    interests: res.data.interests,
                    placement: res.data.placement
                })   
                console.log(JSON.stringify(res));   
                const a = JSON.parse(JSON.stringify(res)).data; 
                a.map((match, i) => {
                    console.log(match);
                    setProfileInfo({
                        firstName: match.firstName,
                        lastName: match.lastName,
                        email: match.email,
                        course: match.course,
                        yearOfStudy: match.yearOfStudy,
                        summary: match.summary,
                        interests: match.interests,
                        placement: match.placement
                    }) 
                   
                  })
            })
            .catch(err=>console.log(err))
        }
      }, [])
    console.log(profileInfo);

    return (
        <React.Fragment>
            <div style={{backgroundColor: '#EC6D0A', marginTop: '-1.5%', marginBottom: '2%'}}>
               <Typography style={{color: '#FFFFFF', fontSize: '55px'}} align={'center'}>My Match</Typography> 
            </div>
            { !confirmed &&
                <MaterialLayout>
                    <div style={{display: "flex", flexDirection: 'column', justifyContent: "center", alignItems: "center"}}>
                        <Typography align={'center'}>Status: We have found you a match. Please confirm you are happy with your match.</Typography>
                        {/* <CircularProgress
                            size={60}
                            style={{color: '#EC6D0A'}}
                        /> */}
                    </div>
                    <Button
                        variant="contained"
                        size="large"
                        style={{color: '#FFFFFF', backgroundColor: '#F1960D'}}
                        onClick={() => setConfirmed(true)}
                    >
                    Confirm
                    </Button>
                </MaterialLayout>
            }
            <div className={classes.root}>
                <Paper className={classes.paper} style={{backgroundColor: '#FFFFFF', color: 'black'}}>
                    <Grid container style={{marginTop: "3%"}}>
                        <Grid item xs={12} sm={3} >
                            <AccountCircle style={{fontSize: 300}}/>
                            <Grid item xs={12} style={{marginLeft: "5%"}}>
                                <div style={{display: "flex", flexDirection:"row"}}>
                                    <SchoolRounded />
                                    <Typography style={{marginLeft: "5%"}}>
                                        {profileInfo.yearOfStudy} Year {profileInfo.course}
                                    </Typography>
                                </div>
                            </Grid>
                            <Grid item xs={12} style={{marginLeft: "5%"}}>
                                <div style={{display: "flex", flexDirection:"row"}}>
                                    <EmailRounded />
                                    <Typography style={{marginLeft: "5%"}}>
                                        {profileInfo.email}
                                    </Typography>
                                </div>
                            </Grid>
                        </Grid>
                        <Grid item xs={12} sm={9}>
                            <Typography variant="h3" style={{marginBottom: "5%"}}>
                                {profileInfo.firstName} {profileInfo.lastName}
                            </Typography>
                            <Typography variant="h5" style={{marginBottom: "2%"}}>Personal Information:</Typography>
                            <Typography variant="h6" style={{color: "#C4C4C4"}}>Summary:</Typography>
                                <Typography style={{marginBottom: "2%"}}>
                                    {profileInfo.summary}
                                </Typography>
                            { profileInfo.placement == "No" &&
                                <>
                                    <Typography variant="h6" style={{color: "#C4C4C4"}}>Placement Ecperience:</Typography>
                                    <Typography style={{marginBottom: "2%"}}>
                                        {profileInfo.placement}
                                    </Typography>
                                </>
                            }
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
                            <Typography variant="h6" style={{color: "#C4C4C4"}}>Interests:</Typography>
                        </Grid>
                    </Grid>
                </Paper>
            </div> 
        </React.Fragment>
    )
}