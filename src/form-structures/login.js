const LoginForm = {
  formName: 'Login',
  submitButtonText: 'Login',
  formFields: [
    {
      label: 'Email',
      name: 'email',
      type: 'text',
      required: {
        value: true,
        message: 'Email is required',
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
      defaultValue: '',
    },
  ],
};

export default LoginForm;
