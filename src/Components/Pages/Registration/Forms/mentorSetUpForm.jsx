import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { SelectField} from '../../../Form';

export default function MentorSetUpForm(props) {
  const {
    formField: {
      role,
      numOfMentees,
      matchingCriteria
    }
  } = props;

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Personal Information
      </Typography>
      <Grid container spacing={3}>
      <Grid item xs={12}>
        <SelectField
            name={role.name}
            label={role.label}
            data={role.options}
            fullWidth
          />
        </Grid>
        
        <Grid item xs={12}>
          <SelectField
            name={numOfMentees.name}
            label={numOfMentees.label}
            data={numOfMentees.options}
            fullWidth
          />
        </Grid>
        
        <Grid item xs={12}>
          <SelectField
            name={matchingCriteria.name}
            label={matchingCriteria.label}
            data={matchingCriteria.options}
            fullWidth
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}