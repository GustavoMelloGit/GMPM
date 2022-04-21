import React from 'react';
import {
  Avatar,
  Box,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from '@mui/material';
import {
  ProfileContainer,
  VerticalNavContainer,
  VerticalNavContentContainer,
  VerticalNavContentWrapper,
  VerticalNavListContainer,
} from './styles';
import { PropsChildrenOnly } from '../../../../shared/types/utils';
import { deepOrange } from '@mui/material/colors';
import { navItems } from '../../../../routes/routesConfig';
import { useNavigate } from 'react-router-dom';

const VerticalNavbar: React.FC<PropsChildrenOnly> = ({ children }) => {
  const navigate = useNavigate();

  return (
    <VerticalNavContainer>
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
        <List component='nav' aria-label='vertical navbar'>
          {navItems.map((item) => (
            <ListItemButton key={item.id} onClick={() => navigate(item.url)}>
              {item.icon && <ListItemIcon>{item.icon}</ListItemIcon>}
              <ListItemText primary={item.title} />
            </ListItemButton>
          ))}
        </List>
      </VerticalNavListContainer>
      <VerticalNavContentWrapper>
        <VerticalNavContentContainer>{children}</VerticalNavContentContainer>
      </VerticalNavContentWrapper>
    </VerticalNavContainer>
  );
};
export default VerticalNavbar;
