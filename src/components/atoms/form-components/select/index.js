import { FormControl, InputLabel, Select, FormHelperText } from '@mui/material';
import { Controller } from 'react-hook-form';

const ReactHookFormSelect = ({
  name,
  label,
  control,
  defaultValue,
  children,
  errors,
  ...props
}) => {
  const labelId = `${name}-label`;
  return (
    <FormControl fullWidth {...props}>
      <InputLabel id={labelId}>{label}</InputLabel>
      <Controller
        defaultValue={defaultValue}
        render={({ field }) => (
          <Select {...field} labelId={labelId} label={label}>
            {children}
          </Select>
        )}
        name={name}
        control={control}
      />
      <FormHelperText>
        {errors['type'] ? errors['type'].message : ''}
      </FormHelperText>
    </FormControl>
  );
};
export default ReactHookFormSelect;
