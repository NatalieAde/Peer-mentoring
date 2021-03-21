import React, {useState, useEffect} from 'react';
import { Typography, TextField, Button, Grid, Checkbox } from '@material-ui/core';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import HomeImg from '../../../goalsImg.svg';

export default function GoalsPage() {
    const [inputValue, setInputValue] = useState('');
    const [goals, setGoals] = useState([
        { goalName: 'item 1', isSelected: false },
        { goalName: 'item 2', isSelected: true },
        { goalName: 'item 3', isSelected: false },
    ]);

    const handleAddButtonClick = () => {
        const newGoal = {
            goalName: inputValue,
            isSelected: false,
        };
    
        const newGoals = [...goals, newGoal];
    
        setGoals(newGoals);
        setInputValue('');
    };

    function handleRemove(goal) {
        const newGoals = goals.filter((item) => item.goalName !== goal);
     
        setGoals(newGoals);
    }

    return (
        <React.Fragment>
            <div style={{backgroundColor: '#EC6D0A', marginTop: '-1.5%', marginBottom: '2%'}}>
               <Typography style={{color: '#FFFFFF', fontSize: '55px'}} align={'center'}>Goals</Typography> 
            </div>
            
            <Grid container spacing={3} style={{backgroundColor: '#83008F'}}>
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
        <div style={{margin: 'auto', width: '70%'}}>
            {goals.map((item, index) => (
                <div style={{marginTop: '2%'}}>
                    <Grid container spacing={3}  style={{backgroundColor: '#F5EBF6', width: '60%'}}>
                        <Grid item xs={12} sm={2}>
                            <Checkbox style={{color:'#83008F'}}/>
                        </Grid>
                        <Grid item xs={12} sm={8}>
                            <Typography style={{color: '#000000', fontSize: '30px'}}>{item.goalName}</Typography>
                        </Grid>
                        <Grid item xs={12} sm={2}>
                            {/* <Button 
                            variant="contained"
                            style={{backgroundColor: '#83008F', color: '#FFFFFF', textTransform: 'none', fontSize: 20}}
                            onClick={() => handleRemove(item.goalName)} 
                            >*/}
                                <HighlightOffIcon onClick={() => handleRemove(item.goalName)}/>
                            {/* </Button> */}
                        </Grid>
                    </Grid>
                    
                    {/* <div onClick={() => toggleComplete(index)}> */}
                        {/* {item.isSelected ? ( */}
                            {/* <> */}
                                {/* <FontAwesomeIcon icon={faCheckCircle} /> */}
                                {/* <span className='completed'>{item.goalName}</span> */}
                            {/* </> */}
                        {/* ) : ( */}
                            {/* <> */}
                                {/* <FontAwesomeIcon icon={faCircle} /> */}
                                {/* <span>{item.goalName}</span> */}
                            {/* </> */}
                        {/* )} */}
                    {/* </div> */}
                </div>
            ))}
        </div>
        </React.Fragment>
    )
}