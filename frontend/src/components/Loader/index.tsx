import { CircularProgress } from '@mui/material';
import React from 'react';
import { LoaderContainer } from './styles';

const LoaderComponent: React.FC = (props) => {
  return (
    <LoaderContainer>
      <CircularProgress />
    </LoaderContainer>
  );
};
export default LoaderComponent;
