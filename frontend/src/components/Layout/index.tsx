import React from 'react';
import { PropsChildrenOnly } from '../../shared/types/utils';
import VerticalNavbar from './components/VerticalNav';
import { LayoutContainer } from './styles';

const AppLayout: React.FC<PropsChildrenOnly> = ({ children }) => {
  return (
    <LayoutContainer>
      <VerticalNavbar>{children}</VerticalNavbar>
    </LayoutContainer>
  );
};

export default AppLayout;
