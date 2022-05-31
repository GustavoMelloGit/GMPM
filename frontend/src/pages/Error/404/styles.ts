import { Container, styled } from '@mui/material';

export const NotFoundContainer = styled(Container)`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: white;

  svg {
    width: 35vw;
    min-width: 300px;
    max-width: 500px;
    height: auto;
  }

  > *:not(:last-child) {
    margin-bottom: 15px;
  }
`;
