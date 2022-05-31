import { CircularProgress } from '@mui/material';
import React from 'react';
import AppLayout from '../../components/Layout';
import { LoaderPageContainer } from './styles';

const LoaderPage: React.FC = (props) => {
  return (
    <AppLayout>
      <LoaderPageContainer>
        <CircularProgress size={40} />
      </LoaderPageContainer>
    </AppLayout>
  );
};
export default LoaderPage;
