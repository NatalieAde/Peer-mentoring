import React from 'react';
import { 
    Typography,
    Grid,
    Paper,
} from '@material-ui/core';
import HomeImg from '../../../Images/pair5.jpg';
import arrow from '../../../Images/arrow2.png';
import TextModel from '../../PageText/model';
import Slider from 'infinite-react-carousel';
import GoalsImg from '../../../Images/pair10.jpg';
import FriendsImg from '../../../Images/friends.svg';
import VideoChatImg from '../../../Images/pair4.jpg';
import PairImg from '../../../Images/pair6.jpg';



export default function HomePage() {
    const {Home} = TextModel;
    return (
        <React.Fragment>
            <Slider 
                dots
                autoplay
                autoplaySpeed={5000}
            >
                <div>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={8}>
                        <div style={{marginTop: "-5%"}}>
                            <img src={HomeImg} alt="Logo" style={{width: "100%"}} />
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={4} style={{marginTop:"5%"}}>
                        <Typography variant={"h3"} style={{marginRight: "10%", marginBottom: "5%", lineHeight: 2, textAlign:"center", color:"#FF9505"}}>
                            Join Now!
                        </Typography>
                        <Typography style={{marginRight: "10%", marginBottom: "5%", lineHeight: 2, textAlign:"center"}}>
                            {Home.Header.text1}
                        </Typography>
                    </Grid>
                </Grid>
                </div>
                <div>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={4} style={{marginTop:"5%"}}>
                        <Typography variant={"h3"} style={{marginLeft: "10%", marginBottom: "5%", lineHeight: 1, textAlign:"center", color:"#FF9505"}}>
                            Why you should become a Mentor!
                        </Typography>
                        <Typography style={{marginLeft: "5%", marginBottom: "5%", lineHeight: 2, textAlign:"center"}}>
                            {Home.Header.text2}
                        </Typography>
                        <Typography style={{marginLeft: "5%", marginBottom: "5%", lineHeight: 2, textAlign:"center"}}>
                            {Home.Header.text3}
                        </Typography>
                        <Typography style={{marginLeft: "5%", marginBottom: "5%", lineHeight: 2, textAlign:"center"}}>
                            {Home.Header.text4}
                        </Typography>
                        
                    </Grid>
                    <Grid item xs={12} sm={8}>
                        <div style={{}}>
                            <img src={VideoChatImg} alt="Logo" style={{width: "100%"}} />
                        </div>
                    </Grid>
                    
                </Grid>
                </div>
                <div>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={8}>
                        <div style={{}}>
                            <img src={GoalsImg} alt="Logo" style={{width: "100%"}} />
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={4} style={{marginTop:"5%"}}>
                        <Typography variant={"h3"} style={{marginRight: "10%", marginBottom: "5%", lineHeight: 1, textAlign:"center", color:"#FF9505"}}>
                            Why you should become a Mentee!
                        </Typography>
                        <Typography style={{marginRight: "5%", marginBottom: "5%", lineHeight: 2, textAlign:"center"}}>
                            {Home.Header.text5}
                        </Typography>
                        <Typography style={{marginRight: "5%", marginBottom: "5%", lineHeight: 2, textAlign:"center"}}>
                            {Home.Header.text6}
                        </Typography>
                        <Typography style={{marginRight: "5%", marginBottom: "5%", lineHeight: 2, textAlign:"center"}}>
                            {Home.Header.text7}
                        </Typography>
                        <Typography style={{marginRight: "5%", marginBottom: "5%", lineHeight: 2, textAlign:"center"}}>
                            {Home.Header.text8}
                        </Typography>
                    </Grid>   
                </Grid>
                </div>
                <div>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={4} style={{marginTop:"5%"}}>
                        <Typography variant={"h3"} style={{marginRight: "5%", marginBottom: "5%", lineHeight: 1, textAlign:"center", color:"#FF9505"}}>
                            The Perfect Match!
                        </Typography>
                        <Typography style={{marginLeft: "5%", marginBottom: "5%", lineHeight: 2, textAlign:"center"}}>
                            {Home.Header.text10}
                        </Typography>
                        <Typography style={{marginLeft: "5%", marginBottom: "5%", lineHeight: 2, textAlign:"center"}}>
                            {Home.Header.text9}
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={8}>
                        <div style={{}}>
                            <img src={PairImg} alt="Logo" style={{width: "100%"}} />
                        </div>
                    </Grid>
                </Grid>
                </div>
            </Slider>

            <Grid container spacing={3} style={{justifyContent:"center", marginLeft: "auto", marginRight: "auto", marginTop: "-2%"}}>
                <Grid item xs={12} sm={2}>
                    <Paper elevation={0}>
                        <div style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            backgroundColor: "#FFB627",
                            borderRadius:50,
                            width:80,
                            height:80,
                            marginLeft: "auto",
                            marginRight: "auto"
                        }}>
                            <p style={{ textAlign:"center", position:"absolute", fontWeight:"bold", color:"#FFFFFF", fontSize:22}}>
                                Step 1
                            </p>
                        </div>
                        <Typography style={{marginRight: "1%", marginLeft: "1%"}} align={"center"}>
                            {Home.steps.one}
                        </Typography>
                    </Paper>
                </Grid>

                <Grid item xs={12} sm={1} style={{marginTop:"2%", color:"#C4C4C4"}}>
                    <img src={arrow} style={{width: "60%", opacity:"40%"}} />
                </Grid>

                <Grid item xs={12} sm={2} style={{justifyContent:"center", marginLeft: "auto", marginRight: "auto"}}>
                    <Paper elevation={0}>
                        <div style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            backgroundColor: "#FFB627",
                            borderRadius:50,
                            width:80,
                            height:80,
                            marginLeft: "auto",
                            marginRight: "auto"
                        }}>
                            <p style={{ textAlign:"center", position:"absolute", fontWeight:"bold", color:"#FFFFFF", fontSize:22}}>
                                Step 2
                            </p>
                        </div>
                        <Typography style={{marginRight: "1%", marginLeft: "1%"}} align={"center"}>
                            {Home.steps.two}
                        </Typography>
                    </Paper>
                </Grid>

                <Grid item xs={12} sm={1} style={{marginTop:"2%", color:"#C4C4C4"}}>
                    <img src={arrow} style={{width: "60%", opacity:"40%"}} />
                </Grid>

                <Grid item xs={12} sm={2} style={{justifyContent:"center", marginLeft: "auto", marginRight: "auto"}}>
                    <Paper elevation={0}>
                        <div style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            backgroundColor: "#FF9505",
                            borderRadius:50,
                            width:80,
                            height:80,
                            marginLeft: "auto",
                            marginRight: "auto"
                        }}>
                            <p style={{ textAlign:"center", position:"absolute", fontWeight:"bold", color:"#FFFFFF", fontSize:22}}>
                                Step 3
                            </p>
                        </div>
                        <Typography style={{marginRight: "1%", marginLeft: "1%"}} align={"center"}>
                            {Home.steps.three}
                        </Typography>
                    </Paper>
                </Grid>

                <Grid item xs={12} sm={1} style={{marginTop:"2%", color:"#C4C4C4"}}>
                    <img src={arrow} style={{width: "60%", opacity:"40%"}} />
                </Grid>

                <Grid item xs={12} sm={2} style={{justifyContent:"center", marginLeft: "auto", marginRight: "auto"}}>
                    <Paper elevation={0}>
                        <div style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            backgroundColor: "#EC6D0A",
                            borderRadius:50,
                            width:80,
                            height:80,
                            marginLeft: "auto",
                            marginRight: "auto"
                        }}>
                            <p style={{ textAlign:"center", position:"absolute", fontWeight:"bold", color:"#FFFFFF", fontSize:22}}>
                                Step 4
                            </p>
                        </div>
                        <Typography style={{marginRight: "1%", marginLeft: "1%"}} align={"center"}>
                            {Home.steps.four}
                        </Typography>
                    </Paper>
                </Grid>
            </Grid>
        </React.Fragment>
    )
}