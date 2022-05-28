import React, { useContext } from 'react';
import {
  LoginPageAside,
  LoginPageContainer,
  LoginPageFormContainer,
  LoginPageHeadline,
} from './styles';
import { ReactComponent as LoginLogo } from '../../../assets/images/palm-recognition.svg';
import { Typography } from '@mui/material';
import colors from '../../../styles/colors';
import LoginForm, { LoginFormValues } from './components/form';
import api from '../../../service/api';
import { authContext } from '../../../contexts/Auth';

const LoginPage: React.FC = () => {
  const { login } = useContext(authContext);
  const handleLogin = async (values: LoginFormValues) => {
    try {
      const response = await api.post('/login', values);
      console.log(response.data);
      login(response.data, values.rememberMe);
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <LoginPageContainer>
      <LoginPageAside>
        <LoginLogo />
        <LoginPageHeadline>
          <Typography variant='h2' component='h1' color='#fff'>
            GMPM
          </Typography>
          <Typography variant='body1' component='h2' color={colors.orange[500]}>
            Seu gerenciador de senhas
          </Typography>
        </LoginPageHeadline>
      </LoginPageAside>
      <LoginPageFormContainer>
        <LoginForm onSubmit={handleLogin} titleText='Login' />
      </LoginPageFormContainer>
    </LoginPageContainer>
  );
};
export default LoginPage;
