import React from 'react';
import HomeImg from '../../../imgt.png';
import { Typography, Grid, Button } from '@material-ui/core';


export default function HomePage() {
    return (
        <React.Fragment>
            <Grid container spacing={3} style={{marginTop: "3%"}}>
                <Grid item xs={12} sm={9}>
                    <div style={{marginTop: "-5%"}}>
                        <img src={HomeImg} alt="Logo" style={{width: "100%"}} />
                    </div>
                </Grid>
                <Grid item xs={12} sm={3}>
                    <Typography style={{marginRight: "10%", marginLeft: "10%", marginBottom: "20%", lineHeight: 2,}}>
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
        </React.Fragment>
    )
}

// export default function HomePage() {
//     return (
//         <React.Fragment>
//             <Grid container spacing={3} style={{marginTop: "3%"}}>
//                 <Grid item xs={12} sm={3}>
//                     <AccountCircle style={{fontSize: 200}}/>
//                     <Grid item xs={12}>
//                         <SchoolRounded />
//                         <Typography>
//                             {profileInfo.yearOfStudy} Year {profileInfo.course}
//                         </Typography>
//                     </Grid>
//                     <Grid item xs={12}>
//                         <EmailRounded />
//                         <Typography>
//                             {profileInfo.email}
//                         </Typography>
//                     </Grid>
//                 </Grid>
//                 <Grid item xs={12} sm={9}>
//                     <Typography variant="h3" style={{marginBottom: "5%"}}>
//                         {profileInfo.firstName} {profileInfo.lastName}
//                     </Typography>
//                     <Typography variant="h5" style={{marginBottom: "2%"}}>Personal Information:</Typography>
//                     <Typography variant="h6" style={{color: "#C4C4C4"}}>Summary:</Typography>
//                         <Typography style={{marginBottom: "2%"}}>
//                             {profileInfo.summary}
//                         </Typography>
//                     <Typography variant="h6" style={{color: "#C4C4C4"}}>Interests:</Typography>
//                         <Typography style={{marginBottom: "2%"}}>
//                             {profileInfo.interests}
//                         </Typography>
//                     <Typography variant="h6" style={{color: "#C4C4C4"}}>Summary:</Typography>
//                         <Typography style={{marginBottom: "2%"}}>
//                             Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
//                             sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
//                             Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
//                             Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.
//                             Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
//                             sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
//                             Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
//                             Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.
//                         </Typography>
//                     <Typography variant="h6" style={{color: "#C4C4C4"}}>Summary:</Typography>
//                         <div>
//                             <Chip 
//                                 label="Deletable primary"
//                                 onDelete={handleDelete}
//                                 // color="primary" 
//                                 style={{backgroundColor: "#ffdbbf", color: "#000000"}}
//                             />
//                             <Chip 
//                                 label="Deletable primary"
//                                 onDelete={handleDelete}
//                                 // color="primary" 
//                                 style={{backgroundColor: "#ffdbbf", color: "#000000"}}
//                             />
//                             <Chip 
//                                 label="Deletable primary"
//                                 onDelete={handleDelete}
//                                 // color="primary" 
//                                 style={{backgroundColor: "#ffdbbf", color: "#000000"}}
//                             />
//                         </div>
//                 </Grid>
//             </Grid>
//         </React.Fragment>
//     )
// }