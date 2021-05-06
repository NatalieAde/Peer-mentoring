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
    TextField
} from '@material-ui/core';
import {
    AccountCircle,
    EmailRounded,
    SchoolRounded,
    Save
} from '@material-ui/icons';
import axios from 'axios';
import { AuthContext } from '../../../App';
import ProfileImg from '../../../Images/profilePic.jpg';
import { identity } from 'lodash';


export default function EditProfilePage() {
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

    const handleInputChange = (event) => {
        const { name, value } = event.target
    
        setProfileInfo({ ...profileInfo, [name]: value })
    }
        
//useEffect is a React hook that performs an action anytime the component renders
      useEffect(() => {
          //gets the signed in users id from the local storage
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
    console.log(profileInfo);

    //function renders when user clicks save button
    function updateProfile() {  
        //gets the signed in users id from the local storage
        const id = JSON.parse(localStorage.getItem('users')).id;
        setProfileInfo({
            firstName: profileInfo.firstName,
            lastName: profileInfo.lastName,
            email: profileInfo.email,
            course: profileInfo.course,
            yearOfStudy: profileInfo.yearOfStudy,
            summary: profileInfo.summary,
            interests: profileInfo.interests,
            placement: profileInfo.placement
        })  
        //axios request to backend to update the user's details
        axios.put('http://localhost:5000/app/updateProfile/' + id, profileInfo)
        .then( res => {
        //   alert(res.data);
         }   
        )
        .catch(err => {
          console.log(err.response);
        //   alert('An error occurred! Try submitting the form again.');
        });
    }
      

    return (
        <React.Fragment>
            <div style={{backgroundColor: '#EC6D0A', marginTop: '-1.5%', marginBottom: '2%'}}>
                <Typography style={{color: '#FFFFFF', fontSize: '55px'}} align={'center'}>Edit Profile</Typography> 
            </div>

            <form noValidate autoComplete="off">                
                <div style={{marginLeft: '90%', position: 'absolute'}}>
                    <Button
                        variant="contained"
                        size="large"
                        style={{color: '#FFFFFF', backgroundColor: '#F1960D'}}
                        startIcon={<Save />}
                        onClick={updateProfile}
                    >
                        Save
                    </Button>
                </div>
                <Grid container style={{marginTop: "3%"}}>
                    <Grid item xs={12} sm={3} >
                        <AccountCircle style={{fontSize: 300}}/>
                        <Grid item xs={12} style={{marginLeft: "5%"}}>
                            <div style={{display: "flex", flexDirection:"row"}}>
                                <SchoolRounded />
                                <TextField
                                    id="outlined-basic"
                                    name="yearOfStudy"
                                    onChange={handleInputChange}                                    // defaultValue={profileInfo.yearOfStudy}
                                    value={profileInfo.yearOfStudy}
                                    variant="outlined"
                                    color="primary"
                                    size="small"
                                    style={{width: "25%", height: "10px"}}
                                />
                                <Typography style={{marginTop: "2%"}}>
                                    Year 
                                </Typography>
                                <TextField
                                    id="outlined-basic"
                                    multiline
                                    name="course"
                                    onChange={handleInputChange}                                    // defaultValue={profileInfo.course}
                                    value={profileInfo.course}
                                    variant="outlined"
                                    color="primary"
                                    size="small"
                                    style={{width: "30%"}}
                                />
                            </div>
                        </Grid>
                        <Grid item xs={12} style={{marginLeft: "5%", marginTop: "2%"}}>
                            <div style={{display: "flex", flexDirection:"row"}}>
                                <EmailRounded />
                                <TextField
                                    id="outlined-basic"
                                    name="email"
                                    onChange={handleInputChange}                                       // defaultValue={profileInfo.email}
                                    value={profileInfo.email}
                                    variant="outlined"
                                    color="primary"
                                    size="small"
                                />
                            </div>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} sm={9}>
                        <TextField
                            id="outlined-basic"
                            name="firstName"
                            onChange={handleInputChange}                               // defaultValue={profileInfo.firstName}
                            value={profileInfo.firstName}
                            variant="outlined"
                            color="primary"
                            style={{width: "45%", marginBottom: "5%", marginTop: "5%"}}
                        />
                        <TextField
                            id="outlined-basic"
                            name="lastName"
                            onChange={handleInputChange}                               // defaultValue={profileInfo.lastName}
                            value={profileInfo.lastName}
                            variant="outlined"
                            color="primary"
                            style={{width: "45%", marginBottom: "5%", marginTop: "5%"}}
                        />
                        <Typography variant="h5" style={{marginBottom: "2%"}}>Personal Information:</Typography>
                        <Typography variant="h6" style={{color: "#C4C4C4"}}>Summary:</Typography>
                        <TextField
                                    id="outlined-basic"
                                    multiline
                                    name="summary"
                                    onChange={handleInputChange}                                       // defaultValue={profileInfo.placement}
                                    value={profileInfo.summary}
                                    variant="outlined"
                                    color="primary"
                                    // size="small"
                                    style={{width: "95%"}}
                                />
                        <Typography variant="h6" style={{color: "#C4C4C4"}}>Hobbies:</Typography>
                        <TextField
                            id="outlined-basic"
                            name="interests"
                            onChange={handleInputChange}                               // defaultValue={profileInfo.interests}
                            value={profileInfo.interests}
                            variant="outlined"
                            color="primary"
                            // size="small"
                            style={{width: "95%"}}
                        />

                        { profileInfo.placement &&
                            <>
                                <Typography variant="h6" style={{color: "#C4C4C4"}}>Placement Experienceee:</Typography>
                                <TextField
                                    id="outlined-basic"
                                    name="placement"
                                    onChange={handleInputChange}                                       // defaultValue={profileInfo.placement}
                                    value={profileInfo.placement}
                                    variant="outlined"
                                    color="primary"
                                    // size="small"
                                    style={{width: "95%"}}
                                />
                            </>
                        }
                        
                            {/* <div>
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
                            </div> */}
                    </Grid>
                </Grid>
            </form>
        </React.Fragment>
    )
}