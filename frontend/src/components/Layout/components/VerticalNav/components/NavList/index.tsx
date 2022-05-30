import React from 'react';
import { ListItem, Box } from '@mui/material';
import { navItems } from '../../../../../../routes/routesConfig';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  NavListIcon,
  NavListItemButton,
  NavListList,
  NavListText,
} from './styles';

const NavList: React.FC = (props) => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <Box component='nav'>
      <NavListList aria-label='vertical navbar'>
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
      </NavListList>
    </Box>
  );
};
export default NavList;
