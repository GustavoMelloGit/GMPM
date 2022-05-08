import { Box } from '@mui/system';
import styled from 'styled-components';

export const HomeHeader = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const HomeContentGrid = styled(Box)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 20px;
`;
