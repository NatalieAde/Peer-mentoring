import React, {
    useState,
    useEffect,
    useContext
} from 'react';
import {
    Typography,
    Chip,
    Grid,
    Button,
} from '@material-ui/core';
import {
    AccountCircle,
    EmailRounded,
    SchoolRounded,
    Edit
} from '@material-ui/icons';
import axios from 'axios';
import { AuthContext } from '../../../App';
import ProfileImg from '../../../profilePic.jpg';
import { identity } from 'lodash';


export default function ProfilePage() {
    const { state } = useContext(AuthContext);
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
    const handleDelete = () => {
        console.info('You clicked the delete icon.');
      };
        

    useEffect(() => {
        const id = JSON.parse(localStorage.getItem('users')).id;
        console.log(id);
        if(id){
            console.log("USER_ID");
            axios.get("http://localhost:5000/app/getUserDetails/"+id,{
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
                
            })
            .catch(err=>console.log(err))
        }
    }, [])
    localStorage.setItem("userInfo", JSON.stringify(profileInfo));
    console.log(profileInfo);

    return (
        <React.Fragment>
            <div style={{backgroundColor: '#EC6D0A', marginTop: '-1.5%', marginBottom: '2%'}}>
                    <Typography style={{color: '#FFFFFF', fontSize: '55px'}} align={'center'}>Profile</Typography> 
            </div>
            <div style={{marginLeft: '90%', position: 'absolute'}}>
                <Button
                    variant="contained"
                    size="large"
                    style={{color: '#FFFFFF', backgroundColor: '#F1960D'}}
                    startIcon={<Edit />}
                    href='/editprofile'
                >
                    Edit
                </Button>
            </div>
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
                    { profileInfo.placement &&
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
                </Grid>
            </Grid>
        </React.Fragment>
    )
}