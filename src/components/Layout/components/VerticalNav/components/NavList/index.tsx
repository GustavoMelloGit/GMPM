import React from 'react';
import { List } from '@mui/material';
import { navItems } from '../../../../../../routes/routesConfig';
import { useLocation, useNavigate } from 'react-router-dom';
import { NavListIcon, NavListItemButton, NavListText } from './styles';

const NavList: React.FC = (props) => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <List component='nav' aria-label='vertical navbar'>
      {navItems.map((item) => {
        const active = item.url === location.pathname;

        return (
          <NavListItemButton
            key={item.id}
            onClick={() => navigate(item.url)}
            selected={active}
          >
            {item.icon && <NavListIcon>{item.icon}</NavListIcon>}
            <NavListText primary={item.title} $active={active} />
          </NavListItemButton>
        );
      })}
    </List>
  );
};
export default NavList;
