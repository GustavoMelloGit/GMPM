import React from 'react';
import { NotFoundContainer } from './styles';
import { ReactComponent as NotFoundImage } from '../../../assets/images/not-found.svg';
import { Typography } from '@mui/material';
import { AppURLs } from '../../../shared/constants';
import { useNavigate } from 'react-router-dom';
import DefaultButton from '../../../components/Buttons/DefaultButton';
import colors from '../../../styles/colors';

const NotFoundPage: React.FC = () => {
  const navigate = useNavigate();

  const handleGoToMenu = () => {
    navigate(AppURLs.SITES, {
      replace: true,
    });
  };
  return (
    <NotFoundContainer>
      <NotFoundImage />
      <Typography>Parece que você errou o caminho!</Typography>
      <DefaultButton onClick={handleGoToMenu} bgColor={colors.orange[500]}>
        Voltar para o menu
      </DefaultButton>
    </NotFoundContainer>
  );
};
export default NotFoundPage;
