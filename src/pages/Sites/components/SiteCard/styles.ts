import { Box, styled } from '@mui/system';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Button } from '@mui/material';

export const SiteCardHeader = styled(Box)`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 0.5rem;
`;

export const SiteCardMenuIcon = styled(MoreVertIcon)`
  fill: black;
`;

export const SiteCardContentWrapper = styled(Box)`
  margin-top: 1rem;
  > *:not(:last-child) {
    margin-bottom: 1rem;
  }
  .icon {
    fill: black;
    width: 20px;
    height: 20px;
  }
`;

export const SiteCardGoToWebsite = styled(Button)`
  width: 100%;
  border: thin solid #000;
  border-radius: 0;
  color: #000;
  margin: 1rem 0;
`;
