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
import { Navigate } from 'react-router-dom';
import { AppURLs } from '../../../shared/constants';
import toast from 'react-hot-toast';

const LoginPage: React.FC = () => {
  const { login, user } = useContext(authContext);

  if (Object.keys(user).length) {
    return <Navigate to={AppURLs.SITES} />;
  }

  const handleLogin = async (values: LoginFormValues) => {
    try {
      const response = await api.post('/login', values);
      login(response.data, values.rememberMe);
    } catch (e: any) {
      toast.error(e);
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
