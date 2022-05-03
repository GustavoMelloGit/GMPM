import React from 'react';
import { Avatar, Box, Typography } from '@mui/material';
import {
  ProfileContainer,
  VerticalNavContainer,
  VerticalNavContentContainer,
  VerticalNavContentWrapper,
  VerticalNavListContainer,
  VerticalNavDrawer,
} from './styles';
import { PropsChildrenOnly } from '../../../../shared/types/utils';
import { deepOrange } from '@mui/material/colors';
import { NavList } from './components';

interface VerticalNavbarProps extends PropsChildrenOnly {
  isOpen: boolean;
}
const VerticalNavbar: React.FC<VerticalNavbarProps> = ({
  children,
  isOpen,
}) => {
  return (
    <VerticalNavContainer>
      <VerticalNavDrawer
        variant='persistent'
        anchor='left'
        open={isOpen}
        BackdropProps={{ invisible: true }}
      >
        <VerticalNavListContainer>
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
            <Box ml={1}>
              <Typography fontWeight={700} noWrap width={200}>
                Gustavo Marques de Mello Muito grande
              </Typography>
              <Typography fontSize={13} fontWeight={500} noWrap width={200}>
                gugamello2014@yahoo.com
              </Typography>
            </Box>
          </ProfileContainer>
          <NavList />
        </VerticalNavListContainer>
      </VerticalNavDrawer>
      <VerticalNavContentWrapper drawerIsOpen={isOpen}>
        <VerticalNavContentContainer>{children}</VerticalNavContentContainer>
      </VerticalNavContentWrapper>
    </VerticalNavContainer>
  );
};
export default React.memo(VerticalNavbar);
