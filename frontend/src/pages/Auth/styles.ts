import { mobileWidth } from '../../shared/constants';
import { Container } from '@mui/material';
import { Box, styled } from '@mui/system';
import colors from '../../styles/colors';

export const LoginPageContainer = styled(Box)`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: space-between;
  background-color: ${colors.gray[200]};
  @media screen and (max-width: ${mobileWidth}px) {
    flex-direction: column;
    background-color: ${colors.gray[700]};
    justify-content: center;
  }
`;

export const LoginPageFormContainer = styled(Container)`
  height: 100%;
  width: 50vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  > *:not(:last-child) {
    margin-bottom: 1rem;
  }

  @media screen and (max-width: ${mobileWidth}px) {
    width: 100vw;
    height: fit-content;
    color: white;
  }
`;
export const LoginPageAside = styled('aside')`
  width: 40vw;
  height: 100%;
  background-color: ${colors.gray[700]};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 1rem;

  svg {
    width: 100%;
    max-width: 500px;
    height: auto;
  }
  @media screen and (max-width: ${mobileWidth}px) {
    flex-direction: row;
    width: 100vw;
    max-width: 100%;
    height: fit-content;

    svg {
      width: 200px;
    }
  }
`;

export const LoginPageHeadline = styled(Box)`
  @media screen and (max-width: ${mobileWidth}px) {
    display: none;
  }
`;
