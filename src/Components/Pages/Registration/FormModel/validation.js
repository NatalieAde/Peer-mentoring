import * as Yup from 'yup';
// import moment from 'moment';
import registrationFormModel from './formModel';
const {
  formField: {
    firstName,
    lastName,
    studentNo,
    email,
    password,
    confirmPassword,
    course,
    placement,
    summary,
    experience,
    interests,
    gender,
    age,
    ethnicity,
    nationality,
    disability,
    residency,
    role,
    numOfMentees,
    imageURL,
    trained,
    applicationStatus,
    matchingCriteria
  }
} = registrationFormModel;


export default [
  //checks if the rquired fields are empty, if they are then an error message is shown.
  Yup.object().shape({
    [firstName.name]: Yup.string().required(`${firstName.requiredErrorMsg}`),
    [lastName.name]: Yup.string().required(`${lastName.requiredErrorMsg}`),
    //checks that the student number is the expected 9 digits, if not then an error message is shown
    [studentNo.name]: Yup.string().required(`${studentNo.requiredErrorMsg}`).test('len', `${studentNo.invalidErrorMsg}`, val => val && val.length === 9),
    // RegEx to check that the email extention is @aston.ac.uk, if not then an error massge is shown
    [email.name]: Yup.string().required(`${email.requiredErrorMsg}`)
      .matches(/^(\w+(\.-)?\w+)*@+([aston])+([\.])+([ac])+([\.])+([uk])+$/ , `${email.invalidErrorMsg}`),
    [password.name]: Yup.string().required(`${password.requiredErrorMsg}`),
    //checks if passwords match, if not then an error message is shown
    [confirmPassword.name]: Yup.string().required(`${confirmPassword.requiredErrorMsg}`)
      .required(`${confirmPassword.invalidErrorMsg}`).oneOf([Yup.ref('password'), null], "Passwords do not match."),
  })
];