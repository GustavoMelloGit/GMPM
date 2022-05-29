import React, { useContext } from 'react';
import { Avatar, Typography, Button, IconButton } from '@mui/material';
import {
  AppDrawer,
  MobileHeader,
  ProfileContainer,
  UserInfoContainer,
  VerticalNavContainer,
  VerticalNavContentContainer,
  VerticalNavContentWrapper,
} from './styles';
import { PropsChildrenOnly } from '../../../../shared/types/utils';
import { deepOrange } from '@mui/material/colors';
import { NavList } from './components';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { LayoutContext } from '../../../../contexts/layout';
import { authContext } from '../../../../contexts/Auth';
import ToasterComponent from '../../../Toaster';

const VerticalNavbar: React.FC<PropsChildrenOnly> = ({ children }) => {
  const { isMobile, toggleDrawer, drawerIsOpen } = useContext(LayoutContext);
  const { user } = useContext(authContext);

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
        <ProfileContainer>
          <Avatar
            variant='rounded'
            sx={{
              bgcolor: deepOrange[500],
              height: 50,
              width: 50,
              fontSize: '2em',
            }}
          >
            {user.name[0].toUpperCase()}
          </Avatar>
          <UserInfoContainer>
            <Typography fontWeight={700} noWrap>
              {user.name}
            </Typography>
            <Typography fontSize={13} fontWeight={500} noWrap>
              {user.email}
            </Typography>
          </UserInfoContainer>
        </ProfileContainer>
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
          <ToasterComponent />
          {children}
        </VerticalNavContentContainer>
      </VerticalNavContentWrapper>
    </VerticalNavContainer>
  );
};
export default React.memo(VerticalNavbar);
