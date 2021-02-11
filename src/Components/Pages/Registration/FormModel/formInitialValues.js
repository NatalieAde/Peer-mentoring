import FormModel from './formModel';
const {
  formField: {
    firstName,
    lastName,
    studentNo,
    email,
    password,
    confirmPassword,
    course,
    yearOfStudy,
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
    matchingCriteria
  }
} = FormModel;

export default {
  [firstName.name]: '',
  [lastName.name]: '',
  [studentNo.name]: '',
  [email.name]: '',
  [password.name]: '',
  [confirmPassword.name]: '',
  [course.name]: '',
  [yearOfStudy.name]: '',
  [placement.name]: '',
  [summary.name]: '',
  [experience.name]: '',
  [interests.name]: '',
  [gender.name]: '',
  [age.name]: '',
  [ethnicity.name]: '',
  [nationality.name]: '',
  [disability.name]: '',
  [residency.name]: '',
  [role.name]: '',
  [imageURL.name]: '',
  [numOfMentees.name]: '',
  [matchingCriteria.name]: ''
};