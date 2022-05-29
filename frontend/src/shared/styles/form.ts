import { styled, Container } from '@mui/material';
import { Box } from '@mui/system';
import { Form } from 'formik';

export const ModalFormContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
`;

export const ModalForm = styled(Form)`
  background-color: white;
  padding: 1.5rem;
  border-radius: 8px;
  width: 50%;
  max-width: 600px;
  min-width: 300px;
  > *:not(:last-child) {
    margin-bottom: 1rem;
  }
`;

export const ModalFormActionsContainer = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  flex-wrap: wrap;
`;
