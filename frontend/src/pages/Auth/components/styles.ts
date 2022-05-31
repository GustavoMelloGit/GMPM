import { Button, Divider, styled, css } from '@mui/material';
import {
  FormikPasswordInput,
  FormikTextInput,
} from '../../../components/Inputs';
import { mobileWidth } from '../../../shared/constants';
import colors from '../../../styles/colors';

export const AuthPageDivider = styled(Divider)`
  @media screen and (max-width: ${mobileWidth}px) {
    display: none;
  }
`;

export const AuthSubmitButton = styled(Button)`
  background-color: ${colors.orange[500]};
  && * {
    color: white;
  }
  :hover {
    background-color: ${colors.orange[600]};
  }
`;

const InputStyles = css`
  @media screen and (max-width: ${mobileWidth}px) {
    input {
      color: white;
      fill: white;
    }
    fieldset {
      border-color: white;
    }
    label {
      color: white !important;
    }
    :hover {
      fieldset {
        border-color: white !important;
      }
    }
  }
`;

export const StyledTextInput = styled(FormikTextInput)`
  ${() => InputStyles}
`;

export const StyledPasswordInput = styled(FormikPasswordInput)`
  ${() => InputStyles}
`;
