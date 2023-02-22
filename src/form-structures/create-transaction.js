const CreateTransactionForm = {
  formName: 'Create Transaction',
  submitButtonText: 'Create',
  formFields: [
    {
      label: 'Payee Account Number',
      name: 'destination_account',
      type: 'number',
      required: {
        value: true,
        message: 'Please enter payee account number',
      },
      defaultValue: '',
    },
    {
      label: 'Transaction amount',
      name: 'amount',
      type: 'number',
      required: {
        value: true,
        message: 'Please add amount to be transfered',
      },
      defaultValue: '',
    },
    {
      label: 'Description',
      name: 'description',
      type: 'string',
      defaultValue: '',
    },
  ],
};

export default CreateTransactionForm;
