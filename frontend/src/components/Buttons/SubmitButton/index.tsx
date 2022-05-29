import React from 'react';
import { ButtonProps } from '@mui/material';
import { SubmitButtonComponent } from './styles';

const SubmitButton: React.FC<ButtonProps> = ({ children, ...props }) => {
  return (
    <SubmitButtonComponent variant='contained' type='submit' {...props}>
      {children}
    </SubmitButtonComponent>
  );
};
export default SubmitButton;
