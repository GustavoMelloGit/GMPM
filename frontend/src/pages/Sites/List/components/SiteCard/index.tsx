import React, { useState } from 'react';
import {
  Card,
  Box,
  Divider,
  Typography,
  MenuItem,
  ListItemIcon,
  ListItemText,
  IconButton,
} from '@mui/material';
import {
  SiteCardContentWrapper,
  SiteCardHeader,
  SiteCardMenuIcon,
  SiteCardGoToWebsite,
  SiteCardMenu,
  SiteCardWrapper,
} from './styles';
import { Site } from '../../../../../shared/types/Site';
import { isValidUrl } from '../../../../../shared/utils/validators';
import { formatToValidUrl } from '../../../../../shared/utils/formatters';

//Icons
import LogoutIcon from '@mui/icons-material/Logout';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import DataFields from './components/DataFields';

interface SiteCardProps {
  site: Site;
  handleDeleteSite: (site: Site) => void;
  handleEditSite: (site: Site) => void;
}

const SiteCard: React.FC<SiteCardProps> = ({
  site,
  handleDeleteSite,
  handleEditSite,
}) => {
  const [menuIsOpen, setMenuIsOpen] = useState<null | HTMLElement>(null);

  const handleToggleMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
    setMenuIsOpen(event.currentTarget);
  };

  const handleOpenLinkOnNewTab = (url: string) => {
    if (isValidUrl(url)) {
      window.open(url, '_blank');
    } else {
      const formattedUrl = formatToValidUrl(url);
      window.open(formattedUrl, '_blank');
    }
  };

  return (
    <Card>
      <SiteCardWrapper>
        <Box>
          <SiteCardHeader>
            <Box minWidth={0}>
              <Typography variant='h6' component='p' color='black' noWrap>
                {site.name}
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
            <IconButton
              aria-label={`abrir menu ${site.name}`}
              onClick={handleToggleMenu}
            >
              <SiteCardMenuIcon />
            </IconButton>
            <SiteCardMenu
              anchorEl={menuIsOpen}
              open={Boolean(menuIsOpen)}
              onClose={() => setMenuIsOpen(null)}
              MenuListProps={{
                'aria-labelledby': 'site-card-menu',
              }}
            >
              <MenuItem onClick={handleEditSite.bind(this, site)}>
                <ListItemIcon>
                  <EditIcon />
                </ListItemIcon>
                <ListItemText>Editar</ListItemText>
              </MenuItem>
              <MenuItem onClick={handleDeleteSite.bind(this, site)}>
                <ListItemIcon>
                  <DeleteIcon />
                </ListItemIcon>
                <ListItemText>Excluir</ListItemText>
              </MenuItem>
            </SiteCardMenu>
          </SiteCardHeader>
          <Divider />
        </Box>
        <SiteCardContentWrapper>
          <DataFields site={site} />
          <SiteCardGoToWebsite
            onClick={handleOpenLinkOnNewTab.bind(this, site.url)}
          >
            <LogoutIcon className='icon' />
            Abrir no navegador
          </SiteCardGoToWebsite>
        </SiteCardContentWrapper>
      </SiteCardWrapper>
    </Card>
  );
};
export default React.memo(SiteCard);
