import styled, { css } from 'styled-components';
import { Box } from '@mui/system';
import colors from '../../../../styles/colors';
import { Container } from '@mui/material';
import { mobileWidth } from '../../../../shared/constants';

interface VerticalNavProps {
  drawerIsOpen?: boolean;
  isMobile?: boolean;
}

export const VerticalNavContainer = styled(Box)`
  position: relative;
  height: 100%;
  width: 100%;
  display: flex;
`;

export const VerticalNavContentContainer = styled(Container)`
  height: 100%;
  width: 100%;
  @media screen and (max-width: ${mobileWidth}px) {
    padding-top: 1rem;
  }
`;
export const VerticalNavContentWrapper = styled(Box)<VerticalNavProps>`
  width: 100%;
  height: 100%;
  background-color: ${colors.gray[700]};
  ${(props) =>
    !props.isMobile &&
    css`
      margin-left: 20rem;
    `}
`;

export const AppDrawer = styled(Box)<VerticalNavProps>`
  position: fixed;
  z-index: 1000;
  height: 100vh;
  background-color: ${colors.blue[500]};
  width: 20rem;
  min-width: 20rem;
  padding: 2rem;

  ${({ drawerIsOpen, isMobile }) => {
    if (drawerIsOpen && isMobile) {
      return css`
        width: 100%;
      `;
    } else if (isMobile && !drawerIsOpen) {
      return css`
        display: none;
      `;
    }
  }}
`;

export const MobileHeader = styled(Box)`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  svg {
    width: 2.5rem;
    height: 2.5rem;
  }
`;
