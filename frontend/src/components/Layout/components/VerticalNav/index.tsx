import React, { useContext } from 'react';
import { Button, IconButton } from '@mui/material';
import {
  AppDrawer,
  MobileHeader,
  VerticalNavContainer,
  VerticalNavContentContainer,
  VerticalNavContentWrapper,
} from './styles';
import { PropsChildrenOnly } from '../../../../shared/types/utils';
import { deepOrange } from '@mui/material/colors';
import { NavList, UserInfo } from './components';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { LayoutContext } from '../../../../contexts/layout';

const VerticalNavbar: React.FC<PropsChildrenOnly> = ({ children }) => {
  const { isMobile, toggleDrawer, drawerIsOpen } = useContext(LayoutContext);

  return (
    <VerticalNavContainer>
      <AppDrawer
        component='aside'
        drawerIsOpen={drawerIsOpen}
        isMobile={isMobile}
      >
        {isMobile && drawerIsOpen && (
          <MobileHeader component='header'>
            <IconButton
              aria-label='fecha o menu de navegação'
              onClick={toggleDrawer}
              edge='end'
            >
              <CloseIcon sx={{ fill: deepOrange[500] }} />
            </IconButton>
          </MobileHeader>
        )}
        <UserInfo />
        <NavList />
      </AppDrawer>
      <VerticalNavContentWrapper component='section' isMobile={isMobile}>
        <VerticalNavContentContainer>
          {isMobile && (
            <MobileHeader>
              <Button onClick={toggleDrawer}>
                <MenuIcon sx={{ fill: deepOrange[500] }} />
              </Button>
            </MobileHeader>
          )}
          {children}
        </VerticalNavContentContainer>
      </VerticalNavContentWrapper>
    </VerticalNavContainer>
  );
};
export default React.memo(VerticalNavbar);
