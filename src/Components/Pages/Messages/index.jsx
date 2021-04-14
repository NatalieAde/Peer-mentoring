import React, {useState, useEffect, useRef} from 'react';
import { 
    Typography,
    TextField,
    Button,
    Grid
} from '@material-ui/core';
import {
    AccountCircle,
    TrackChanges,
    EventAvailable,
} from '@material-ui/icons';
import useStyles from './styles';
import useChat from './useChat';
import axios from 'axios';


export default function MessagesPage() {
    const classes = useStyles();
    // const { roomId } = props.match.params; // Gets roomId from URL
    const { messages, sendMessage } = useChat(); // Creates a websocket and manages messaging
    const [sentMessage, setSentMessage] = useState("");
    const [newMessage, setNewMessage] = useState(""); // Message to be sent
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
    const myRef = useRef(null)

    const executeScroll = () => myRef.current.scrollIntoView()   

    async function _saveMessage(values) {
        axios.post('http://localhost:5000/app/saveMessage', values)
        .then(response => console.log(response.data))
    }

    const handleNewMessageChange = (event) => {
        setNewMessage(event.target.value);
        // _saveMessage(event.target.value);
    };
    
    const handleSendMessage = () => {
        const msgOwnerId = JSON.parse(localStorage.getItem('users')).id;
        const msgRecieverId = JSON.parse(localStorage.getItem('matchInfo')).data._id;
        sendMessage(newMessage);
        _saveMessage({
            from: msgOwnerId,
            to:msgRecieverId,
            message: newMessage
        });
        setNewMessage("");
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
                localStorage.setItem("matchInfo", JSON.stringify(res));                
                // console.log(JSON.parse(localStorage.getItem('matchInfo')).data._id);    
            })
            .catch(err=>console.log(err))
        }

    axios.get("http://localhost:5000/app/getMessages/"+id,{
      headers: {
          "content-type": "application/json"
      }
    }).then(res=>{
        const a = JSON.parse(JSON.stringify(res)).data;
        a.map((message, i) => {
          console.log(message);
          sendMessage([message.message])
         
        })
        console.log(messages)
    })
    }, [])

    // console.log(newMessage);

    return (
        <React.Fragment>
            <div style={{backgroundColor: '#EC6D0A', marginTop: '-1.5%', marginBottom: '2%'}}>
               <Typography style={{color: '#FFFFFF', fontSize: '55px'}} align={'center'}>Messages</Typography> 
            </div>

            

            <Grid container style={{margin: '1%'}}>
                {/* <div className={classes.sectionDesktop}> */}
                    <Grid item xs={12} sm={3} className={classes.sectionDesktop}>
                        <Typography variant='h6' align={'center'}>
                            Your Match
                        </Typography>
                        <AccountCircle style={{fontSize: 250}}/>

                        {/* TODO: set match infor here */}
                        {/* {JSON.parse(localStorage.getItem('userInfo')).id = JSON.parse(localStorage.getItem('users')).id && */}
                            <Typography variant='h4' align={'center'} style={{marginBottom: '2%'}}>
                                {profileInfo.firstName} {profileInfo.lastName}
                            </Typography>
                        {/* } */}
                        
                        <div style={{marginBottom: '5%'}}>
                            <Button
                                href="/mymatch"
                                variant="contained"
                                size="large"
                                style={{color: '#000000', backgroundColor: '#FFFFFF'}}
                                startIcon={<AccountCircle />}
                            >
                                View Profile
                            </Button>
                        </div>
                        <div style={{marginBottom: '5%'}}>
                            <Button
                                href="/calendar"
                                variant="contained"
                                size="large"
                                style={{color: '#000000', backgroundColor: '#FFFFFF'}}
                                startIcon={<EventAvailable />}
                            >  
                                Schedule Meeting
                            </Button>
                        </div>
                        <div style={{marginBottom: '5%'}}>
                            <Button
                                href="/goals"
                                variant="contained"
                                size="large"
                                style={{color: '#000000', backgroundColor: '#FFFFFF'}}
                                startIcon={<TrackChanges />}
                            >
                                Goals
                            </Button> 
                        </div>
                    </Grid>
                {/* </div> */}

                <Grid className={classes.sectionMobile}>
                    <Grid item xs={2}>
                        <Typography style={{fontSize: 10}}>Your Match</Typography>
                        <AccountCircle style={{fontSize: 40}} />
                    </Grid>
                    <Grid item xs={4}>
                        {JSON.parse(localStorage.getItem('userInfo')).id = JSON.parse(localStorage.getItem('users')).id &&
                            <Typography variant='h5' align={'left'} style={{marginTop: '8%'}}>
                               {profileInfo.firstName} {profileInfo.lastName}
                                {/* {JSON.parse(localStorage.getItem('userInfo')).firstName} {JSON.parse(localStorage.getItem('userInfo')).lastName} */}
                            </Typography>
                        }
                    </Grid>
                    <Grid item xs={3}>
                        <Button
                            href="/goals"
                            variant="contained"
                            size="small"
                            style={{color: '#000000', backgroundColor: '#FFFFFF', marginTop: '10%', textTransform: 'none'}}
                            startIcon={<EventAvailable />}
                        >  
                            Schedule
                        </Button> 
                    </Grid>
                    <Grid item xs={3}>
                        <div>
                            <Button
                            href="/goals"
                            variant="contained"
                            size="small"
                            style={{color: '#000000', backgroundColor: '#FFFFFF', marginTop: '10%', textTransform: 'none'}}
                            startIcon={<TrackChanges />}
                        >
                            Goals
                        </Button> 
                        </div>
                        
                    </Grid>
                    
                </Grid>

                <Grid item xs={12} sm={8} style={{marginLeft: '28%', flexDirection:"row", alignSelf:"flex-start"}} >
                    {/* <div ref={myRef}> */}
                        <ol style={{listStyleType: 'none', padding: 0,}}>
                        {messages.map((message, i) => (
                            <li
                            key={i}
                            className={`classes.messageItem ${
                                message.ownedByCurrentUser ? classes.myMessage : classes.receivedMessage
                            }`}
                            >
                            {message.body}
                            </li>
                        ))}
                        </ol>
                    {/* </div> */}

                    <Grid container style={{position:'fixed', bottom:10, width:'75%' }}>
                        <Grid item xs={10}>
                            <TextField
                                id="outlined-basic"                                    
                                variant="outlined"
                                color="primary"
                                size="small"
                                value={newMessage}
                                onChange={handleNewMessageChange}
                                placeholder='Type message here'
                                fullWidth
                                style={{height: "10px"}}
                            />
                        </Grid>
                        <Grid item xs={2}>
                            <Button
                                variant="contained"
                                onClick={handleSendMessage}
                                size="large"
                                style={{ color: '#FFFFFF', backgroundColor: '#83008F'}}
                            >
                                Send
                            </Button>
                        </Grid>
                        
                       
                    </Grid>
                </Grid>
            </Grid>

            
        </React.Fragment>
    )
}