import { Container } from '@mui/material';
import { Box, styled } from '@mui/system';
import colors from '../../../styles/colors';

export const LoginPageContainer = styled(Box)`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: space-between;
  background-color: ${colors.gray[200]};
`;

export const LoginPageFormContainer = styled(Container)`
  height: 100%;
  width: 50vw;
  min-width: 450px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const LoginPageAside = styled(Box)`
  width: 50vw;
  max-width: 500px;
  height: 100%;
  background-color: ${colors.gray[700]};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  svg {
    width: 100%;
    height: auto;
  }
`;
