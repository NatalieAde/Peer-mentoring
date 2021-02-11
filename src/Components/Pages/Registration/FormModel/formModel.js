let course = [
  'Computer Science',
  'Computer Science with Business',
  'Computer Science with Maths',
  'Law',
  'Psychology',
  'Chemical Engineering',
  'Accounting'
];

let nationalities = [
  'Afghan',
  'Albanian',
  'Algerian',
  'American',
  'Andorran',
  'Angolan',
  'Anguillan',
  'Argentine',
  'Armenian',
  'Australian',
  'Beninese',
  'Bermudian',
  'New Zealander',
  'Nigerian',
  'Nigerien',
  'Sudanese',
  'Zimbabwea'
];

const genders = [
  {
    value: '1',
    label: 'Female'
  },
  {
    value: '2',
    label: 'Male'
  },
  {
    value: '3',
    label: 'Prefer not to say'
  }
];

const yesNo = [
  {
    value: '1',
    label: 'Yes'
  },
  {
    value: '2',
    label: 'No'
  },
  {
    value: '3',
    label: 'Prefer not to say'
  }
];

const roles = [
  {
    value: '1',
    label: 'Mentee'
  },
  {
    value: '2',
    label: 'Mentor'
  },
  {
    value: '3',
    label: 'Mentee and mentor'
  }
];

const criteria = [
  {
    value: '1',
    label: 'None'
  },
  {
    value: '2',
    label: 'Same gender'
  },
  {
    value: '3',
    label: 'Same Ethnicity'
  },
  {
    value: '4',
    label: 'Placement'
  }
];

const numOfMentees = [
  {
    value: '1',
    label: '1'
  },
  {
    value: '2',
    label: '2'
  },
  {
    value: '3',
    label: '3'
  }
];


export default {
    formId: 'form',
    formField: {
      firstName: {
        name: 'firstName',
        label: 'First name*',
        requiredErrorMsg: 'First name is required'
      },
      lastName: {
        name: 'lastName',
        label: 'Last name*',
        requiredErrorMsg: 'Last name is required'
      },
      studentNo: {
        name: 'studentNo',
        label: 'Student Number*',
        requiredErrorMsg: 'Student number is required',
        invalidErrorMsg: 'Student number is invalid (7 digits)'
      },
      email: {
        name: 'email',
        label: 'Email*',
        requiredErrorMsg: 'Email is required',
        invalidErrorMsg: 'Email is invalid, must be Aston University email (e.g. email@aston.ac.uk)'
      },
      password: {
        name: 'password',
        label: 'Password*',
        requiredErrorMsg: 'Password is required'
      },
      confirmPassword: {
        name: 'confirmPassword',
        label: 'Confirm Password*',
        requiredErrorMsg: 'Confirm password is required',
        invalidErrorMsg: 'Please confirm your password'
      },
      course: {
        name: 'course',
        label: 'Course/Program Title*',
        requiredErrorMsg: 'Please select one',
        options: course,
      },
      yearOfStudy: {
        name: 'yearOfStudy',
        label: 'Year of study*',
        requiredErrorMsg: 'Please select one',
        options: [1,2,3],
      },
      placement: {
        name: 'placement',
        label: 'Have you taken part in a placement',
        requiredErrorMsg: 'Please select an option',
        options: ['Yes', 'No']
      },
      summary: {
        name: 'summary',
        label: 'Summarise yourself. E.g. personality, achievents, passions...',
      },
      experience: {
        name: 'experience',
        label: 'Industry Experience',
      },
      interests: {
        name: 'interests',
        label: 'Interests and Hobbies',
      },
      gender: {
        name: 'gender',
        label: 'Gender',
        options: genders
      },
      age: {
        name: 'age',
        label: 'Age',
        requiredErrorMsg: 'Please enter a number'
      },
      ethnicity: {
        name: 'ethnicity',
        label: 'Ethnicity'
      },
      nationality: {
        name: 'nationality',
        label: 'Nationality',
        options: nationalities
      },
      disability: {
        name: 'disability',
        label: 'Do you consider youself to have a disability?',
        options: yesNo
      },
      residency: {
        name: 'residency',
        label: 'Where do you reside during the academic year? (e.g. on campus)',
        options: ['On campus', 'Off campus - Birmingham', 'Off campus - outside of Birmingham']
      },
      role: {
        name: 'role',
        label: 'I would like to be a:',
        options: roles
      },
      numOfMentees: {
        name: 'numOfMentees',
        label: 'How many mentees are you able to support?',
        options: numOfMentees
      },
      imageURL: {
        name: 'profileImage',
        label: 'Profile Image*',
        requiredErrorMsg: 'Confirm password is required',
        invalidErrorMsg: 'Please confirm your password'
      },
      trained: {
        name: 'trained',
        label: 'Trained',
        options: ['Yes', 'No']
      },
      applicationStatus: {
        name: 'applicationStatus',
        label: 'Application Status',
        options: []
      },
      matchingCriteria: {
        name: 'matchingCriteria',
        label: 'Criteria you would liked to be matched on:',
        options: criteria
      },
    }
  };