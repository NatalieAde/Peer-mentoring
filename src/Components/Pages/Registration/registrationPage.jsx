import React, { useState } from 'react';
import {
  Stepper,
  Step,
  StepLabel,
  StepConnector,
  Button,
  Typography,
  CircularProgress
} from '@material-ui/core';
import Check from "@material-ui/icons/Check";
import clsx from "clsx";
import { Formik, Form } from 'formik';
import axios from 'axios';

import MaterialLayout from '../../Layout/layout';

import AccountForm from './Forms/accountForm';
import PersonalInfoForm from './Forms/personalInfoForm';
import MentorSetUpForm from './Forms/mentorSetUpForm';
import ReviewForms from './ReviewForm';
import RegistrationSuccess from './RegistrationSuccess';

import validationSchema from './FormModel/validation';
import formModel from './FormModel/formModel';
import formInitialValues from './FormModel/formInitialValues';

import useStyles from './styles';
import { makeStyles, withStyles } from "@material-ui/core/styles";

//update forms fields to match the required forms.
const steps = ['Account Details', 'Mentoring Set Up', 'Personal Details', 'Review your details'];
const { formId, formField } = formModel;

const StepperStyle = withStyles({
  alternativeLabel: {
    top: 22
  },
  active: {
    "& $line": {
      backgroundColor:
        "#F1960D"
    }
  },
  completed: {
    "& $line": {
      backgroundColor:
        "#F1960D"
    }
  },
  line: {
    height: 3,
    border: 0,
    backgroundColor: "#eaeaf0",
    borderRadius: 1
  }
})(StepConnector);

const stepStyle = makeStyles({
  root: {
    backgroundColor: "#F1960D",
    zIndex: 1,
    color: "#fff",
    width: 50,
    height: 50,
    display: "flex",
    borderRadius: "50%",
    justifyContent: "center",
    alignItems: "center"
  }
});

function _renderStepContent(step) {
  switch (step) {
    case 0:
      return <AccountForm formField={formField} />;
    case 1:
      return <MentorSetUpForm formField={formField} />;
    case 2:
      return <PersonalInfoForm formField={formField} />;
    case 3:
      return <ReviewForms />;
    default:
      return <div>Not Found</div>;
  }
}

export default function RegistrationPage() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);
  const currentValidationSchema = validationSchema[activeStep];
  const isLastStep = activeStep === steps.length - 1;

  function _sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  async function _submitForm(values, actions) {
    await _sleep(1000);
     //everything stored in 'registered' is posted to the endpoint(backend)
     axios.post('http://localhost:5000/app/signup', values)
      .then(response => console.log(response.data))
     alert(JSON.stringify(values, null, 2));
    actions.setSubmitting(false);

    setActiveStep(activeStep + 1);
  }

  function _handleSubmit(values, actions) {
    if (isLastStep) {
    _submitForm(values, actions);
    console.log(values)
    } else {
      setActiveStep(activeStep + 1);
      actions.setTouched({});
      actions.setSubmitting(false);
    }
  }

  function _handleBack() {
    setActiveStep(activeStep - 1);
  }

  function ColorlibStepIcon(props) {
    const classes = stepStyle();
    const { active, completed } = props;
    return (
      <div
        className={clsx(classes.root, {
          [classes.active]: active,
          [classes.completed]: completed
        })}
      >
        {completed ? <Check /> : <div className={classes.circle}>Icon</div>}
      </div>
    );
};

  return (
    <React.Fragment>
      <MaterialLayout>
        <Typography component="h1" variant="h4" align="center">
          Registration
        </Typography>
        <Stepper alternativeLabel activeStep={activeStep} connector={<StepperStyle />}>
          {steps.map(label => (
            <Step key={label}>
              <StepLabel StepIconComponent={ColorlibStepIcon}>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        <React.Fragment>
          {activeStep === steps.length ? (
            <RegistrationSuccess />
          ) : (
            <Formik
              initialValues={formInitialValues}
              validationSchema={currentValidationSchema}
              onSubmit={_handleSubmit}
            >
              {({ isSubmitting }) => (
                <Form id={formId}>
                  {_renderStepContent(activeStep)}

                  <div className={classes.buttons}>
                    {activeStep !== 0 && (
                      <Button onClick={_handleBack} className={classes.button}>
                        Back
                      </Button>
                    )}
                    <div className={classes.wrapper}>
                      <Button
                        disabled={isSubmitting}
                        type="submit"
                        variant="contained"
                        color="primary"
                        className={classes.button}
                      >
                        {isLastStep ? 'Confirm Registration' : 'Next'}
                      </Button>
                      {isSubmitting && (
                        <CircularProgress
                          size={24}
                          className={classes.buttonProgress}
                        />
                      )}
                    </div>
                  </div>
                </Form>
              )}
            </Formik>
          )}
        </React.Fragment>
      </MaterialLayout>
    </React.Fragment>
  );
}