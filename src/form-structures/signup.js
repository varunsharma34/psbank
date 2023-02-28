const SignupForm = {
  formName: 'Signup',
  submitButtonText: 'Sign Up',
  formFields: [
    {
      label: 'Name',
      name: 'name',
      type: 'text',
      required: {
        value: true,
        message: 'Name is required',
      },
      defaultValue: '',
    },
    {
      label: 'Email',
      name: 'email',
      type: 'text',
      required: {
        value: true,
        message: 'Email is required',
      },
      pattern: {
        value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
        message: 'Invalid email format',
      },
      defaultValue: '',
    },
    {
      label: 'Password',
      name: 'password',
      type: 'password',
      required: {
        value: true,
        message: 'Password is required',
      },
      pattern: {
        value:
          /(?=^.{8,}$)(?=.*\d)(?=.*[!@#$%^&*]+)(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/,
        message: `The password must contain uppercase, lowercase, nummeric and special characters. Password length must be greater than or equal to 8.`,
      },
      defaultValue: '',
    },
    {
      label: 'Date of birth',
      name: 'dob',
      type: 'date',
      required: {
        value: true,
        message: 'Date is required',
      },
      defaultValue: '',
    },
    {
      label: 'Phone',
      name: 'phone',
      type: 'number',
      required: {
        value: true,
        message: 'Phone is required',
      },
      defaultValue: '',
    },
    {
      label: 'Address',
      name: 'address',
      type: 'text',
      required: {
        value: true,
        message: 'Address is required',
      },
      defaultValue: '',
    },
    {
      label: 'Occupation',
      name: 'occupation',
      type: 'text',
      required: {
        value: true,
        message: 'Occupation is required',
      },
      defaultValue: '',
    },
    {
      label: 'Annual Income',
      name: 'income',
      type: 'number',
      required: {
        value: true,
        message: 'Please provide your annual income',
      },
      defaultValue: '',
    },
    {
      label: 'Government ID',
      name: 'govt_id',
      type: 'text',
      required: {
        value: true,
        message: 'Please provide your Government Id number',
      },
      defaultValue: '',
    },
  ],
};

export default SignupForm;
