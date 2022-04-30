import React, { useEffect, useState } from 'react';
import useWindowDimensions from '../../shared/hooks/useWindowDimensions';
import { PropsChildrenOnly } from '../../shared/types/utils';

interface LayoutContextProps {
  isMobile: boolean;
  toggleDrawer: () => void;
}

export const LayoutContext = React.createContext<Partial<LayoutContextProps>>(
  {}
);

const LayoutProvider: React.FC<PropsChildrenOnly> = ({ children }) => {
  const { width } = useWindowDimensions();
  const [layoutIsMobile, setLayoutIsMobile] = useState(width <= 768);

  const toggleIsMobile = () => {
    setLayoutIsMobile(!layoutIsMobile);
  };

  useEffect(() => {
    setLayoutIsMobile(width <= 768);
  }, [width]);

  return (
    <LayoutContext.Provider
      value={{ isMobile: layoutIsMobile, toggleDrawer: toggleIsMobile }}
    >
      {children}
    </LayoutContext.Provider>
  );
};
export default LayoutProvider;
