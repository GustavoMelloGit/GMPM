import React from 'react';
import { PaginationProps } from '@mui/material';
import { PaginationWrapper, StyledPagination } from './styles';

const PaginationComponent: React.FC<PaginationProps> = (props) => {
  return (
    <PaginationWrapper>
      <StyledPagination {...props} />
    </PaginationWrapper>
  );
};
export default PaginationComponent;
