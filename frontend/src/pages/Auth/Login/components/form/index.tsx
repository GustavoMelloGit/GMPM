import React from 'react';
import { Formik } from 'formik';
import * as yup from 'yup';
import {
  FormikPasswordInput,
  FormikTextInput,
} from '../../../../../components/Inputs';
import {
  LoginFormikForm,
  LoginRememberMeCheckbox,
  LoginSubmitButton,
} from './styles';
import { Divider, Typography, FormControlLabel } from '@mui/material';
import colors from '../../../../../styles/colors';

export interface LoginFormValues {
  email: string;
  password: string;
  rememberMe: boolean;
}
interface LoginFormProps {
  onSubmit: (values: LoginFormValues) => void;
  titleText: string;
}
const LoginForm: React.FC<LoginFormProps> = ({ onSubmit, titleText }) => {
  const validationSchema = yup.object().shape({
    email: yup.string().email().required('Digite um e-mail'),
    password: yup.string().required('Digite sua senha'),
  });
  const initialValues: LoginFormValues = {
    email: '',
    password: '',
    rememberMe: false,
  };
  return (
    <Formik
      enableReinitialize
      validationSchema={validationSchema}
      onSubmit={onSubmit}
      initialValues={initialValues}
    >
      {() => (
        <LoginFormikForm>
          <Typography color={colors.gray[700]} variant='h4' component='h1'>
            {titleText}
          </Typography>
          <Divider sx={{ width: '100%' }} />
          <FormikTextInput label='E-mail' name='email' type='email' />
          <FormikPasswordInput label='Senha' name='password' />
          <FormControlLabel
            control={<LoginRememberMeCheckbox />}
            label='Lembre-se de mim'
          />
          <LoginSubmitButton variant='contained' fullWidth type='submit'>
            Entrar
          </LoginSubmitButton>
        </LoginFormikForm>
      )}
    </Formik>
  );
};
export default LoginForm;
