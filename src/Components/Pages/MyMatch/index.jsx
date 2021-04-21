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
    DialogTitle,
    Snackbar,
    CircularProgress 
} from '@material-ui/core';
import {
    AccountCircle,
    EmailRounded,
    SchoolRounded,
    VerticalAlignTop,
} from '@material-ui/icons';
import useStyle from './styles';
import axios from 'axios';
import MuiAlert from '@material-ui/lab/Alert';
import MaterialLayout from '../../../Components/Layout/layout';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

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
    const [declineReason, setDeclineReason] = useState('');
    const [confirmation, setConfirmation] = useState('');
    const [matchName, setMatchName] = useState('');
    const [open, setOpen] = useState(false);

    const handleClick = () => {
      setOpen(true);
    };

    const handleClickDec = () => {
        setOpen(true);
      };
  
    const handleCloseAlert = (event, reason) => {
      if (reason === 'clickaway') {
        return;
      }
  
      setOpen(false);
    };

    const handleChange = (event, newValue) => {
        setValue(newValue);
        setConfirmed(false);
    };

    const handleClickDecline = () => {
        setOpenDecline(true);
    };

    const handleClickConfirm = () => {
        setOpenConfirm(true);
    };
    
    function handleCloseDecline() {
        const id = JSON.parse(localStorage.getItem('users')).id;
        const confirmationInfo = {
            declineReason: matchName+": " +declineReason,
            isConfirmed: false
        };
        setOpenDecline(false);
        setConfirmed(true);
        setConfirmation('Declined');

        console.log(confirmationInfo);

        axios.put('http://localhost:5000/app/declineReason/'+id, confirmationInfo)
        .then( res => {
          alert(res.data);
         }   
        )
        .catch(err => {
          console.log(err.response);
        //   alert('An error occurred! Try submitting the form again.');
        }); 
        handleClickDec();
    };

    //TODO: FIGURE OUT CONFIRM LOGIC
    const handleCloseConfirm = () => {
        const id = JSON.parse(localStorage.getItem('users')).id;
        setOpenConfirm(false);
        setConfirmed(true);
        setConfirmation('Confirmed');

        axios.put('http://localhost:5000/app/confirmMatch/'+id, {isConfirmed: true})
        .then( res => {
          alert(res.data);
         }   
        )
        .catch(err => {
          console.log(err.response);
        //   alert('An error occurred! Try submitting the form again.');
        }); 
        handleClick();
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
                        placement: res.data.placement,
                        confirmedMatch: false,
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
                            placement: match.placement,
                            confirmedMatch: false,
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
            {/* {profileInfo.length === 0 &&
                <MaterialLayout>
                    <div style={{display: "flex", flexDirection: 'column', justifyContent: "center", alignItems: "center"}}>
                        <Typography>Status: We are searching for your match. Come back later.</Typography>
                        <CircularProgress
                            size={60}
                            style={{color: '#EC6D0A'}}
                        />
                    </div>
                </MaterialLayout>
            } */}

            {profileInfo.length > 1 &&
            <>
            <Typography variant={'h4'} align={'left'}>Your Matches</Typography>
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
                    <Tab style={{textTransform: 'none', fontSize:18}} label={match.firstName + " " + match.lastName} {...a11yProps(i)} />
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
                                    { !match.confirmedMatch &&
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
                                            onClick={() => {
                                                handleClickDecline()
                                                setMatchName(match.firstName)
                                            }}
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
                                            Please enter the reason why you do not want to be match with {match.firstName} {match.lastName}?
                                        </DialogContentText>
                                        <TextField
                                            onChange={(event) => setDeclineReason(event.target.value)}
                                            InputProps={{
                                                className: classes.MuiInputBase
                                            }}
                                            autoFocus
                                            margin="dense"
                                            id="reason"
                                            label="Reason"
                                            value={declineReason}
                                            fullWidth
                                        />
                                        </DialogContent>
                                        <DialogActions>
                                        <Button style={{textTransform: 'none', color:'#83008F'}} onClick={handleClose}>
                                            Cancel
                                        </Button>
                                        <Button 
                                            style={{textTransform: 'none', color:'#83008F'}}
                                            onClick={() => {
                                                handleCloseDecline();
                                                match.confirmedMatch = true;
                                            }} 
                                        >
                                            Submit
                                        </Button>
                                        </DialogActions>
                                    </Dialog>

                                    {/* dialogue pops up when user clicks confirm button */}
                                    <Dialog open={openConfirm} onClose={handleCloseC} aria-labelledby="form-dialog-title">
                                        <DialogTitle id="form-dialog-title">Confirm Match</DialogTitle>
                                        <DialogContent>
                                        <DialogContentText>
                                            Are you sure you want to be matched with {match.firstName} {match.lastName}
                                        </DialogContentText>
                                        </DialogContent>
                                        <DialogActions>
                                        <Button onClick={handleCloseC} style={{textTransform: 'none'}} color="primary">
                                            Cancel
                                        </Button>
                                        <Button 
                                            onClick={() => {
                                                handleCloseConfirm();
                                                match.confirmedMatch = true;
                                            }} 
                                            color="primary"
                                            style={{textTransform: 'none'}}
                                        >
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
                                            <Typography variant="h6" style={{color: "#C4C4C4"}}>Placement Experience:</Typography>
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
            </div>
            </>
            }

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
                                    {/* dialogue pops up when user clicks decline button */}
                                    <Dialog open={openDecline} onClose={handleClose} aria-labelledby="form-dialog-title">
                                        <DialogTitle id="form-dialog-title">Decline Match</DialogTitle>
                                        <DialogContent>
                                        <DialogContentText>
                                            Please enter the reason why you do not want to be match with {profileInfo.firstName} {profileInfo.lastName}?
                                        </DialogContentText>
                                        <TextField
                                            onChange={(event) => setDeclineReason(event.target.value)}
                                            InputProps={{
                                                className: classes.MuiInputBase
                                            }}
                                            autoFocus
                                            margin="dense"
                                            id="reason"
                                            label="Reason"
                                            value={declineReason}
                                            fullWidth
                                        />
                                        </DialogContent>
                                        <DialogActions>
                                        <Button style={{textTransform: 'none', color:'#83008F'}} onClick={handleClose}>
                                            Cancel
                                        </Button>
                                        <Button 
                                            style={{textTransform: 'none', color:'#83008F'}}
                                            onClick={() => {
                                                handleCloseDecline();
                                                profileInfo.confirmedMatch = true;
                                            }} 
                                        >
                                            Submit
                                        </Button>
                                        </DialogActions>
                                    </Dialog>

                                    {/* dialogue pops up when user clicks confirm button */}
                                    <Dialog open={openConfirm} onClose={handleCloseC} aria-labelledby="form-dialog-title">
                                        <DialogTitle id="form-dialog-title">Confirm Match</DialogTitle>
                                        <DialogContent>
                                        <DialogContentText>
                                            Are you sure you want to be matched with {profileInfo.firstName} {profileInfo.lastName}
                                        </DialogContentText>
                                        </DialogContent>
                                        <DialogActions>
                                        <Button onClick={handleCloseC} style={{textTransform: 'none'}} color="primary">
                                            Cancel
                                        </Button>
                                        <Button 
                                            onClick={() => {
                                                handleCloseConfirm();
                                                profileInfo.confirmedMatch = true;
                                            }} 
                                            color="primary"
                                            style={{textTransform: 'none'}}
                                        >
                                            Yes
                                        </Button>
                                        </DialogActions>
                                    </Dialog>
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
                                        <Typography variant="h6" style={{color: "#C4C4C4"}}>Placement Experience:</Typography>
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

            <Snackbar anchorOrigin={{vertical:'top', horizontal: 'center'}} open={open} autoHideDuration={2000} onClose={handleCloseAlert}>
            {confirmation === 'Confirmed' ? 
                <Alert onClose={handleClose} severity="success">
                    You have successfully Confirmed your match!
                </Alert>
                :
                <Alert onClose={handleClose} severity="info">
                    You have successfully Declined your match!
                </Alert>
            }
            </Snackbar>

            {profileInfo.length === 0 &&
                <MaterialLayout>
                    <div style={{display: "flex", flexDirection: 'column', justifyContent: "center", alignItems: "center"}}>
                        <Typography>Status: We are searching for your match. Come back later.</Typography>
                        <CircularProgress
                            size={60}
                            style={{color: '#EC6D0A'}}
                        />
                    </div>
                </MaterialLayout>
            }

        </React.Fragment>
    )
}