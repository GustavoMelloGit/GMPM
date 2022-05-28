import React, { useContext } from 'react';
import { Avatar, Box, Typography, Button, IconButton } from '@mui/material';
import {
  AppDrawer,
  MobileHeader,
  ProfileContainer,
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

const VerticalNavbar: React.FC<PropsChildrenOnly> = ({ children }) => {
  const { isMobile, toggleDrawer, drawerIsOpen } = useContext(LayoutContext);
  const { user } = useContext(authContext);

  return (
    <VerticalNavContainer>
      <AppDrawer drawerIsOpen={drawerIsOpen} isMobile={isMobile}>
        {isMobile && drawerIsOpen && (
          <MobileHeader>
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
          <Box ml={1} minWidth={0}>
            <Typography fontWeight={700} noWrap>
              {user.name}
            </Typography>
            <Typography fontSize={13} fontWeight={500} noWrap>
              {user.email}
            </Typography>
          </Box>
        </ProfileContainer>
        <NavList />
      </AppDrawer>
      <VerticalNavContentWrapper isMobile={isMobile}>
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
