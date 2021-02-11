import React from 'react';
import moment from 'moment';
import { Typography, Grid } from '@material-ui/core';
import useStyles from './styles';

function AccountDetails(props) {
  const { formValues } = props;
  const classes = useStyles();
  const { firstName, lastName, studentNo, email } = formValues;
  return (
    <Grid item xs={12} sm={6}>
      <Typography variant="h6" gutterBottom className={classes.title}>
        Account Details
      </Typography>
      <Typography gutterBottom>{`${firstName} ${lastName}`}</Typography>
      <Typography gutterBottom>{`${studentNo}`}</Typography>
      <Typography gutterBottom>{`${email}`}</Typography>
    </Grid>
  );
}

export default AccountDetails;