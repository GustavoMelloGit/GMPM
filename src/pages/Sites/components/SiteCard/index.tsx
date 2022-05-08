import React, { useState } from 'react';
import { Site } from '../../../../shared/types/Site';
import {
  Card,
  Box,
  Divider,
  Typography,
  Button,
  TextField,
  InputAdornment,
  IconButton,
} from '@mui/material';
import {
  SiteCardContentWrapper,
  SiteCardHeader,
  SiteCardMenuIcon,
  SiteCardGoToWebsite,
} from './styles';

//Icons
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import LogoutIcon from '@mui/icons-material/Logout';

interface SiteCardProps {
  site: Site;
}

const SiteCard: React.FC<SiteCardProps> = ({ site }) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleCopyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  const handleTogglePassword = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <Card>
      <Box px={2} py={1}>
        <SiteCardHeader>
          <Box minWidth={0}>
            <Typography variant='h6' component='p' color='black' noWrap>
              {site.title}
            </Typography>
            <Typography
              variant='body2'
              component='p'
              color='textSecondary'
              noWrap
            >
              {site.url}
            </Typography>
          </Box>
          <Button aria-label={`abrir menu ${site.title}`} variant='text'>
            <SiteCardMenuIcon />
          </Button>
        </SiteCardHeader>
        <Divider />
        <SiteCardContentWrapper>
          <TextField
            label='E-mail'
            value={site.email}
            variant='filled'
            fullWidth
            disabled
            InputProps={{
              endAdornment: (
                <InputAdornment position='end'>
                  <IconButton
                    aria-label='copia o email para área de transferência'
                    onClick={handleCopyToClipboard.bind(null, site.email)}
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
          <SiteCardGoToWebsite href={site.url}>
            <LogoutIcon className='icon' />
            Abrir no navegador
          </SiteCardGoToWebsite>
        </SiteCardContentWrapper>
      </Box>
    </Card>
  );
};
export default SiteCard;
