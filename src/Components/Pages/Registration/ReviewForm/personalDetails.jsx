import React from 'react';
import { Typography, Grid } from '@material-ui/core';
import useStyles from './styles';


function ProductDetails(props) {
  const { formValues } = props;
  const classes = useStyles();
  const { 
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
  } = formValues;

  return (
    <Grid item xs={12} sm={6}>
      <Typography variant="h6" gutterBottom className={classes.title}>
        Personal Details
      </Typography>
      <Typography gutterBottom>{`${course} ${yearOfStudy}`}</Typography>
      <Typography gutterBottom>{`${placement}`}</Typography>
      <Typography gutterBottom>{`${experience}`}</Typography>
      <Typography gutterBottom>{`${summary}`}</Typography>
      <Typography gutterBottom>{`${interests}`}</Typography>
      <Typography gutterBottom>{`${residency}`}</Typography>
      <Typography gutterBottom>{`${gender}`}</Typography>
      <Typography gutterBottom>{`${age}`}</Typography>
      <Typography gutterBottom>{`${ethnicity}`}</Typography>
      <Typography gutterBottom>{`${nationality}`}</Typography>
      <Typography gutterBottom>{`${disability}`}</Typography>
    </Grid>
  );
}

export default ProductDetails;