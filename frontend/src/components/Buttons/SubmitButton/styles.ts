import { Button, styled, css, ButtonProps } from '@mui/material';

interface SubmitButtonProps extends ButtonProps {
  $bgColor?: string;
}
export const SubmitButtonComponent = styled(Button)<SubmitButtonProps>`
  transition: opacity 200ms;
  ${({ $bgColor }) =>
    $bgColor &&
    css`
      background-color: ${$bgColor};
      opacity: 0.8;
      :hover {
        background-color: ${$bgColor};
        opacity: 1;
      }
    `}
`;
