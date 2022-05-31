import React from 'react';
import { Formik } from 'formik';
import * as yup from 'yup';
import { LoginRememberMeCheckbox } from './styles';
import { CircularProgress, FormControlLabel } from '@mui/material';
import { PageForm, PageFormTitle } from '../../../../shared/styles/form';
import {
  AuthPageDivider,
  AuthSubmitButton,
  StyledTextInput,
  StyledPasswordInput,
} from '../styles';

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
      .min(5, 'Senha muito curta'),
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
      {({ setFieldValue, isSubmitting, values }) => (
        <PageForm>
          <PageFormTitle variant='h4' component='h1'>
            {titleText}
          </PageFormTitle>
          <AuthPageDivider />
          <StyledTextInput
            autoComplete='username'
            label='E-mail'
            name='email'
            type='email'
          />
          <StyledPasswordInput label='Senha' name='password' />
          <FormControlLabel
            control={
              <LoginRememberMeCheckbox
                checked={values.rememberMe}
                onChange={(e) => {
                  setFieldValue('rememberMe', e.target.checked);
                }}
              />
            }
            label='Lembre-se de mim'
          />
          <AuthSubmitButton variant='contained' fullWidth type='submit'>
            {isSubmitting ? <CircularProgress size={24} /> : 'Entrar'}
          </AuthSubmitButton>
        </PageForm>
      )}
    </Formik>
  );
};
export default LoginForm;
