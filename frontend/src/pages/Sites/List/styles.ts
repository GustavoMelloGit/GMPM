import { Box, styled } from '@mui/system';
import {
  defaultContentPaddingTop,
  mobileWidth,
} from '../../../shared/constants';

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
  color: white;
  width: 100%;
  height: 100%;
  padding-top: ${defaultContentPaddingTop};
  > *:not(:last-child) {
    margin-bottom: 4rem;
  }
  @media screen and (max-width: ${mobileWidth}px) {
    padding-top: 1rem;
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
