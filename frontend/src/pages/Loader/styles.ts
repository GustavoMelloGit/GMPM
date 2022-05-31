import { styled } from '@mui/material';
import { Box } from '@mui/system';

export const LoaderPageContainer = styled(Box)`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  && * {
    color: white;
  }
`;
