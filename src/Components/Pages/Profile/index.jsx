import React, { useState, useEffect, useContext } from 'react';
import { Typography, Chip } from '@material-ui/core';
import { AccountCircle, EmailRounded, SchoolRounded } from '@material-ui/icons';
import axios from 'axios';
import { AuthContext } from '../../../App';
import ProfileImg from '../../../profilePic.jpg';


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

      });
    const handleDelete = () => {
        console.info('You clicked the delete icon.');
      };
        

      useEffect(() => {
        const myName = JSON.parse(localStorage.getItem('users')).id;
        console.log(myName);
        if(myName){
            console.log("USER_ID");
            axios.get("http://localhost:5000/app/getUserDetails/"+myName,{
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
                  })   
                console.log(JSON.stringify(res));
                
            })
            .catch(err=>console.log(err))
        }
      }, [])
console.log(profileInfo);

    return (
        <React.Fragment>
            <div style={{margin: "2%"}}>
                <div style={{display: "flex", flexDirection:"row"}}>
                    {/* <img src={ProfileImg} alt="Logo" style={{width:"15%", borderRadius: 200}} /> */}
                    <div style={{marginRight: "2%"}}>
                        <AccountCircle style={{fontSize: 200}}/>
                        <div style={{display: "flex", flexDirection:"row"}}>
                            <SchoolRounded />
                            <Typography>
                                 {profileInfo.yearOfStudy} Year {profileInfo.course}
                            </Typography>
                        </div>
                        <div style={{display: "flex", flexDirection:"row"}}>
                            <EmailRounded />
                            <Typography>
                                {profileInfo.email}
                            </Typography>
                        </div>
                    </div>
                    <div style={{display: "flex", flexDirection:"column"}}>
    <Typography variant="h3" style={{marginBottom: "5%"}}>{profileInfo.firstName} {profileInfo.lastName}</Typography>
                        <Typography variant="h5" style={{marginBottom: "2%"}}>Personal Information:</Typography>
                        <Typography variant="h6" style={{color: "#C4C4C4"}}>Summary:</Typography>
                        <Typography style={{marginBottom: "2%"}}>
                            {profileInfo.summary}
                        </Typography>
                        <Typography variant="h6" style={{color: "#C4C4C4"}}>Interests:</Typography>
                        <Typography style={{marginBottom: "2%"}}>
                            {profileInfo.interests}
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