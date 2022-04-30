import React, { useContext } from 'react';
import { LayoutContext } from '../../contexts/layout';
import { PropsChildrenOnly } from '../../shared/types/utils';
import VerticalNavbar from './components/VerticalNav';
import { LayoutContainer } from './styles';

const AppLayout: React.FC<PropsChildrenOnly> = ({ children }) => {
  const { isMobile } = useContext(LayoutContext);

  return (
    <LayoutContainer>
      <VerticalNavbar isOpen={!isMobile}>{children}</VerticalNavbar>
    </LayoutContainer>
  );
};

export default AppLayout;
