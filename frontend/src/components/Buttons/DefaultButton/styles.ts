import { Button, styled, css } from '@mui/material';

interface ButtonStyledProps {
  bgColor?: string;
}
export const ButtonStyled = styled(Button)<ButtonStyledProps>`
  opacity: 0.85;
  transition: opacity 200ms;
  :hover {
    opacity: 1;
  }

  ${({ bgColor }) =>
    bgColor &&
    css`
      background-color: ${bgColor};
      :hover {
        background-color: ${bgColor};
      }
    `}
`;
