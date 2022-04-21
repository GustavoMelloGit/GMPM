import React from 'react';
import { List } from '@mui/material';
import {
  VerticalNavContainer,
  VerticalNavContentContainer,
  VerticalNavContentWrapper,
  VerticalNavListContainer,
} from './styles';
import { PropsChildrenOnly } from '../../../../shared/types/utils';

const VerticalNavbar: React.FC<PropsChildrenOnly> = ({ children }) => {
  return (
    <VerticalNavContainer>
      <VerticalNavListContainer>
        <List component='nav' aria-label='vertical navbar'>
          <p>Hello World</p>
        </List>
      </VerticalNavListContainer>
      <VerticalNavContentWrapper>
        <VerticalNavContentContainer>{children}</VerticalNavContentContainer>
      </VerticalNavContentWrapper>
    </VerticalNavContainer>
  );
};
export default VerticalNavbar;
