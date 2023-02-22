import { Button, MenuItem, Grid } from '@mui/material';
import { useForm } from 'react-hook-form';
import FormInputField from '../../atoms/form-components/input';
import ReactHookFormSelect from '../../atoms/form-components/select';

const Form = ({ data, formSubmitHandler, children }) => {
  const { formFields, submitButtonText = 'Submit' } = data;
  const { register, handleSubmit, control, formState } = useForm();

  const onFormSubmit = (data) => {
    formSubmitHandler(data);
  };

  return (
    <form onSubmit={handleSubmit(onFormSubmit)}>
      <Grid container direction='column' spacing={2} justifyContent='center'>
        {formFields.length &&
          formFields.map((field) => {
            return field.type === 'select' ? (
              <Grid item xs={12} key={field.name}>
                <ReactHookFormSelect
                  id={field.name}
                  name={field.name}
                  label={field.label}
                  control={control}
                  defaultValue={
                    field.options &&
                    field.options.length &&
                    field.options[0].value
                  }
                  errors={formState.errors}
                  error={!!formState.errors['type']}
                >
                  {field.options &&
                    field.options.length &&
                    field.options.map((option) => {
                      return (
                        <MenuItem key={option.value} value={option.value}>
                          {option.name}
                        </MenuItem>
                      );
                    })}
                </ReactHookFormSelect>
              </Grid>
            ) : (
              <Grid item xs={12} key={field.name}>
                <FormInputField
                  name={field.name}
                  label={field.label}
                  type={field.type}
                  control={control}
                  register={register}
                  formstate={formState}
                  required={field.required}
                />
              </Grid>
            );
          })}

        <Grid item xs={12}>
          <Button
            fullWidth
            size='large'
            type='submit'
            variant='contained'
            color='primary'
          >
            {submitButtonText}
          </Button>
        </Grid>

        {children}
      </Grid>
    </form>
  );
};

export default Form;
