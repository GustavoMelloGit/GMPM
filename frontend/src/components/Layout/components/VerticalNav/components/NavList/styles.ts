import { deepOrange } from '@mui/material/colors';
import { ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { styled, css } from '@mui/system';

export const NavListIcon = styled(ListItemIcon)``;

export const NavListText = styled(ListItemText)``;

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
