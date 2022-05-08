import React, { useEffect, useState } from 'react';
import useWindowDimensions from '../../shared/hooks/useWindowDimensions';
import { PropsChildrenOnly } from '../../shared/types/utils';

interface LayoutContextProps {
  isMobile: boolean;
  toggleDrawer: () => void;
  drawerIsOpen: boolean;
}

export const LayoutContext = React.createContext<LayoutContextProps>({
  isMobile: false,
  toggleDrawer: () => {},
  drawerIsOpen: false,
});

const LayoutProvider: React.FC<PropsChildrenOnly> = ({ children }) => {
  const { width } = useWindowDimensions();
  const [drawerIsOpen, setDrawerIsOpen] = useState(false);
  const [layoutIsMobile, setLayoutIsMobile] = useState(width <= 768);

  const toggleDrawer = () => {
    setDrawerIsOpen((prev) => !prev);
  };

  useEffect(() => {
    setLayoutIsMobile(width <= 768);
  }, [width]);

  return (
    <LayoutContext.Provider
      value={{ isMobile: layoutIsMobile, toggleDrawer, drawerIsOpen }}
    >
      {children}
    </LayoutContext.Provider>
  );
};
export default LayoutProvider;
