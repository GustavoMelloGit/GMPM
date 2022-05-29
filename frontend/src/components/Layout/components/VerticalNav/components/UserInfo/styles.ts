import { Box, IconButton, styled } from '@mui/material';

export const ProfileContainer = styled(Box)`
  display: flex;
  align-items: flex-start;
  width: 100%;
  margin-bottom: 5rem;
`;

export const UserInfoContainer = styled(Box)`
  color: white;
  min-width: 0;
  margin-left: 10px;
`;

export const ProfileButton = styled(IconButton)`
  margin-left: 15px;
  padding: 0;
  && * {
    color: white;
  }
`;
