import React from 'react';
import { Typography } from '@material-ui/core';
import MaterialLayout from '../../Layout/layout';
import Skeleton from '@material-ui/lab/Skeleton';


export default function MyMatchPage() {
    return (
        <React.Fragment>
            <div style={{backgroundColor: '#EC6D0A', marginTop: '-1.5%', marginBottom: '2%'}}>
               <Typography style={{color: '#FFFFFF', fontSize: '55px'}} align={'center'}>My Match</Typography> 
            </div>

            <MaterialLayout>
                <Typography>Status: Pending</Typography>
            </MaterialLayout>
        </React.Fragment>
    )
}