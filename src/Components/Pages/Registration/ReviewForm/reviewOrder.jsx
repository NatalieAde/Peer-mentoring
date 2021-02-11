import React from 'react';
import { useFormikContext } from 'formik';
import { Typography, Grid } from '@material-ui/core';
import PersonalDetails from './personalDetails';
import MentorSetUpDetails from './mentorSetUpDetails';
import AccountDetails from './accountDetails';

export default function ReviewOrder() {
  const { values: formValues } = useFormikContext();
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Registration Summaryyy
      </Typography>
       <AccountDetails formValues={formValues}/>
        <MentorSetUpDetails formValues={formValues} />
        <PersonalDetails formValues={formValues} />
    </React.Fragment>
  );
}