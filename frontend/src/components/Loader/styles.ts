import { styled, Box } from '@mui/material';

export const LoaderContainer = styled(Box)`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;

  && * {
    color: white;
  }
`;
