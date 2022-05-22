import React from 'react';
import { useField } from 'formik';
import { BaseTextFieldProps, TextField } from '@mui/material';

export interface FormikTextInputProps extends BaseTextFieldProps {
  name: string;
  variant?: 'standard' | 'filled' | 'outlined';
  [key: string]: unknown;
  value?: string | number;
  containerStyles?: React.CSSProperties;
}

const FormikTextInput: React.FC<FormikTextInputProps> = ({
  name,
  variant = 'outlined',
  containerStyles,
  ...rest
}) => {
  const [field, meta] = useField(name);
  const errorText = meta.error && meta.touched ? meta.error : '';

  return (
    <TextField
      {...rest}
      {...field}
      fullWidth
      variant={variant}
      helperText={errorText}
      error={!!errorText}
    />
  );
};

export default FormikTextInput;
