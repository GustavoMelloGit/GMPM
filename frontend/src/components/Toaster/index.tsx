import React from 'react';
import { Toaster } from 'react-hot-toast';
import colors from '../../styles/colors';

const ToasterComponent: React.FC = () => {
  return (
    <Toaster
      position='top-right'
      toastOptions={{
        duration: 2000,
        style: {
          backgroundColor: '#fff',
          color: 'black',
        },
        error: {
          style: {
            color: colors.orange[900],
          },
        },
      }}
    />
  );
};
export default ToasterComponent;
