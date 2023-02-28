import { TextField } from '@mui/material';
import { Controller } from 'react-hook-form';

const FormInputField = ({
  name,
  control,
  label,
  type = 'text',
  required = false,
  pattern,
  formstate,
  register,
}) => {
  return (
    <Controller
      name={name}
      control={control}
      render={(field) => (
        <TextField
          InputLabelProps={{ shrink: type === 'date' || field.value }}
          fullWidth
          type={type}
          label={label}
          variant='outlined'
          name={name}
          error={!!formstate.errors[name]}
          helperText={
            formstate.errors[name] ? formstate.errors[name].message : ''
          }
          {...register(name, {
            required, // JS only: <p>error message</p> TS only support string
            pattern,
          })}
        />
      )}
      defaultValue=''
    />
  );
};

export default FormInputField;
