import { Box, styled } from '@mui/system';

export const HomeHeader = styled(Box)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  justify-content: space-between;
  align-items: center;
  color: white;
`;

export const HomeContentGrid = styled(Box)`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(min(250px, 100%), 1fr));
  grid-gap: 20px;
`;

export const HomeContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  color: white !important;
  padding-bottom: 1rem;
  width: 100%;
  height: 100%;
  > *:not(:last-child) {
    margin-bottom: 4rem;
  }
`;

export const HomeActionContainer = styled(Box)`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  > *:not(:last-child) {
    margin-right: 15px;
  }
`;
