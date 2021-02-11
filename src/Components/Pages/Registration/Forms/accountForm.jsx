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
        {/* <Grid item xs={12} sm={6}>
          <SelectField
            name={city.name}
            label={city.label}
            data={cities}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <SelectField
            name={state.name}
            label={state.label}
            data={states}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <InputField name={zipcode.name} label={zipcode.label} fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <SelectField
            name={country.name}
            label={country.label}
            data={countries}
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <CheckboxField
            name={useAddressForPaymentDetails.name}
            label={useAddressForPaymentDetails.label}
          />
        </Grid> */}
      </Grid>
    </React.Fragment>
  );
}