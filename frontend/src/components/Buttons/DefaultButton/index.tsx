import React from 'react';
import { ButtonProps } from '@mui/material';
import { ButtonStyled } from './styles';

interface DefaultButtonProps extends ButtonProps {
  bgColor?: string;
}
const DefaultButton: React.FC<DefaultButtonProps> = ({
  bgColor,
  children,
  ...rest
}) => {
  return (
    <ButtonStyled bgColor={bgColor} variant='contained' {...rest}>
      {children}
    </ButtonStyled>
  );
};
export default DefaultButton;
