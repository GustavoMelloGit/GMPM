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

const VerticalNavbar: React.FC<PropsChildrenOnly> = ({ children }) => {
  const { isMobile, toggleDrawer, drawerIsOpen } = useContext(LayoutContext);

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
            G
          </Avatar>
          <Box ml={1} minWidth={0}>
            <Typography fontWeight={700} noWrap>
              Gustavo Marques de Mello Muito grande
            </Typography>
            <Typography fontSize={13} fontWeight={500} noWrap>
              gugamello2014@yahoo.com
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
