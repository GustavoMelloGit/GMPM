import React from 'react';
import { List, ListItem, Box } from '@mui/material';
import { navItems } from '../../../../../../routes/routesConfig';
import { useLocation, useNavigate } from 'react-router-dom';
import { NavListIcon, NavListItemButton, NavListText } from './styles';

const NavList: React.FC = (props) => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <Box component='nav'>
      <List aria-label='vertical navbar'>
        {navItems.map((item) => {
          const active = item.url === location.pathname;

          return (
            <ListItem disablePadding key={item.id}>
              <NavListItemButton
                onClick={() => navigate(item.url)}
                selected={active}
              >
                {item.icon && <NavListIcon>{item.icon}</NavListIcon>}
                <NavListText primary={item.title} />
              </NavListItemButton>
            </ListItem>
          );
        })}
      </List>
    </Box>
  );
};
export default NavList;
