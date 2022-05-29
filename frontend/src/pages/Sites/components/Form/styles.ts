import { styled, Container } from '@mui/material';
import { Form } from 'formik';

export const SiteFormContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

export const SiteFormForm = styled(Form)`
  background-color: white;
  padding: 1.5rem;
  border-radius: 8px;
  > *:not(:last-child) {
    margin-bottom: 1rem;
  }
`;
