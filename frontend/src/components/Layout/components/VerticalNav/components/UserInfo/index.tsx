import React, { useContext, useState } from 'react';
import { Avatar, Menu, MenuItem, Typography } from '@mui/material';
import { authContext } from '../../../../../../contexts/Auth';
import { KeyboardArrowDown } from '@mui/icons-material';
import { ProfileButton, ProfileContainer, UserInfoContainer } from './styles';
import { deepOrange } from '@mui/material/colors';

const UserInfo: React.FC = () => {
  const { user, logout } = useContext(authContext);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const menuIsOpen = Boolean(anchorEl);

  const handleOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <ProfileContainer component='header'>
      <Avatar
        variant='rounded'
        sx={{
          bgcolor: deepOrange[500],
          height: 50,
          width: 50,
          fontSize: '2em',
        }}
      >
        {user && user.name[0].toUpperCase()}
      </Avatar>
      <UserInfoContainer>
        <Typography fontWeight={700} noWrap>
          {user.name}
        </Typography>
        <Typography fontSize={13} fontWeight={500} noWrap>
          {user.email}
        </Typography>
      </UserInfoContainer>
      <ProfileButton
        aria-controls={menuIsOpen ? 'opções-menu' : undefined}
        aria-expanded={menuIsOpen ? 'true' : undefined}
        aria-haspopup='true'
        id='botão-opções'
        aria-label='mais opções perfil'
        onClick={handleOpen}
      >
        <KeyboardArrowDown />
      </ProfileButton>
      <Menu
        id='opções-menu'
        MenuListProps={{
          'aria-labelledby': 'botão-opções',
        }}
        open={menuIsOpen}
        anchorEl={anchorEl}
        onClose={handleClose}
      >
        <MenuItem onClick={logout}>Logout</MenuItem>
      </Menu>
    </ProfileContainer>
  );
};
export default React.memo(UserInfo);
