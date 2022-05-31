import { CircularProgress } from '@mui/material';
import { Formik } from 'formik';
import React from 'react';
import * as yup from 'yup';
import { PageForm, PageFormTitle } from '../../../../shared/styles/form';
import {
  AuthPageDivider,
  AuthSubmitButton,
  StyledPasswordInput,
  StyledTextInput,
} from '../styles';

export interface SignupFormValues {
  name: string;
  email: string;
  password: string;
}

interface SignupFormProps {
  onSubmit: (values: SignupFormValues) => Promise<void>;
  titleText: string;
  submitText: string;
}

const SignupForm: React.FC<SignupFormProps> = ({
  onSubmit,
  titleText,
  submitText,
}) => {
  const validationSchema = yup.object().shape({
    name: yup.string().required('Digite seu nome'),
    email: yup
      .string()
      .required('Digite seu e-mail')
      .email('Digite um e-mail válido'),
    password: yup
      .string()
      .required('Digite sua senha')
      .min(5, 'Senha muito curta'),
  });
  return (
    <Formik
      initialValues={{
        name: '',
        email: '',
        password: '',
      }}
      onSubmit={async (values, { setSubmitting }) => {
        setSubmitting(true);
        await onSubmit(values);
        setSubmitting(false);
      }}
      validationSchema={validationSchema}
      enableReinitialize
    >
      {({ isSubmitting }) => (
        <PageForm>
          <PageFormTitle variant='h4' component='h1'>
            {titleText}
          </PageFormTitle>
          <AuthPageDivider />
          <StyledTextInput
            required
            autoComplete='full-name'
            name='name'
            label='Nome'
          />
          <StyledTextInput required name='email' label='E-mail' type='email' />
          <StyledPasswordInput required name='password' label='Senha' />
          <AuthSubmitButton variant='contained' fullWidth type='submit'>
            {isSubmitting ? <CircularProgress size={24} /> : submitText}
          </AuthSubmitButton>
        </PageForm>
      )}
    </Formik>
  );
};
export default SignupForm;
