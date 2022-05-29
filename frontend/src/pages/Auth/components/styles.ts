import { Button, Divider, styled } from '@mui/material';
import { mobileWidth } from '../../../shared/constants';
import colors from '../../../styles/colors';

export const AuthPageDivider = styled(Divider)`
  @media screen and (max-width: ${mobileWidth}px) {
    display: none;
  }
`;

export const AuthSubmitButton = styled(Button)`
  background-color: ${colors.orange[500]};
  :hover {
    background-color: ${colors.orange[600]};
  }
`;
