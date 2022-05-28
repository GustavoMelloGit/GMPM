import React from 'react';
import { Formik } from 'formik';
import * as yup from 'yup';
import {
  LoginDivider,
  LoginEmailInput,
  LoginFormikForm,
  LoginFormTitle,
  LoginPasswordInput,
  LoginRememberMeCheckbox,
  LoginSubmitButton,
} from './styles';
import { CircularProgress, FormControlLabel } from '@mui/material';

export interface LoginFormValues {
  email: string;
  password: string;
  rememberMe: boolean;
}
interface LoginFormProps {
  onSubmit: (values: LoginFormValues) => Promise<void>;
  titleText: string;
}
const LoginForm: React.FC<LoginFormProps> = ({ onSubmit, titleText }) => {
  const validationSchema = yup.object().shape({
    email: yup
      .string()
      .email('Digite um e-mail válido')
      .required('Digite um e-mail'),
    password: yup
      .string()
      .required('Digite sua senha')
      .min(6, 'Senha muito curta'),
  });

  const initialValues: LoginFormValues = {
    email: '',
    password: '',
    rememberMe: true,
  };
  return (
    <Formik
      enableReinitialize
      validationSchema={validationSchema}
      onSubmit={async (values, { setSubmitting }) => {
        setSubmitting(true);
        await onSubmit(values);
        setSubmitting(false);
      }}
      initialValues={initialValues}
    >
      {({ setFieldValue, isSubmitting }) => (
        <LoginFormikForm>
          <LoginFormTitle variant='h4' component='h1'>
            {titleText}
          </LoginFormTitle>
          <LoginDivider sx={{ width: '100%' }} />
          <LoginEmailInput
            autoComplete='username'
            label='E-mail'
            name='email'
            type='email'
          />
          <LoginPasswordInput label='Senha' name='password' />
          <FormControlLabel
            control={
              <LoginRememberMeCheckbox
                onChange={(e) => {
                  setFieldValue('rememberMe', e.target.checked);
                }}
              />
            }
            label='Lembre-se de mim'
          />
          <LoginSubmitButton variant='contained' fullWidth type='submit'>
            {isSubmitting ? <CircularProgress size={24} /> : 'Entrar'}
          </LoginSubmitButton>
        </LoginFormikForm>
      )}
    </Formik>
  );
};
export default LoginForm;
