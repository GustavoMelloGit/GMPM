import React, { useState } from 'react';
import { useField } from 'formik';
import {
  BaseTextFieldProps,
  IconButton,
  InputAdornment,
  TextField,
} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import colors from '../../../styles/colors';

export interface FormikPasswordInputProps extends BaseTextFieldProps {
  name: string;
  variant?: 'standard' | 'filled' | 'outlined';
  [key: string]: unknown;
  value?: string | number;
  containerStyles?: React.CSSProperties;
  iconButtonStyles?: React.CSSProperties;
}

const FormikPasswordInput: React.FC<FormikPasswordInputProps> = ({
  name,
  variant = 'outlined',
  containerStyles,
  iconButtonStyles,
  ...rest
}) => {
  const [showText, setShowText] = useState(false);
  const [field, meta] = useField(name);
  const errorText = meta.error && meta.touched ? meta.error : '';

  const handleClickShowPassword = () => {
    setShowText((prev) => !prev);
  };

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  return (
    <TextField
      type={showText ? 'text' : 'password'}
      variant={variant}
      helperText={errorText}
      error={!!errorText}
      autoComplete='current-password'
      fullWidth
      InputProps={{
        endAdornment: (
          <InputAdornment position='end'>
            <IconButton
              aria-label='toggle password visibility'
              onClick={handleClickShowPassword}
              onMouseDown={handleMouseDownPassword}
              edge='end'
            >
              {showText ? (
                <Visibility
                  sx={{ ...iconButtonStyles, fill: colors.gray[600] }}
                />
              ) : (
                <VisibilityOff
                  sx={{ ...iconButtonStyles, fill: colors.gray[600] }}
                />
              )}
            </IconButton>
          </InputAdornment>
        ),
      }}
      {...rest}
      {...field}
    />
  );
};

export default FormikPasswordInput;
