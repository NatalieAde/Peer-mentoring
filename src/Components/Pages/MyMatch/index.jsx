import React, {useState, useEffect} from 'react';
import { Typography, CircularProgress } from '@material-ui/core';
import MaterialLayout from '../../Layout/layout';
import axios from 'axios';


export default function MyMatchPage() {
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
                // setProfileInfo({
                //     firstName: res.data.firstName,
                //     lastName: res.data.lastName,
                //     email: res.data.email,
                //     course: res.data.course,
                //     yearOfStudy: res.data.yearOfStudy,
                //     summary: res.data.summary,
                //     interests: res.data.interests,
                //     placement: res.data.placement
                //   })   
                console.log(JSON.stringify(res));
                
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

            <MaterialLayout>
                <div style={{display: "flex", flexDirection: 'column', justifyContent: "center", alignItems: "center"}}>
                    <Typography>Status: We are searching for your match.</Typography>
                    <CircularProgress
                        size={60}
                        style={{color: '#EC6D0A'}}
                    />
                    <Typography>{profileInfo.firstName} {profileInfo.lastName}</Typography>
                </div>
            </MaterialLayout>
        </React.Fragment>
    )
}