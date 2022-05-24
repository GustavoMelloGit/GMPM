import React, { useContext } from 'react';
import {
  LoginPageAside,
  LoginPageContainer,
  LoginPageFormContainer,
} from './styles';
import { ReactComponent as LoginLogo } from '../../../assets/images/palm-recognition.svg';
import { Box, Card, Typography } from '@mui/material';
import colors from '../../../styles/colors';
import LoginForm, { LoginFormValues } from './components/form';
import api from '../../../service/api';
import { authContext } from '../../../contexts/Auth';

const LoginPage: React.FC = () => {
  const { login } = useContext(authContext);
  const handleLogin = async (values: LoginFormValues) => {
    try {
      const response = await api.post('/login', values);
      login(response.data, values.rememberMe);
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <LoginPageContainer>
      <LoginPageFormContainer>
        <Box component={Card} p={5}>
          <LoginForm onSubmit={handleLogin} titleText='Login' />
        </Box>
      </LoginPageFormContainer>
      <LoginPageAside>
        <LoginLogo />
        <Typography variant='h2' component='h1' color='#fff'>
          GMPM
        </Typography>
        <Typography variant='body1' component='h2' color={colors.orange[500]}>
          Seu gerenciador de senhas
        </Typography>
      </LoginPageAside>
    </LoginPageContainer>
  );
};
export default LoginPage;
