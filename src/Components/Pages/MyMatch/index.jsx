import React, {useState, useEffect} from 'react';
import {
    Typography,
    TextField,
    Grid,
    Button,
    Paper,
    Tabs,
    Tab,
    Box,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle
} from '@material-ui/core';
import {
    AccountCircle,
    EmailRounded,
    SchoolRounded,
} from '@material-ui/icons';
import useStyle from './styles';
import MaterialLayout from '../../Layout/layout';
import axios from 'axios';
import { object } from 'prop-types';

function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`vertical-tabpanel-${index}`}
        aria-labelledby={`vertical-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box p={3}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }

  function a11yProps(index) {
    return {
      id: `vertical-tab-${index}`,
      'aria-controls': `vertical-tabpanel-${index}`,
    };
  }
  


export default function MyMatchPage() {
    const classes = useStyle();
    const [value, setValue] = useState(0);
    const [confirmed, setConfirmed] = useState();
    const [openDecline, setOpenDecline] = useState(false);
    const [openConfirm, setOpenConfirm] = useState(false);
    const [profileInfo, setProfileInfo] = useState([]);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleClickDecline = () => {
        setOpenDecline(true);
    };

    const handleClickConfirm = () => {
        setOpenConfirm(true);
    };
    
    const handleCloseDecline = () => {
        setOpenDecline(false);
        setConfirmed(true);
    };

    const handleCloseConfirm = () => {
        setOpenConfirm(false);
        setConfirmed(true);
    };

    const handleClose = () => {
        setOpenDecline(false);
    };
    
    const handleCloseC = () => {
        setOpenConfirm(false);
    };

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
                const a = JSON.parse(JSON.stringify(res)).data; 
                console.log("LENGTH" + a);
                if(a == "[object Object]"){
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
                }
               
                if(a.length > 1){
                    a.map((match, i) => {
                        console.log(match);
                        setProfileInfo(oldArray => [...oldArray, {firstName: match.firstName,
                            lastName: match.lastName,
                            email: match.email,
                            course: match.course,
                            yearOfStudy: match.yearOfStudy,
                            summary: match.summary,
                            interests: match.interests,
                            placement: match.placement
                        }]);
                     console.log(match.role); 
                    })
                }
                
            })
            .catch(err=>console.log(err))
        }
      }, [])
    console.log(profileInfo);
    console.log(typeof profileInfo.firstName === 'string');

    return (
        <React.Fragment>
            <div style={{backgroundColor: '#EC6D0A', marginTop: '-1.5%', marginBottom: '2%'}}>
               <Typography style={{color: '#FFFFFF', fontSize: '55px'}} align={'center'}>My Match</Typography> 
            </div>

            {profileInfo.length > 1 &&
                <div className={classes.root2}>
                <Tabs
                    orientation="vertical"
                    variant="scrollable"
                    value={value}
                    onChange={handleChange}
                    aria-label="Vertical tabs example"
                    className={classes.tabs}
                >
                {profileInfo.map((match, i) => (
                    <Tab style={{textTransform: 'none'}} label={match.firstName + " " + match.lastName} {...a11yProps(i)} />
                ))} 
                </Tabs> 
                {profileInfo.map((match, i) => (
                    <TabPanel value={value} index={i}>
                        <div className={classes.root}>
                        <Paper className={classes.paper}>
                            <Grid container>
                                <Grid item xs={12} sm={3} >
                                    <AccountCircle style={{fontSize: 300}}/>
                                    <Grid item xs={12} style={{marginLeft: "5%"}}>
                                        <div style={{display: "flex", flexDirection:"row"}}>
                                            <SchoolRounded />
                                            <Typography style={{marginLeft: "5%"}}>
                                                {match.yearOfStudy} Year {match.course}
                                            </Typography>
                                        </div>
                                    </Grid>
                                    <Grid item xs={12} style={{marginLeft: "5%"}}>
                                        <div style={{display: "flex", flexDirection:"row"}}>
                                            <EmailRounded />
                                            <Typography style={{marginLeft: "5%"}}>
                                                {match.email}
                                            </Typography>
                                        </div>
                                    </Grid>
                                </Grid>
                                <Grid item xs={12} sm={9}>
                                    { !confirmed &&
                                    <div>
                                        <Button
                                            variant="contained"
                                            size="large"
                                            style={{color: '#FFFFFF', backgroundColor: '#F1960D', textTransform: 'none', marginRight: "10%"}}
                                            onClick={handleClickConfirm}
                                        >
                                        Confirm Match
                                        </Button>
                                        <Button
                                            variant="contained"
                                            size="large"
                                            style={{color: '#FFFFFF', backgroundColor: '#F1960D', textTransform: 'none',}}
                                            onClick={handleClickDecline}
                                        >
                                        Decline Match
                                        </Button>
                                        
                                    </div>
                                    }
                                    <Typography variant="h3" style={{marginBottom: "5%"}}>
                                        {match.firstName} {match.lastName}
                                    </Typography>
                                    {/* dialogue pops up when user clicks decline button */}
                                    <Dialog open={openDecline} onClose={handleClose} aria-labelledby="form-dialog-title">
                                        <DialogTitle id="form-dialog-title">Decline Match</DialogTitle>
                                        <DialogContent>
                                        <DialogContentText>
                                            Please enter the reason why you do not want to be match with {match.firstName} {match.lastName}
                                        </DialogContentText>
                                        <TextField
                                            autoFocus
                                            margin="dense"
                                            id="reason"
                                            label="Reason"
                                            fullWidth
                                        />
                                        </DialogContent>
                                        <DialogActions>
                                        <Button onClick={handleClose} color="primary">
                                            Cancel
                                        </Button>
                                        <Button onClick={handleCloseDecline} color="primary">
                                            Submit
                                        </Button>
                                        </DialogActions>
                                    </Dialog>

                                    {/* dialogue pops up when user clicks confirm button */}
                                    <Dialog open={openConfirm} onClose={handleCloseC} aria-labelledby="form-dialog-title">
                                        <DialogTitle id="form-dialog-title">Decline Match</DialogTitle>
                                        <DialogContent>
                                        <DialogContentText>
                                            Are you sure you want to be matched with {match.firstName} {match.lastName}
                                        </DialogContentText>
                                        </DialogContent>
                                        <DialogActions>
                                        <Button onClick={handleCloseC} color="primary">
                                            Cancel
                                        </Button>
                                        <Button onClick={handleCloseConfirm} color="primary">
                                            Yes
                                        </Button>
                                        </DialogActions>
                                    </Dialog>

                                    <Typography variant="h5" style={{marginBottom: "2%"}}>Personal Information:</Typography>
                                    <Typography variant="h6" style={{color: "#C4C4C4"}}>Summary:</Typography>
                                        <Typography style={{marginBottom: "2%"}}>
                                            {match.summary}
                                        </Typography>
                                    { match.placement == "No" &&
                                        <>
                                            <Typography variant="h6" style={{color: "#C4C4C4"}}>Placement Ecperience:</Typography>
                                            <Typography style={{marginBottom: "2%"}}>
                                                {match.placement}
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
                    </TabPanel>
                ))}
            </div>}

            { typeof profileInfo.firstName === 'string' &&
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
                                { !confirmed &&
                                    <div>
                                        <Button
                                            variant="contained"
                                            size="large"
                                            style={{color: '#FFFFFF', backgroundColor: '#F1960D', textTransform: 'none', marginRight: "10%"}}
                                            onClick={handleClickConfirm}
                                        >
                                        Confirm Match
                                        </Button>
                                        <Button
                                            variant="contained"
                                            size="large"
                                            style={{color: '#FFFFFF', backgroundColor: '#F1960D', textTransform: 'none',}}
                                            onClick={handleClickDecline}
                                        >
                                        Decline Match
                                        </Button>  
                                    </div>
                                }
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
            }
        </React.Fragment>
    )
}