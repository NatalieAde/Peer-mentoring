import React from 'react';
import { Grid, Typography, Button } from '@material-ui/core';
import { InputField } from '../../../Form';
import useStyles from './styles';

export default function AccountForm(props) {
  const {
    formField: {
      firstName,
      lastName,
      studentNo,
      email,
      password,
      confirmPassword,
    }
  } = props;

  const classes = useStyles();

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Account Details
      </Typography>
      <Typography variant='caption' style={{color:"#83008F"}} gutterBottom>
        * = Required fields
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <InputField name={firstName.name} label={firstName.label} fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <InputField name={lastName.name} label={lastName.label} fullWidth />
        </Grid>
        <Grid item xs={12}>
          <InputField name={studentNo.name} label={studentNo.label} fullWidth />
        </Grid>
        <Grid item xs={12}>
          <InputField name={email.name} label={email.label} fullWidth />
        </Grid>
        <Grid item xs={12}>
          <InputField name={password.name} label={password.label} type="password" name="password" fullWidth />
        </Grid>
        <Grid item xs={12}>
          <InputField name={confirmPassword.name} label={confirmPassword.label} type="password" name="confirmPassword" fullWidth />
        </Grid>
        <Grid item xs={12}>
          <input
            accept="image/*"
            id="contained-button-file"
            multiple
            type="file"
            style={{display: 'none'}}
          />
          <label htmlFor="contained-button-file">
            <Button variant="contained" color="inherit" component="span" style={{textTransform: 'none'}} className={classes.root}>
              Upload profile photo
            </Button>
          </label>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}