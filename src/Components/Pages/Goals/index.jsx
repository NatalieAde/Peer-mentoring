import React, {useState, useEffect} from 'react';
import { 
    Typography,
    TextField,
    Button,
    Grid,
    Checkbox,
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
import useStyle from './styles';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import HomeImg from '../../../Images/goalsImg.svg';
import axios from 'axios';

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

export default function GoalsPage() {
    const classes = useStyle();
    const [value, setValue] = useState(0);
    const [profileInfo, setProfileInfo] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const [confirmed, setConfirmed] = useState();
    const [openDecline, setOpenDecline] = useState(false);
    const [open, setOpen] = useState(false);
    const [goals, setGoals] = useState([
        
    ]);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleAddButtonClick = () => {
        const newGoal = {
            goalName: inputValue,
            isSelected: false,
        };
    
        const newGoals = [...goals, newGoal];
    
        setGoals(newGoals);
        setInputValue('');
    };


    // const handleClickConfirm = () => {
    //     setOpenConfirm(true);
    // };
    
    function handleClickOpen(event, item) {
        event.persist();
        setGoals(item);
        setOpen(true);
      }


    const handleClose = () => {
        setOpen(false);
    };

    function handleRemove(goal) {
        const newGoals = goals.filter((item) => item.goalName !== goal);
     
        setGoals(newGoals);
    }

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

    return (
        <React.Fragment>
            <div style={{backgroundColor: '#EC6D0A', marginTop: '-1.5%', marginBottom: '2%'}}>
               <Typography style={{color: '#FFFFFF', fontSize: '55px'}} align={'center'}>Goals</Typography> 
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
                    <TabPanel value={value} index={i} style={{width:"100%"}}>
                        <div className={classes.root}>
                            <Typography variant='h6' align={'center'} style={{color:"black", marginBottom:"3%"}}>{match.firstName}'s Goals</Typography>
                            <Grid container spacing={3} >
                                <Grid item xs={12} sm={11}>
                                    <TextField 
                                        onChange={(event) => setInputValue(event.target.value)}
                                        variant="outlined"
                                        style={{backgroundColor: '#FFFFFF', marginLeft: '1%'}}
                                        value={inputValue}
                                        fullWidth
                                    />
                                </Grid>
                                <Grid item xs={12} sm={1}>
                                    <Button 
                                        variant="contained"
                                        style={{backgroundColor: '#83008F', color: '#FFFFFF', textTransform: 'none', fontSize: 20}}
                                        onClick={() => handleAddButtonClick()}
                                    >
                                        Add
                                    </Button>
                                </Grid>
                            </Grid>

                            {goals.length == 0 &&
                                <div style={{marginTop: "5%"}}>
                                    <img src={HomeImg} alt="Logo" style={{width: "60%", height: "50%"}} />
                                    <Typography variant='h6' align={'center'}>Set your first goal.</Typography>
                                </div>
                            }
                            <div style={{margin: 'auto', width: '100%'}}>
                                {goals.map((item, index) => (
                                    <div style={{marginTop: '2%'}}>
                                        <Grid container spacing={3}  style={{backgroundColor: '#FAF4FB', width: '100%', borderRadius: 10}}>
                                            <Grid item xs={12} sm={2}>
                                                <Checkbox style={{color:'#83008F'}}/>
                                            </Grid>
                                            <Grid item xs={12} sm={7}>
                                                <Typography style={{color: '#000000', fontSize: '30px'}}>{item.goalName}</Typography>
                                            </Grid>
                                            <Grid item xs={12} sm={1}>
                                                    <Button
                                                    variant="contained"
                                                    size="large"
                                                    style={{color: 'black', backgroundColor: '#FEF3EB', textTransform: 'none', marginRight: "10%"}}
                                                    onClick={event => handleClickOpen(event, item)}
                                                    >
                                                        Details
                                                    </Button>
                                            </Grid>
                                            <Grid item xs={12} sm={1}>
                                                <Button
                                                    variant="contained"
                                                    size="large"
                                                    style={{color: 'black', backgroundColor: '#FFC971', textTransform: 'none', marginRight: "10%"}}
                                                    onClick={() => handleRemove(item.goalName)}
                                                    startIcon={<HighlightOffIcon/>}
                                                >
                                                    Delete
                                                </Button>
                                                    
                                            </Grid>
                                        </Grid>
                                    </div>
                                ))}
                            </div>
                        </div> 

                        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                            <DialogTitle id="form-dialog-title">Decline Match</DialogTitle>
                            <DialogContent>
                                <DialogContentText>
                                    Are you sure you want to be matched with {match.firstName} {match.lastName}
                                </DialogContentText>
                            </DialogContent>
                            <DialogActions>
                                <Button onClick={handleClose} color="primary">
                                    Done
                                </Button>
                            </DialogActions>
                        </Dialog>
                    </TabPanel>
                ))}
            </div>}

            { typeof profileInfo.firstName === 'string' &&
            <>
                <div className={classes.root}>
                    <Typography variant='h6' align={'center'} style={{color:"black", marginBottom:"3%"}}>{profileInfo.firstName}'s Goals</Typography>
                    <Grid container spacing={3} >
                        <Grid item xs={12} sm={11}>
                            <TextField 
                                onChange={(event) => setInputValue(event.target.value)}
                                variant="outlined"
                                style={{backgroundColor: '#FFFFFF', marginLeft: '1%'}}
                                value={inputValue}
                                fullWidth
                            />
                        </Grid>
                        <Grid item xs={12} sm={1}>
                            <Button 
                                variant="contained"
                                style={{backgroundColor: '#83008F', color: '#FFFFFF', textTransform: 'none', fontSize: 20}}
                                onClick={() => handleAddButtonClick()}
                            >
                                Add
                            </Button>
                        </Grid>
                    </Grid>

                    {goals.length == 0 &&
                        <div style={{marginTop: "5%"}}>
                            <div style={{display:'flex', alignItems:'center', justifyContent:'center'}}>
                                <img src={HomeImg} alt="Logo" style={{width: "60%", height: "50%"}} />
                            </div>
                            <div>
                                <Typography style={{color:'black'}} variant={'h4'} align={'center'}>Start tracking goals with your match.</Typography>
                            </div>
                            
                        </div>
                    }
                    <div style={{margin: 'auto', width: '100%'}}>
                        {goals.map((item, index) => (
                            <>
                            <div style={{marginTop: '2%'}}>
                                <Grid container spacing={3}  style={{backgroundColor: '#FAF4FB', width: '100%', borderRadius: 10, display:'flex', alignItems:'center', justifyContent:'center'}}>
                                    <Grid item xs={12} sm={2}>
                                        <Checkbox style={{color:'#83008F'}}/>
                                    </Grid>
                                    <Grid item xs={12} sm={7}>
                                        <Typography style={{color: '#000000', fontSize: '30px'}}>{item.goalName}</Typography>
                                    </Grid>
                                    <Grid item xs={12} sm={1}>
                                            <Button
                                            variant="contained"
                                            size="large"
                                            style={{color: 'black', backgroundColor: '#FEF3EB', textTransform: 'none', marginRight: "10%"}}
                                            onClick={event => handleClickOpen(event, item)}
                                            >
                                                Details
                                            </Button>
                                    </Grid>
                                    <Grid item xs={12} sm={1}>
                                        <Button
                                            variant="contained"
                                            size="large"
                                            style={{color: 'black', backgroundColor: '#FFC971', textTransform: 'none', marginRight: "10%"}}
                                            onClick={() => handleRemove(item.goalName)}
                                            startIcon={<HighlightOffIcon/>}
                                        >
                                            Delete
                                        </Button>
                                            
                                    </Grid>
                                </Grid>
                            </div>
                            </>
                        ))}
                    </div>
                </div> 

                {open && goals && (
                <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                        <DialogTitle id="form-dialog-title">{goals.goalName}</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            Are you sure you want to be matched with {profileInfo.firstName} {profileInfo.lastName}
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose} color="primary">
                            Done
                        </Button>
                    </DialogActions>
                </Dialog>
                )}
            </>
            }
           
        </React.Fragment>
    )
}