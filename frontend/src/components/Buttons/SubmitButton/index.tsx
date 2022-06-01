import React from 'react';
import { ButtonProps } from '@mui/material';
import { SubmitButtonComponent } from './styles';

interface SubmitButtonProps extends ButtonProps {
  children: React.ReactNode;
  $bgColor?: string;
}
const SubmitButton: React.FC<SubmitButtonProps> = ({
  children,
  $bgColor,
  ...props
}) => {
  return (
    <SubmitButtonComponent
      $bgColor={$bgColor}
      variant='contained'
      type='submit'
      {...props}
    >
      {children}
    </SubmitButtonComponent>
  );
};
export default SubmitButton;
