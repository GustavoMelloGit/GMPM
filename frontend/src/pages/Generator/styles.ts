import { Box, FormGroup, styled } from '@mui/material';
import { FormikTextInput } from '../../components/Inputs';
import { defaultContentPaddingTop, mobileWidth } from '../../shared/constants';
import colors from '../../styles/colors';

export const GeneratorPageContainer = styled(Box)`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  color: white;
  padding-top: ${defaultContentPaddingTop};
  @media screen and (max-width: ${mobileWidth}px) {
    padding-top: 1rem;
  }
`;

export const GeneratorPageHeader = styled(Box)``;

export const GeneratorPageContent = styled(Box)`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  > *:not(:last-child) {
    margin-bottom: 4rem;
  }
`;

export const PasswordInputGenerated = styled(Box)`
  color: white;
  border: thin solid ${colors.orange[500]};
  text-align: center;
  min-height: 55px;
  padding: 10px 20px;
  width: 100%;
  max-width: 300px;
  cursor: pointer;
  overflow-wrap: break-word;
`;

export const FormGroupStyled = styled(FormGroup)`
  svg {
    color: white !important;
  }
`;

export const GeneratorLengthInput = styled(FormikTextInput)`
  width: 50px;
  margin-left: 15px;
  input {
    text-align: center;
    ::-webkit-outer-spin-button,
    ::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
    -moz-appearance: textfield;
  }
  && * {
    color: white !important;
    ::before {
      border-bottom: thin solid white !important;
    }
  }
`;
