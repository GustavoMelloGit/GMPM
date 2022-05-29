import { styled, css } from '@mui/system';
import { Checkbox } from '@mui/material';
import colors from '../../../../styles/colors';
import { mobileWidth } from '../../../../shared/constants';
import {
  FormikPasswordInput,
  FormikTextInput,
} from '../../../../components/Inputs';

export const LoginRememberMeCheckbox = styled(Checkbox)`
  color: ${colors.orange[500]} !important;
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
