import { deepOrange } from '@mui/material/colors';
import {
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import { styled, css } from '@mui/system';

export const NavListIcon = styled(ListItemIcon)``;

export const NavListText = styled(ListItemText)``;

export const NavListList = styled(List)`
  > *:not(:last-child) {
    margin-bottom: 5px;
  }
`;

export const NavListItemButton = styled(ListItemButton)`
  position: relative;

  && > * {
    color: white;
  }
  ${({ selected }) => {
    if (selected) {
      return css`
        ::before {
          content: '';
          position: absolute;
          inset: 0;
          border: thin solid ${deepOrange[500]};
          border-radius: 8px;
        }
      `;
    }
  }}
`;
