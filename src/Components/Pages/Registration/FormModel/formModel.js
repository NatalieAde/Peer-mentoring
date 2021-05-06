let course = [
  {
    value: "Computer Science",
    label: 'Computer Science'
  },
  {
    value: "Computer Science with Business",
    label: 'Computer Science with Business'
  },
  {
    value: "Computer Science with Maths",
    label:'Computer Science with Maths'
  },
  {
    value: "Law",
    label:'Law'
  },
  {
    value: "Psychology",
    label:'Psychology'
  },
  {
    value: "Chemical Engineering",
    label:'Chemical Engineering'
  },
  {
    value: "Accounting",
    label:'Accounting'
  },
  {
    value: "Marketing",
    label:'Marketing'
  },
  {
    value: "Business",
    label:'Business'
  },
  {
    value: "International Business",
    label:'International Business'
  },
  {
    value: "Economics",
    label:'Economics'
  }
];

let nationalities = [
  {
    value: 'Afghan',
    label: 'Afghan',
  },
  {
    value: 'Albanian',
    label: 'Albanian',
  },
  {
    value: 'Albanian',
    label: 'Albanian',
  },
  {
    value: 'Algerian',
    label: 'Algerian',
  },
  {
    value: 'American',
    label: 'American',
  },
  {
    value: 'Andorran',
    label: 'Andorran',
  },
  {
    value: 'Angolan',
    label: 'Angolan',
  },
  {
    value: 'Argentine',
    label: 'Argentine',
  },
  {
    value: 'Armenian',
    label: 'Armenian',
  },
  {
    value: 'Australian',
    label: 'Australian',
  },
  {
    value: 'British',
    label: 'British',
  },
  {
    value: 'Belgian',
    label: 'Belgian',
  },
  {
    value: 'Bangladeshi',
    label: 'Bangladeshi',
  },
  {
    value: 'Brazilian',
    label: 'Brazilian',
  },
  {
    value: 'Canadian',
    label: 'Canadian',
  },
  {
    value: 'Chinese',
    label: 'Chinese',
  },
  {
    value: 'Filipino',
    label: 'Filipino',
  },
  {
    value: 'French',
    label: 'French',
  },
  {
    value: 'Ghanaian',
    label: 'Ghanaian',
  },
  {
    value: 'Israeli',
    label: 'Israeli',
  },
  {
    value: 'Jamaican',
    label: 'Jamaican',
  },
  {
    value: 'New Zealander',
    label: 'New Zealander',
  },
  {
    value: 'Nigerian',
    label: 'Nigerian',
  },
  {
    value: 'Sudanese',
    label: 'Sudanese',
  },
  {
    value: 'Zimbabwea',
    label: 'Zimbabwea',
  },
];

const ethnicities = [
  {
    value: 'White English, Welsh, Scottish, Northern Irish or British',
    label: 'White English, Welsh, Scottish, Northern Irish or British'
  },
  {
    value: 'Irish',
    label: 'Irish'
  },
  {
    value: 'Any other White background',
    label: 'Any other White background'
  },
  {
    value: 'African',
    label: 'African'
  },
  {
    value: 'Caribbean',
    label: 'Caribbean'
  },
  {
    value: 'Black British',
    label: 'Black British'
  },
  {
    value: 'Any other Black, African or Caribbean background',
    label: 'Any other Black, African or Caribbean background'
  },
  {
    value: 'White and Black Caribbean',
    label: 'White and Black Caribbean'
  },
  {
    value: 'White and Black African',
    label: 'White and Black African'
  },
  {
    value: 'White and Asian',
    label: 'White and Asian'
  },
  {
    value: 'Any other Mixed or Multiple ethnic background',
    label: 'Any other Mixed or Multiple ethnic background'
  },
  {
    value: 'Indian',
    label: 'Indian'
  },
  {
    value: 'Pakistani',
    label: 'Pakistani'
  },
  {
    value: 'Bangladeshi',
    label: 'Bangladeshi'
  },
  {
    value: 'Chinese',
    label: 'Chinese'
  },
  {
    value: 'Any other Asian background',
    label: 'Any other Asian background'
  },
  {
    value: 'Arab',
    label: 'Arab'
  },
  {
    value: 'Any other ethnic group',
    label: 'Any other ethnic group'
  }
];

const genders = [
  {
    value: 'Female',
    label: 'Female'
  },
  {
    value: 'Male',
    label: 'Male'
  },
  {
    value: 'Prefer not to say',
    label: 'Prefer not to say'
  }
];

const years = [
  {
    value: 'First',
    label: 'First'
  },
  {
    value: 'Second',
    label: 'Second'
  },
  {
    value: 'Placement',
    label: 'Placement'
  },
  {
    value: 'Final',
    label: 'Final'
  }
];

const yesNo = [
  {
    value: 'Yes',
    label: 'Yes'
  },
  {
    value: 'No',
    label: 'No'
  },
  {
    value: 'Prefer not to say',
    label: 'Prefer not to say'
  }
];

const roles = [
  {
    value: 'Mentee',
    label: 'Mentee'
  },
  {
    value: 'Mentor',
    label: 'Mentor'
  },
  {
    value: 'Mentee and mentor',
    label: 'Mentee and mentor'
  }
];

const criteria = [
  {
    value: 'None',
    label: 'None'
  },
  {
    value: 'Same Gender',
    label: 'Same Gender'
  },
  {
    value: 'Same Ethnicity',
    label: 'Same Ethnicity'
  },
  {
    value: 'Same Nationality',
    label: 'Same Nationality'
  },
  {
    value: 'Placement',
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

const residencyy = [
  {
    value: 'On campus',
    label: 'On campus'
  },
  {
    value: 'Off campus - Birmingham',
    label: 'Off campus - Birmingham'
  },
  {
    value: 'Off campus - outside of Birmingham',
    label: 'Off campus - outside of Birmingham'
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
        invalidErrorMsg: 'Student number is invalid (9 digits)'
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
        options: years,
      },
      placement: {
        name: 'placement',
        label: 'Have you taken part in a placement?',
        requiredErrorMsg: 'Please select an option',
        options: yesNo
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
        requiredErrorMsg: 'Please select one',
        options: genders
      },
      age: {
        name: 'age',
        label: 'Age',
        requiredErrorMsg: 'Please enter a number'
      },
      ethnicity: {
        name: 'ethnicity',
        label: 'Ethnicity',
        options: ethnicities
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
        options: residencyy
      },
      role: {
        name: 'role',
        label: 'I would like to be a:*',
        requiredErrorMsg: 'Please select one',
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
        label: 'Criteria you would liked to be matched on:*',
        requiredErrorMsg: 'Please select one',
        options: criteria
      },
    }
  };