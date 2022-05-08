import React from 'react';
import { Box } from '@mui/system';
import { Typography } from '@mui/material';
import { HomeContentGrid, HomeHeader } from './styles';
import { SearchInput } from '../../components/Inputs';
import sites from '../../mocks/Sites.json';
import SiteCard from './components/SiteCard';

const SitesPage: React.FC = () => {
  return (
    <Box>
      <HomeHeader>
        <Typography variant='h2' component='h1'>
          Sites
        </Typography>
        <SearchInput />
      </HomeHeader>
      <HomeContentGrid>
        {sites.sites.map((site, index) => (
          <SiteCard key={index} site={site} />
        ))}
      </HomeContentGrid>
    </Box>
  );
};
export default SitesPage;
