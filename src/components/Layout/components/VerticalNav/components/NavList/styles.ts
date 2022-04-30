import { ListItemIcon, ListItemText } from '@mui/material';
import styled from 'styled-components';
import colors from '../../../../../../styles/colors';

interface NavListItemProps {
  $active?: boolean;
}

export const NavListIcon = styled(ListItemIcon)<NavListItemProps>`
  svg {
    fill: ${({ $active }) => ($active ? colors.orange[500] : 'white')};
  }
`;

export const NavListText = styled(ListItemText)<NavListItemProps>`
  span {
    color: ${({ $active }) => ($active ? colors.orange[500] : 'white')};
  }
`;
