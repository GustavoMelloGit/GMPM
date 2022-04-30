import styled, { css } from 'styled-components';
import { Box } from '@mui/system';
import colors from '../../../../styles/colors';
import { Container } from '@mui/material';

export const VerticalNavContainer = styled(Box)`
  height: 100%;
  width: 100%;
  display: flex;
`;

export const VerticalNavListContainer = styled(Box)`
  width: 20rem;
  min-width: 20rem;
  height: 100%;
  background-color: ${colors.blue[500]};
  padding: 2rem 2rem;
`;

export const VerticalNavContentContainer = styled(Container)`
  padding-top: 5rem;
`;
export const VerticalNavContentWrapper = styled(Box)<{ drawerIsOpen: boolean }>`
  width: 100%;
  height: 100%;
  background-color: ${colors.gray[700]};
  ${(props) =>
    props.drawerIsOpen &&
    css`
      margin-left: 20rem;
    `}
`;

export const ProfileContainer = styled(Box)`
  display: flex;
  width: 100%;
  margin-bottom: 5rem;
`;
