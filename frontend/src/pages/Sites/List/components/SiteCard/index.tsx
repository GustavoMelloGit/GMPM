import React, { useState } from 'react';
import {
  Card,
  Box,
  Divider,
  Typography,
  Button,
  MenuItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import {
  SiteCardContentWrapper,
  SiteCardHeader,
  SiteCardMenuIcon,
  SiteCardGoToWebsite,
  SiteCardMenu,
} from './styles';
import { Site } from '../../../../../shared/types/Site';

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

  return (
    <Card>
      <Box px={2} py={1}>
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
          <Button
            aria-label={`abrir menu ${site.name}`}
            variant='text'
            onClick={handleToggleMenu}
          >
            <SiteCardMenuIcon />
          </Button>
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
        <SiteCardContentWrapper>
          <DataFields site={site} />
          <SiteCardGoToWebsite href={site.url}>
            <LogoutIcon className='icon' />
            Abrir no navegador
          </SiteCardGoToWebsite>
        </SiteCardContentWrapper>
      </Box>
    </Card>
  );
};
export default React.memo(SiteCard);