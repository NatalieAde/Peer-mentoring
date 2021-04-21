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
  Yup.object().shape({
    [firstName.name]: Yup.string().required(`${firstName.requiredErrorMsg}`),
    [lastName.name]: Yup.string().required(`${lastName.requiredErrorMsg}`),
    [studentNo.name]: Yup.string().required(`${studentNo.requiredErrorMsg}`).test('len', `${studentNo.invalidErrorMsg}`, val => val && val.length === 7),
    [email.name]: Yup.string().required(`${email.requiredErrorMsg}`).matches(/^(\w+(\.-)?\w+)*@+([aston])+([\.])+([ac])+([\.])+([uk])+$/ , `${email.invalidErrorMsg}`),
    [password.name]: Yup.string().required(`${password.requiredErrorMsg}`),
    [confirmPassword.name]: Yup.string().required(`${confirmPassword.requiredErrorMsg}`).required(`${confirmPassword.invalidErrorMsg}`).oneOf([Yup.ref('password'), null], "Passwords don't match."),
    // [course.name]: Yup.string().required(`${course.requiredErrorMsg}`),
    // [role.name]: Yup.string().required(`${role.requiredErrorMsg}`),
    // [matchingCriteria.name]: Yup.string().required(`${matchingCriteria.requiredErrorMsg}`),
    // [gender.name]: Yup.string().required(`${gender.requiredErrorMsg}`),
  })
];