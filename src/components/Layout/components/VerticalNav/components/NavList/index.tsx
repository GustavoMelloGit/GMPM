import React from 'react';
import { List, ListItemButton } from '@mui/material';
import { navItems } from '../../../../../../routes/routesConfig';
import { useLocation, useNavigate } from 'react-router-dom';
import { NavListIcon, NavListText } from './styles';

const NavList: React.FC = (props) => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <List component='nav' aria-label='vertical navbar'>
      {navItems.map((item) => {
        const active = item.url === location.pathname;

        return (
          <ListItemButton
            key={item.id}
            onClick={() => navigate(item.url)}
            selected={active}
          >
            {item.icon && <NavListIcon>{item.icon}</NavListIcon>}
            <NavListText primary={item.title} $active={active} />
          </ListItemButton>
        );
      })}
    </List>
  );
};
export default NavList;
