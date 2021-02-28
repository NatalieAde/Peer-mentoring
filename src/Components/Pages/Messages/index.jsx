import React from 'react';
import { Typography } from '@material-ui/core';

export default function MessagesPage() {
    return (
        <React.Fragment>
            <div style={{backgroundColor: '#EC6D0A', marginTop: '-1.5%', marginBottom: '2%'}}>
               <Typography style={{color: '#FFFFFF', fontSize: '55px'}} align={'center'}>Messages</Typography> 
            </div>
        </React.Fragment>
    )
}