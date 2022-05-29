import { Button, ButtonProps } from '@mui/material';
import React from 'react';

const CancelButton: React.FC<ButtonProps> = ({ children, ...props }) => {
  return (
    <Button variant='contained' color='error' {...props}>
      {children || 'Cancelar'}
    </Button>
  );
};
export default CancelButton;
