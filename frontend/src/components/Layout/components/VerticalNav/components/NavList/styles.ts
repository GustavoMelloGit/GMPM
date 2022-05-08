import { deepOrange } from '@mui/material/colors';
import { ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import colors from '../../../../../../styles/colors';
import { styled, css } from '@mui/system';

interface NavListItemProps {
  $active?: boolean;
}

export const NavListIcon = styled(ListItemIcon)<NavListItemProps>`
  svg {
    fill: ${({ $active }) => ($active ? colors.orange[500] : 'white')};
  }
`;

export const NavListText = styled(ListItemText)<NavListItemProps>``;

export const NavListItemButton = styled(ListItemButton)`
  ${({ selected }) => {
    if (selected) {
      return css`
        border: thin solid ${deepOrange[500]};
        border-radius: 8px;
      `;
    }
  }}
`;
