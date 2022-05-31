import { Typography } from '@mui/material';
import React from 'react';
import { GeneratorPageContainer } from './styles';

const GeneratorPage: React.FC = (props) => {
  return (
    <GeneratorPageContainer>
      <Typography variant='h2' component='h1'>
        Gerador de senhas
      </Typography>
    </GeneratorPageContainer>
  );
};
export default GeneratorPage;
