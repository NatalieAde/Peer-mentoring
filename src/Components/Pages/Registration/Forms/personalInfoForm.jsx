import React, { useState } from 'react';
import { Grid, Typography } from '@material-ui/core';
import { InputField, SelectField } from '../../../Form';

export default function PersonalInfoForm(props) {
  // const [interests, setInterests] = useState(['']);
  const {
    formField: {
      course,
      yearOfStudy,
      summary,
      interests,
      placement,
      experience,
      residency,
      gender,
      age,
      ethnicity,
      nationality,
      disability,
    }
  } = props;


  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Mentor Set Up
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <SelectField
              name={course.name}
              label={course.label}
              data={course.options}
              fullWidth
            />
        </Grid>
        <Grid item xs={12} sm={6}>
          <SelectField
              name={yearOfStudy.name}
              label={yearOfStudy.label}
              data={yearOfStudy.options}
              fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <SelectField
              name={placement.name}
              label={placement.label}
              data={placement.options}
              fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <InputField name={summary.name} label={summary.label} fullWidth />
        </Grid>
        <Grid item xs={12}>
          <InputField name={interests.name} label={interests.label} fullWidth />
        </Grid>
        <Grid item xs={12}>
          <InputField name={experience.name} label={experience.label} fullWidth />
        </Grid>
        <Grid item xs={12}>
          <SelectField
              name={residency.name}
              label={residency.label}
              data={residency.options}
              fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <SelectField
              name={gender.name}
              label={gender.label}
              data={gender.options}
              fullWidth
            />
        </Grid>
        <Grid item xs={12} sm={6}>
          <InputField name={age.name} label={age.label} fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <InputField name={ethnicity.name} label={ethnicity.label} fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <InputField name={nationality.name} label={nationality.label} fullWidth />
        </Grid>
        <Grid item xs={12}>
        <SelectField
            name={disability.name}
            label={disability.label}
            data={disability.options}
            fullWidth
          />
          </Grid>
      </Grid>
    </React.Fragment>
  );
}