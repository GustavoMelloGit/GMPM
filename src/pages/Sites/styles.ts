import { Box, styled } from '@mui/system';

export const HomeHeader = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const HomeContentGrid = styled(Box)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 20px;
`;

export const HomeContainer = styled(Box)`
  > *:not(:last-child) {
    margin-bottom: 4rem;
  }
`;
