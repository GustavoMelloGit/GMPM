import { styled, css } from '@mui/system';
import { Form } from 'formik';
import { Button, Checkbox, Divider, Typography } from '@mui/material';
import colors from '../../../../../styles/colors';
import { mobileWidth } from '../../../../../shared/constants';
import {
  FormikPasswordInput,
  FormikTextInput,
} from '../../../../../components/Inputs';

export const LoginFormikForm = styled(Form)`
  span {
    color: ${colors.gray[700]};
  }
  > *:not(:last-child) {
    margin-bottom: 1rem;
  }

  @media screen and (max-width: ${mobileWidth}px) {
    span {
      color: white;
    }
  }
`;

export const LoginDivider = styled(Divider)`
  @media screen and (max-width: ${mobileWidth}px) {
    display: none;
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

export const LoginFormTitle = styled(Typography)<{ component: string }>`
  color: ${colors.gray[700]};
  font-weight: bold;
  @media screen and (max-width: ${mobileWidth}px) {
    color: white;
  }
`;

const InputStyles = css`
  @media screen and (max-width: ${mobileWidth}px) {
    && * {
      color: white;
      fill: white;
    }
    fieldset {
      border-color: white;
    }
  }
`;

export const LoginEmailInput = styled(FormikTextInput)`
  ${() => InputStyles}
`;

export const LoginPasswordInput = styled(FormikPasswordInput)`
  ${() => InputStyles}
`;
