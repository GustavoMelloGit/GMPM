import React, { useContext } from 'react';
import { ListItem, Box } from '@mui/material';
import { navItems } from '../../../../../../routes/routesConfig';
import { useLocation, useNavigate } from 'react-router-dom';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import {
  NavListIcon,
  NavListItemButton,
  NavListList,
  NavListText,
} from './styles';
import { LayoutContext } from '../../../../../../contexts/layout';

const NavList: React.FC = () => {
  const { toggleDrawer } = useContext(LayoutContext);
  const navigate = useNavigate();
  const location = useLocation();

  const handleItemClick = (path: string) => {
    navigate(path);
    toggleDrawer();
  };

  return (
    <Box component='nav'>
      <NavListList aria-label='vertical navbar'>
        {navItems.map((item) => {
          const active = item.url === location.pathname;

          return (
            <ListItem disablePadding key={item.id}>
              <NavListItemButton
                onClick={handleItemClick.bind(this, item.url)}
                selected={active}
              >
                {item.icon && <NavListIcon>{item.icon}</NavListIcon>}
                <NavListText primary={item.title} />
                <ArrowForwardIosIcon sx={{ height: '15px' }} />
              </NavListItemButton>
            </ListItem>
          );
        })}
      </NavListList>
    </Box>
  );
};
export default NavList;
