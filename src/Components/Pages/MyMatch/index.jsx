import React from 'react';
import { Typography, CircularProgress } from '@material-ui/core';
import MaterialLayout from '../../Layout/layout';
import Skeleton from '@material-ui/lab/Skeleton';


export default function MyMatchPage() {
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
                </div>
            </MaterialLayout>
        </React.Fragment>
    )
}