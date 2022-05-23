import { styled } from '@mui/system';
import { Form } from 'formik';
import { Button, Checkbox } from '@mui/material';
import colors from '../../../../../styles/colors';

export const LoginFormikForm = styled(Form)`
  span {
    color: ${colors.gray[700]};
  }
  > *:not(:last-child) {
    margin-bottom: 1rem;
  }
`;

export const LoginSubmitButton = styled(Button)`
  background-color: ${colors.orange[500]};
  :hover {
    background-color: ${colors.orange[600]};
  }
`;

export const LoginRememberMeCheckbox = styled(Checkbox)`
  color: ${colors.orange[500]} !important;
`;
