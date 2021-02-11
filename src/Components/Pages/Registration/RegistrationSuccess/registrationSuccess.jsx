
import React from 'react';
import { Typography } from '@material-ui/core';

function RegistrationSuccess() {
  return (
    <React.Fragment>
      <Typography variant="h5" gutterBottom>
        Thank you for Registering.
      </Typography>
      <Typography variant="subtitle1">
        Your application is now being reviewed, and we will match you.
        In the mean time, head to the resources section to complete your training.
      </Typography>
    </React.Fragment>
  );
}

export default RegistrationSuccess;