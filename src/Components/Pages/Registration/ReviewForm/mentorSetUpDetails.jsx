import React from 'react';
import { Typography, Grid } from '@material-ui/core';
import useStyles from './styles';

function PaymentDetails(props) {
  const { formValues } = props;
  const classes = useStyles();
  const { role, numOfMentees, matchingCriteria } = formValues;
  return (
    <Grid item xs={12} sm={6}>
      <Typography variant="h6" gutterBottom className={classes.title}>
        Matching Prerequisite
      </Typography>
      <Typography gutterBottom>{`${role}`}</Typography>
      <Typography gutterBottom>{`${numOfMentees}`}</Typography>
      <Typography gutterBottom>{`${matchingCriteria}`}</Typography>
    </Grid>
  );
}

export default PaymentDetails;