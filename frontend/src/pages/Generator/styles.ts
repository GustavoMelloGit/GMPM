import { Box, styled } from '@mui/material';
import { defaultContentPaddingTop, mobileWidth } from '../../shared/constants';

export const GeneratorPageContainer = styled(Box)`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  color: white;
  padding-top: ${defaultContentPaddingTop};
  @media screen and (max-width: ${mobileWidth}px) {
    padding-top: 1rem;
  }
`;
