const CreateAccountForm = {
  formName: 'Create Account',
  submitButtonText: 'Create',
  formFields: [
    {
      label: 'Select account type',
      name: 'type',
      type: 'select',
      options: [
        {
          name: 'Regular',
          value: 'regular',
        },
        {
          name: 'Premium',
          value: 'premium',
        },
      ],
      required: {
        value: true,
        message: 'Please select account type',
      },
      defaultValue: '',
    },
    {
      label: 'Amount to be credited',
      name: 'balance',
      type: 'number',
      required: {
        value: true,
        message: 'Please add balance to account',
      },
      defaultValue: '',
      customValidation: true,
    },
  ],
};

export default CreateAccountForm;
