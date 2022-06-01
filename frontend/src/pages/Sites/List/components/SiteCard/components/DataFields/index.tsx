import React, { useState } from 'react';
import { IconButton, InputAdornment, TextField } from '@mui/material';
import { Site } from '../../../../../../../shared/types/Site';
import { DataFieldsWrapper } from './styles';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import zxcvbn from 'zxcvbn';

interface DataFieldsProps {
  site: Site;
}

const DataFields: React.FC<DataFieldsProps> = ({ site }) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleCopyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  const handleTogglePassword = () => {
    setShowPassword((prev) => !prev);
  };

  const validateStrongPassword = (password: string) => {
    return zxcvbn(password).score > 2;
  };

  return (
    <DataFieldsWrapper>
      <TextField
        label='E-mail'
        value={site.username}
        variant='filled'
        fullWidth
        disabled
        InputProps={{
          endAdornment: (
            <InputAdornment position='end'>
              <IconButton
                aria-label='copia o email para área de transferência'
                onClick={handleCopyToClipboard.bind(null, site.username)}
                edge='end'
              >
                <ContentCopyIcon className='icon' />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
      <TextField
        label='Senha'
        value={site.password}
        type={showPassword ? 'text' : 'password'}
        variant='filled'
        fullWidth
        disabled
        error={!validateStrongPassword(site.password)}
        helperText={
          !validateStrongPassword(site.password) ? 'Cuidado! Senha fraca' : ''
        }
        InputProps={{
          endAdornment: (
            <React.Fragment>
              <InputAdornment position='end'>
                <IconButton
                  aria-label='mostra/esconde a senha'
                  onClick={handleTogglePassword}
                  edge='end'
                >
                  {showPassword ? (
                    <VisibilityOffIcon className='icon' />
                  ) : (
                    <VisibilityIcon className='icon' />
                  )}
                </IconButton>
              </InputAdornment>
              <InputAdornment position='end'>
                <IconButton
                  aria-label='copia o email para área de transferência'
                  onClick={handleCopyToClipboard.bind(null, site.password)}
                  edge='end'
                >
                  <ContentCopyIcon className='icon' />
                </IconButton>
              </InputAdornment>
            </React.Fragment>
          ),
        }}
      />
    </DataFieldsWrapper>
  );
};
export default React.memo(DataFields);
