import React from 'react';
import { Toaster } from 'react-hot-toast';
import colors from '../../styles/colors';

const ToasterComponent: React.FC = () => {
  return (
    <Toaster
      position='top-right'
      toastOptions={{
        duration: 10000,
        style: {
          backgroundColor: colors.gray[600],
          color: '#e91919',
        },
      }}
    />
  );
};
export default ToasterComponent;
